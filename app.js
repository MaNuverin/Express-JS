import Beranda from "./controller/Beranda.js"
import blog from "./controller/blog.js"
const router = async () => {
    const routes = [
        {path : "/", view : Beranda},
        {path : "/blog", view : blog},
    ]
    const value = routes.map((route) => {
        return {
            route : route,
            isMatch : location.pathname === route.path,
        }
    })
    const sad = value.find(result => result.isMatch)
    if(!sad){
        sad = {
            route : routes[0],
            isMatch : true,
        }
    }
    const view = new sad.route.view();
    document.getElementById('app').innerHTML = await view.Html();
}
window.addEventListener("popstate", router)
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-page]')){
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router()
        }
        
    })
    router();
})