
import renderBanner from './modules/banner';
import renderNav from './modules/navigation';
import renderHomePage from './modules/home';
import renderMenuPage from './modules/menu';
import renderContactPage from './modules/contact';

const myHeader = document.getElementById('content');
myHeader.setAttribute('class', 'container');
myHeader.appendChild(renderBanner());
myHeader.appendChild(renderNav());
