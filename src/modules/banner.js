const logo = source => {
  const classes = 'img-fluid rounded-circle';
  const imgLogo = document.createElement('img');
  imgLogo.alt = 'logo';
  imgLogo.width = 200;
  imgLogo.src = source;
  imgLogo.setAttribute('class', classes);

  return imgLogo;
};

const heading = (xcontent, type = 'h1') => {
  const myH1 = document.createElement(type);
  myH1.innerHTML = xcontent;
  myH1.setAttribute('class', 'display-3');

  return myH1;
};

const paragraph = (content = '', pClass = '') => {
  const prgh = document.createElement('p');
  prgh.setAttribute('class', pClass);
  prgh.innerHTML = content;

  return prgh;
};
const tagline = cont => paragraph(cont, 'lead');

const btn = (cont, url, classes = 'btn btn-outline-light') => {
  const button = document.createElement('a');
  button.setAttribute('class', classes);
  button.innerHTML = cont;
  button.setAttribute('href', url);

  return button;
};
const renderBanner = () => {
  const msg = 'Welcome to Ramar\'s Restuarant';
  const jumbo = document.createElement('div');
  jumbo.setAttribute('class', 'jumbotron bg-dark text-white text-center');
  jumbo.appendChild(logo('./assets/logo.png'));
  jumbo.appendChild(heading(msg));
  jumbo.appendChild(tagline('Your one stop shop for the best meals'));
  jumbo.appendChild(btn('Order Now', '#'));

  return jumbo;
};
export default renderBanner;
