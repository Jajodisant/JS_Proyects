const app = document.getElementById("app");

function navBar() {

    return `
        <nav>
            <a href="#home">Home</a>
            <a href="#service">Services</a>
            <a href="#contact">Contact</a>                     
        </nav>
        `;
}

function homePage() {
    return '<h1> Home </h1> <p>Welcome ours SPA</p>';
}
function servicesPage() {
    return '<h1> Services </h1> <p>Frontend with JS</p>';
}
function contactPage() {
    return '<h1> Contact </h1> <p>clan@hamiltom.dev</p>';
}
function pageNotFound() {
    return '<h1> 404 </h1> <p>Not found!</p>';
}

function render(views){
    
    app.innerHTML= `
        ${navBar()}
        <section>
            ${views}
        </section>
        `;
}

function router(){

    const route = location.hash;
    
    switch (route){
        case '#home':
            render(homePage());
            break;
        case '#service':
            render(servicesPage());
            break;
        case '#contact':
            render(contactPage());
            break;
        default:
            render(pageNotFound());
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);