
import renderBanner from './modules/banner';
import renderNav from './modules/navigation';

const header = document.getElementById('content');
header.setAttribute('class', 'container');
header.appendChild(renderBanner());
header.appendChild(renderNav());
