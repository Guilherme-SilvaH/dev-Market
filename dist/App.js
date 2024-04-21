"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Routes_1 = __importDefault(require("./web/routes/Routes"));
function App() {
    return (<div>
      <react_router_dom_1.BrowserRouter>
        <Routes_1.default />
      </react_router_dom_1.BrowserRouter>
    </div>);
}
exports.default = App;
