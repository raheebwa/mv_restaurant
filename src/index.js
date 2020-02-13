
import renderBanner from './modules/banner';
import renderNav from './modules/navigation';

const myHeader = document.getElementById('content');
myHeader.setAttribute('class', 'container');
myHeader.appendChild(renderBanner());
myHeader.appendChild(renderNav());

// console.log(renderNav());