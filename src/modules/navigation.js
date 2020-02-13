
const myNav = document.createElement('ul');
myNav.setAttribute('class', 'nav nav-tabs');


function navLink(title, id){
    var myLi = document.createElement('li');
    myLi.setAttribute('class', 'nav-item');
    
    const myA = document.createElement('a');
    myA.setAttribute('href', '#' + id);
    myA.setAttribute('class', 'nav-link');
    myA.innerText = title;

    myLi.appendChild(myA);
    return myLi;
}


function createList(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });    
}


var links = [
    navLink('Home', 'home'),
    navLink('Menu', 'menu'),
    navLink('Contact', 'contact'),
];

function renderNav() {
    createList(myNav, links);
    return myNav;
}

export default renderNav;