// 1. Render container
const container = document.createElement('div');
container.setAttribute('class', 'text-center');

//  2. Render Content
const paragraph = content => {
  const prgh = document.createElement('p');
  prgh.setAttribute('class', 'lead');
  prgh.innerText = content;
  return prgh;
};

//  3. Data to render
const data = [
  'Welcome to Ramar\'s Food. Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates maxime animi natus officiis?',
  'Our Menu,  Nihil ducimus sapiente ut corporis voluptatibus optio inventore adipisci.Quibusdam perspiciatis neque accusamus nam ? Ratione, quaerat placeat.',
  'Nihil ducimus sapiente ut corporis voluptatibus optio inventore adipisci.Quibusdam perspiciatis neque accusamus nam ? Ratione, quaerat placeat.',
];
//  4. Function to render page
const renderHomePage = () => {
  data.forEach(item => {
    container.appendChild(paragraph(item));
  });
  return container;
};
export default renderHomePage;
