//Mount the router
import router from "./router.js";
import {app} from "./app.js";

router(app);

//Bootstrap the app
angular.element(document).ready(function() {
    console.log('Bootstrapping es6 app', app);
    angular.bootstrap(document, [app.name]);
});