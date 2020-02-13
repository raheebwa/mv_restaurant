// 1. Render container
const container = document.createElement('div');
container.setAttribute('class', 'text-center');
container.setAttribute('id', 'home');

//  2. Render Content
const paragraph = (content) => {
    const p = document.createElement('p');
    p.setAttribute('class', 'lead');
    p.innerText = content;
    return p;
}

//  3. Data to render
let data = [
    'Welcome to Ramar\'s Food. Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates maxime animi natus officiis?',
    'Our Menu,  Nihil ducimus sapiente ut corporis voluptatibus optio inventore adipisci.Quibusdam perspiciatis neque accusamus nam ? Ratione, quaerat placeat.',
    'Nihil ducimus sapiente ut corporis voluptatibus optio inventore adipisci.Quibusdam perspiciatis neque accusamus nam ? Ratione, quaerat placeat.'
];

//  4. Function to render page 

function renderHomePage() {
    data.forEach(item => {
        container.appendChild(paragraph(item));
    });
    return container;
}

export default renderHomePage;