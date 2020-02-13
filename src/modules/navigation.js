
let links = [
    {
        title: "Home",
        id: "home"
    }, 
    {
        title: "Menu",
        id: "menu"
    },
    {
        title: "Contact us",
        id: "contact"
    }
];

const navList = () => {
    const myNav = document.createElement('ul');
    myNav.setAttribute('class', 'nav nav-tabs');
    return myNav;
}

const navLink = (title, id) => {
    var myLi = document.createElement('li');
    myLi.setAttribute('class', 'nav-link');
    
    const myA = document.createElement('a');
    myA.setAttribute('href', '#' + id);
    myA.setAttribute('class', 'nav-item');
    myA.innerText = title;

    myLi.innerHTML = myA;
    return myLi;
}


function renderNav() {
    links.forEach(link => {
        navList.appendChild(navLink(link.title, link.id));
    });
    return navList;    
}

export default renderNav;