"use strict";
var index_component_1 = require("./routes/index/index.component");
var threads_component_1 = require("./routes/threads/threads.component");
exports.routeComponents = [];
exports.routes = [
    route({
        path: "",
        component: index_component_1.IndexComponent,
    }),
    route({
        path: "threads",
        component: threads_component_1.ThreadsComponent,
    }),
];
function route(component) {
    exports.routeComponents.push(component.component);
    return component;
}
