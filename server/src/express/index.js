// Tags http://usejsdoc.org/tags-param.html
// Class Documentation http://usejsdoc.org/howto-es2015-classes.html
// VSCODE EXTENSION: JSDocTags
const express = require('express')
const path = require('path');
const cors = require('cors');
const parser = require('body-parser')

const asyncMiddleware = controller => (req, res, next) =>
    Promise.resolve(controller(req, res, next)).catch(next);



const middleware = [];
/**
 * Represents an ExpressJS Application
 * @class ExpressApp 
 * @constructor
 * @param {string} [version="v1"] - Version of Routes
 * @param {number} [port="8080"] - Port Number
 */
class ExpressApp {
    constructor(port=8080, ORM) {        
        this.app = express();       
        this.app.use(parser.urlencoded({ extended: true }));
        this.app.use(parser.json());  

        if(ORM) this.app.use(ORM)

        if (process.env.NODE_ENV !== 'production') {
            this.mountRoute('GET', 'test', (req, res) => res.sendStatus(200) )
            this.mountStatic();
            this.app.use(cors())            
        }

        this.app.listen(port);
    }

    /**
    * Mount a Route
    * @param {string} type="use" - engine - default Handlebars others: hbs, pug, ejs, etc.
    * @param {string} route="/" - location of templates
    * @param {controller} controller - The callback that handles the response. 
    * @returns {void}
    */
    mountRoute(type, route, controller) {   
        this.app[type.toLowerCase()]("/" + route, asyncMiddleware((req, res, next) => controller(req, res, next)))
    }

    /**
     * Mount static files
     * @param {string} [route="/"] - route
     * @returns {void}
     */
    mountStatic(route="/") {
        this.app.use(route, express.static(path.join(__dirname, "../../static")))
    }

    /**
     * Mount a View Engine
     * @param {string} [engine="hbs"] - engine - default Handlebars others: hbs, pug, ejs, etc.
     * @param {string} [folderLocation="../src/views"] - location of templates
     * @returns {void}
     */
    mountView(engine="hbs", folderLocation=`../src/views/${engine}`) {
        this.app.set("view engine", engine);
        this.app.set("views", path.join(__dirname, folderLocation));
    }    


}

module.exports = {
    ExpressApp
}