import Dashboard from "./views/Dashboard.js";
import post from "./views/post.js";
import Project from "./views/Project.js";
import postView from './views/postView.js'


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const Params =  (match) => {
   const value = match.result.slice(1);
   const keys =  Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
   return Object.fromEntries(keys.map((key, index) => {
    return [key, value[index]]
   }));
}
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}
const router = async() => {
    
    const routes = [
        {path : '/', view :  Dashboard},
        {path : '/blog', view : post},
        {path : '/blog/:id', view : postView},
        {path : '/project', view : Project}
    ]
    const pontential = routes.map(route => {
        return {
            route : route,
            result : location.pathname.match(pathToRegex(route.path))
        }
    })
    let match = pontential.find(pontential => pontential.result !== null);
    if(!match) {
        match = {
            route : routes[0],
            result : [location.pathname]
        } 
    }
    const views = new match.route.view( Params(match)); 
    document.getElementById('app').innerHTML = await views.getHTMLS(); 
}



window.addEventListener("popstate", router)
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    router();
})