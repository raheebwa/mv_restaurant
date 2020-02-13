// import your function
import renderBanner from './modules/banner';

function component() {
    var element = document.createElement('div');

    // use your function!
    element.innerHTML = myName('Cody');
    return element;
}

document.getElementById('content').appendChild(renderBanner());
