import { BarPage } from "../pages/BarPage";
import { FooPage } from "../pages/FooPage";

export const routes = [
    {
        name: "foo", 
        path: "/foo", 
        component: FooPage
    }, 
    {
        name: "bar", 
        path: "/bar", 
        component: BarPage
    }, 
    
]