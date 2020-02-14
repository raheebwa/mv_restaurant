
import renderBanner from './modules/banner';
import renderNav from './modules/navigation';
import renderHomePage from './modules/home';
import renderMenuPage from './modules/menu';
import renderContactPage from './modules/contact';

// Render Banner & Tabbed Navigation
const myHeader = document.getElementById('content');
myHeader.setAttribute('class', 'container mb-3');
myHeader.appendChild(renderBanner());
myHeader.appendChild(renderNav());

function clearContent(elementID) {
    var div = document.getElementById(elementID);

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
document.getElementById("main-content").appendChild(renderHomePage());

// define event listeneing function
function myEventListener(id, action) {
    var button = document.getElementById(id);
    button.addEventListener("click", function () {
        clearContent('main-content');
        document.getElementById("main-content").appendChild(action);
    });
}

// Add event listener to all tabs
myEventListener('home', renderHomePage());
myEventListener('menu', renderMenuPage());
myEventListener('contact', renderContactPage());

