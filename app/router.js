import {loginComponent} from "./components/login/loginComponent.js";
import {boardComponent} from "./components/game/board/boardComponent.js";
export default function mount(module) {
    console.log('mounting routes on', module);
    //Add components to appControllers module
    module.component('loginComponent', loginComponent);
    module.component('boardComponent', boardComponent);
    //Configure the modules router
    module.config(function ($stateProvider, $urlServiceProvider) {
        $urlServiceProvider.rules.otherwise({state: 'login'});
        $stateProvider.state('login', {
            url: '/login',
            component: 'loginComponent',
        });
        $stateProvider.state('start', {
            url: '/start/:loginName',
            component: 'boardComponent',
            params: {loginName: 'mouadh akrout'},
        });
    })
}
