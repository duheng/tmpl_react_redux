"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var iconTypes = {
    fail: (React.createElement("svg", { viewBox: "0 0 72 72" },
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z", fill: "#FFF" }),
            React.createElement("path", { d: "M22 22l28.304 28.304m-28.304 0L50.304 22", stroke: "#FFF", strokeWidth: "2" })))),
    loading: React.createElement("div", { className: "light-toast-loading" }),
    success: (React.createElement("svg", { viewBox: "0 0 72 72" },
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z", fill: "#FFF" }),
            React.createElement("path", { stroke: "#FFF", strokeWidth: "2", d: "M19 34.54l11.545 11.923L52.815 24" }))))
};
function Icon(_a) {
    var type = _a.type;
    return iconTypes[type];
}
exports.default = Icon;
