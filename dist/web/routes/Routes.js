"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const SignupPage_1 = __importDefault(require("../pages/SignupPage/SignupPage"));
const Login_1 = __importDefault(require("../pages/Login/Login"));
function RoutesApp() {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<SignupPage_1.default />}/>
      <react_router_dom_1.Route path='/login' element={<Login_1.default />}/>
    </react_router_dom_1.Routes>);
}
exports.default = RoutesApp;
