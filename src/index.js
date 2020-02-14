
import renderBanner from './modules/banner';
import renderContactPage from './modules/contact';
import renderHomePage from './modules/home';
import renderMenuPage from './modules/menu';
import renderNav from './modules/navigation';

// Render Banner & Tabbed Navigation
const myHeader = document.getElementById('content');
myHeader.setAttribute('class', 'container mb-3');
myHeader.appendChild(renderBanner());
myHeader.appendChild(renderNav());

const clearContent = elementID => {
    let div = document.getElementById(elementID);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

// Render conatiner for main body
const myMain = document.createElement('main');
myMain.setAttribute('id', 'main-content')
myMain.setAttribute('class', 'my-3')
myHeader.append(myMain);

//  Event Listener 

// INitlaise with home page
document.getElementById('main-content').appendChild(renderHomePage());

// Define event listeneing function
const myEventListener = (id, action) => {
    let button = document.getElementById(id);
    button.addEventListener('click', () => {
        clearContent('main-content');
        document.getElementById('main-content').appendChild(action);
    });
}
// Add event listener to all tabs
myEventListener('home', renderHomePage());
myEventListener('menu', renderMenuPage());
myEventListener('contact', renderContactPage());

