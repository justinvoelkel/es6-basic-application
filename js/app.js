import { User } from './models/user';
import { Router } from './router';
import { Task } from './tasks';

class App{
    constructor(routes){
        //construct the router with the existing routes
        this.router =  new Router(routes);

        //check for existing application state
        if(this.state){

            let state = this.state;
            this.user = state.user;
            this.tasks = state.tasks;
            this.payload = {
                user:this.user,
                tasks:this.tasks
            }

        } else {
            //set up instance of user - logged in user
            this.user = new User();

            //set up all other users
            var allUsers = this.user.generateUsers(5);

            //set up instance of task
            var task = new Task();

            //set up all the listed tasks
            this.tasks = task.generateTasks(allUsers);
            
            this.payload = {
                user: this.user,
                tasks: this.tasks
            };

            this.state = this.payload;
        }
        
    }

    run(){
        //run the route to fill the partial
        this.route();
    }

    route(){
        this.router.dispatch(this.payload);
    }

    set state(state){
        localStorage.state = JSON.stringify(state);
    }

    get state(){
        if(localStorage.state){
            return JSON.parse(localStorage.state);
        }
        return false;
    }

}

export { App };