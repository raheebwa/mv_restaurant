
const myNav = document.createElement('ul');
myNav.setAttribute('class', 'nav nav-tabs');
myNav.setAttribute('id', 'main-nav');


const navLink = (title, id) => {
    let myLi = document.createElement('li');
    myLi.setAttribute('class', 'nav-item');
    
    const myA = document.createElement('a');
    myA.setAttribute('id', id);
    myA.setAttribute('href', '#');
    myA.setAttribute('class', 'nav-link');
    myA.innerText = title;

    myLi.appendChild(myA);
    return myLi;
}


const createList = (parent, children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });    
}


let links = [
    navLink('Home', 'home'),
    navLink('Menu', 'menu'),
    navLink('Contact', 'contact')
];
const renderNav = () => {
    createList(myNav, links);
    return myNav;
}
export default renderNav;
