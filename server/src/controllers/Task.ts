class Task {
  db;
  parent;
  constructor(parent) {
      this.db = parent.db;
      this.parent = parent;
  }
  handleGetAllTasksByProjectId = (req, res) => {
    const {projectId} = req.params;
    this.db('backlog')
    .select(
      'backlog.project_id',
      'backlog.backlog_id',
      'backlog_task.backlog_task_id',
      'backlog_task.title',
      'backlog_task.category',
      'backlog_task.progress',
      'task.description',
      'task.difficulty'
    )
    .innerJoin('backlog_task', 'backlog_task.backlog_id', 'backlog.backlog_id')
    .innerJoin('task', 'task.task_id', 'backlog_task.task_id')
    .where({
      'backlog.project_id': projectId,
      'is_sprint': false
    })
    .then( tasksRes => {
      res.json(tasksRes);
    })
    .catch(err => res.status(400).json('unable to get tasks'))
  }
  handleGetAllTasksBacklogId = (req, res) => {
    const {backlogId} = req.params;
    this.db('backlog')
    .select(
      'backlog.project_id',
      'backlog.backlog_id',
      'backlog_task.backlog_task_id',
      'backlog_task.title',
      'backlog_task.category',
      'backlog_task.progress',
      'task.description',
      'task.difficulty'
    )
    .innerJoin('backlog_task', 'backlog_task.backlog_id', 'backlog.backlog_id')
    .innerJoin('task', 'task.task_id', 'backlog_task.task_id')
    .where({
      'backlog.backlog_id': backlogId
    })
    .then( tasksRes => {
      res.json(tasksRes);
    })
    .catch(err => res.status(400).json('unable to get tasks'))
  }
  handleAddTask = (req, res) => {
    const {projectId: project_id} = req.params;
    const { 
      description, 
      difficulty, 
      title,
      progress,
    } = req.body;
    this.db('backlog')
    .where({
      project_id,
      'is_sprint': false
    })
    .select('backlog_id')
    .then( ([backlogRes]) => {
      const {backlog_id} = backlogRes;
      this.db.transaction(trx => {
        trx('task')
          .insert({
            description,
            difficulty,
            project_id,
            created_on: new Date()
          },'*')
          .then( ([taskRes]) => {
            const {task_id, created_on} = taskRes;
            return trx('backlog_task')
            .insert({
              task_id,
              backlog_id,
              title,
              progress,
              last_updated: created_on
            },'*')
            .then( ([backlog_taskRes]) => {
              res.json(Object.assign(taskRes, {backlog_task: backlog_taskRes}));
            })
          })
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .catch(err => res.status(400).json({
        message: 'unable to add task',
        err
      }))
    })
    .catch(err => res.status(400).json(err))

    // this.db.transaction(trx => {
    //   trx('task')
    //     .insert({
    //       description,
    //       difficulty,
    //       project_id,
    //       created_on: new Date()
    //     },'*')
    //     .then( ([taskRes]) => {
    //       const {task_id, created_on} = taskRes;
    //       return trx('backlog_task')
    //       .insert({
    //         task_id,
    //         backlog_id,
    //         title,
    //         progress,
    //         last_updated: created_on
    //       },'*')
    //       .then( ([backlog_taskRes]) => {
    //         res.json(Object.assign(taskRes, {backlog_task: backlog_taskRes}));
    //         // res.json(backlog_taskRes);
    //       })
    //     })
    //     .then(trx.commit)
    //     .catch(trx.rollback);
    // })
    // .catch(err => res.status(400).json({
    //   message: 'unable to add task',
    //   err
    // }))
  }
  handleUpdateTask = (req, res) => {
    const { taskId } = req.params;
    const { description, difficulty } = req.body;
    const changes = {
      description,
      difficulty,
      last_updated: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }
    this.db('task')
      .where('task_id', '=', taskId)
      .update(changes, '*')
      .then( ([taskRes]) => {
        res.json(taskRes)
      })
      .catch(err => res.status(400).json('unable to update task'))
  }
  handleDeleteTask = (req, res) => {
    const {taskId} = req.params;
    this.db('task')
      .where('task_id', "=", taskId)
      .del()
  }
}

export default Task;