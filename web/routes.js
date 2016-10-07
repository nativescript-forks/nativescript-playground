import { IndexComponent } from "./routes/index/index.component";
import { ThreadsComponent } from "./routes/threads/threads.component";
export var routeComponents = [];
export var routes = [
    route({
        path: "",
        component: IndexComponent,
    }),
    route({
        path: "threads",
        component: ThreadsComponent,
    }),
];
function route(component) {
    routeComponents.push(component.component);
    return component;
}
