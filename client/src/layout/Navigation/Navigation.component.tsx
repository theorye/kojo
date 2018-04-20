import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div className="navbar">
        <div>
            <ul>
                <NavLink to="/main" exact={true} className="link" activeClassName="active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17 16"
                            className="icon"
                        >
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length
                                d="M15.794,7.77 L11.984,3.864 L11.9839997,1.01706251 L11.0159997,1.03906251 L11.016,2.767 L8.502,0.245 C8.224,-0.031 7.776,-0.031 7.499,0.245 L0.206,7.771 C-0.069,8.048 -0.068,8.498 0.206,8.773 C0.482,9.049 0.933,9.049 1.209,8.772 L8,1.982 L14.793,8.772 C14.931,8.91 15.111,8.98 15.293,8.98 C15.474,8.98 15.654,8.912 15.794,8.773 C16.068,8.496 16.068,8.045 15.794,7.77 L15.794,7.77 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M3.043,8.532 L3.043,14.222 C3.043,14.616 3.26102394,15.0078125 3.61002394,15.0078125 L5.88702394,15.0078125 L5.95099996,11.0147705 L10.0249632,11.0147705 L10.0230128,15.0078125 L12.3260496,15.0078125 C12.6750496,15.0078125 12.958,14.617 12.958,14.222 L12.958,8.531 L8,3.625 L3.043,8.532 L3.043,8.532 Z"
                            />
                        </svg>
                    </li>
                </NavLink>
                <NavLink to="/main/profile" className="link" activeClassName="active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17 16"
                            className="icon"
                        >
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length
                                d="M11.564,9.004 C10.717,10.159 7.905,10.454 7.905,10.454 C7.905,10.454 5.029,10.17 4.182,9.028 C0.122,9.028 0,14.933 0,14.933 L15.808,14.933 C15.808,14.934 16.127,9.004 11.564,9.004 L11.564,9.004 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M10.818,3.02 C10.818,4.689 9.515,7.877 7.91,7.877 C6.303,7.877 5,4.689 5,3.02 C5,1.353 6.303,0 7.91,0 C9.515,0.001 10.818,1.353 10.818,3.02 L10.818,3.02 Z"
                            />
                        </svg>

                    </li>
                </NavLink>
                <NavLink to="/main/memberslist" className="link" activeClassName="active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="2 0 12 10"
                            className="icon"
                        >
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length
                                d="M9.855,7.053 C9.432,7.624 8.021,7.772 8.021,7.772 C8.021,7.772 6.58,7.63 6.156,7.066 C4.121,7.066 3.058,9.989 3.058,9.989 L12.984,9.989 C12.984,9.988 12.146,7.053 9.855,7.053 L9.855,7.053 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M9.943,2.918 C9.943,3.977 9.062,6 7.978,6 C6.89,6 6.011,3.977 6.011,2.918 C6.011,1.859 6.89,1 7.978,1 C9.062,1 9.943,1.859 9.943,2.918 L9.943,2.918 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M14.104,5.021 C13.733,5.596 12.577,5.902 12.577,5.902 C12.577,5.902 11.222,5.601 10.848,5.035 C10.848,5.035 10.836,5.699 10.271,6.471 C12.071,6.239 12.849,7.974 12.849,7.974 L15.98,7.98 C15.979,7.979 16.119,5.021 14.104,5.021 L14.104,5.021 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M13.99,1.533 C13.99,2.381 13.328,3.998 12.511,3.998 C11.691,3.998 11.03,2.381 11.03,1.533 C11.03,0.687 11.693,0 12.511,0 C13.328,0 13.99,0.688 13.99,1.533 L13.99,1.533 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M1.918,5.021 C2.296,5.592 3.467,5.896 3.467,5.896 C3.467,5.896 4.84,5.597 5.215,5.035 C5.215,5.035 5.229,5.695 5.801,6.461 C3.977,6.231 3.191,7.953 3.191,7.953 L0.021,7.958 C0.021,7.958 -0.122,5.021 1.918,5.021 L1.918,5.021 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M2.002,1.566 C2.002,2.394 2.666,3.977 3.481,3.977 C4.3,3.977 4.961,2.394 4.961,1.566 C4.961,0.737 4.299,0.065 3.481,0.065 C2.664,0.065 2.002,0.737 2.002,1.566 L2.002,1.566 Z"
                            />
                        </svg>

                    </li>
                </NavLink>
                <NavLink to="/main/projects" className="link" activeClassName="active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17 16"
                            className="icon"
                        >
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length
                                d="M7.35,3 L5.788,0.042 L2.021,0.042 L2.021,1.063 L0.023,1.063 L0.023,10.976 L1.043,10.976 L1.045,11.976 L15.947,11.976 L15.968,3 L7.35,3 L7.35,3 Z"
                            />
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length 
                                d="M13.964,1.982 L8.354,1.982 L8.024,1.042 L13.964,1.042 L13.964,1.982 Z"
                            />
                        </svg>
                    </li>
                </NavLink>
            </ul>
        </div>
        <div>
            <ul>
                <NavLink to="/main/admin" className="link" activeClassName="active">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17 16"
                            className="icon"
                        >
                            <path
                                fill="currentColor"
                                // tslint:disable-next-line:max-line-length
                                d="M8.00051234,0 C4.68670481,0 2,1.958 2,1.958 L2.00512339,8.056 C2.00512339,13.091 8.00153702,16 8.00153702,16 C8.00153702,16 14,13.259 14,8.041 L14,1.958 C14,1.958 11.3143199,0 8.00051234,0 L8.00051234,0 Z M9.607,7.875 L10.562,10.814 L8.062,8.998 L5.56,10.814 L6.515,7.875 L4.015,6.059 L7.106,6.059 L8.062,3.119 L9.017,6.059 L12.108,6.059 L9.607,7.875 L9.607,7.875 Z"
                            />
                        </svg>

                    </li>
                </NavLink>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        role="img"
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        data-prefix="far"
                        data-icon="cog"
                    >
                        <path
                            className=""
                            fill="currentColor"
                            // tslint:disable-next-line:max-line-length
                            d="M 452.515 237 l 31.843 -18.382 c 9.426 -5.441 13.996 -16.542 11.177 -27.054 c -11.404 -42.531 -33.842 -80.547 -64.058 -110.797 c -7.68 -7.688 -19.575 -9.246 -28.985 -3.811 l -31.785 18.358 a 196.276 196.276 0 0 0 -32.899 -19.02 V 39.541 a 24.016 24.016 0 0 0 -17.842 -23.206 c -41.761 -11.107 -86.117 -11.121 -127.93 -0.001 c -10.519 2.798 -17.844 12.321 -17.844 23.206 v 36.753 a 196.276 196.276 0 0 0 -32.899 19.02 l -31.785 -18.358 c -9.41 -5.435 -21.305 -3.877 -28.985 3.811 c -30.216 30.25 -52.654 68.265 -64.058 110.797 c -2.819 10.512 1.751 21.613 11.177 27.054 L 59.485 237 a 197.715 197.715 0 0 0 0 37.999 l -31.843 18.382 c -9.426 5.441 -13.996 16.542 -11.177 27.054 c 11.404 42.531 33.842 80.547 64.058 110.797 c 7.68 7.688 19.575 9.246 28.985 3.811 l 31.785 -18.358 a 196.202 196.202 0 0 0 32.899 19.019 v 36.753 a 24.016 24.016 0 0 0 17.842 23.206 c 41.761 11.107 86.117 11.122 127.93 0.001 c 10.519 -2.798 17.844 -12.321 17.844 -23.206 v -36.753 a 196.34 196.34 0 0 0 32.899 -19.019 l 31.785 18.358 c 9.41 5.435 21.305 3.877 28.985 -3.811 c 30.216 -30.25 52.654 -68.266 64.058 -110.797 c 2.819 -10.512 -1.751 -21.613 -11.177 -27.054 L 452.515 275 c 1.22 -12.65 1.22 -25.35 0 -38 Z m -52.679 63.019 l 43.819 25.289 a 200.138 200.138 0 0 1 -33.849 58.528 l -43.829 -25.309 c -31.984 27.397 -36.659 30.077 -76.168 44.029 v 50.599 a 200.917 200.917 0 0 1 -67.618 0 v -50.599 c -39.504 -13.95 -44.196 -16.642 -76.168 -44.029 l -43.829 25.309 a 200.15 200.15 0 0 1 -33.849 -58.528 l 43.819 -25.289 c -7.63 -41.299 -7.634 -46.719 0 -88.038 l -43.819 -25.289 c 7.85 -21.229 19.31 -41.049 33.849 -58.529 l 43.829 25.309 c 31.984 -27.397 36.66 -30.078 76.168 -44.029 V 58.845 a 200.917 200.917 0 0 1 67.618 0 v 50.599 c 39.504 13.95 44.196 16.642 76.168 44.029 l 43.829 -25.309 a 200.143 200.143 0 0 1 33.849 58.529 l -43.819 25.289 c 7.631 41.3 7.634 46.718 0 88.037 Z M 256 160 c -52.935 0 -96 43.065 -96 96 s 43.065 96 96 96 s 96 -43.065 96 -96 s -43.065 -96 -96 -96 Z m 0 144 c -26.468 0 -48 -21.532 -48 -48 c 0 -26.467 21.532 -48 48 -48 s 48 21.533 48 48 c 0 26.468 -21.532 48 -48 48 Z"
                        />
                    </svg>
                </li>
            </ul>
        </div>
    </div>
);