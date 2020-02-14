// 1. Render container
const container = document.createElement('div');
container.setAttribute('class', 'text-center');

//  2. Render Paragraph
const paragraph = content => {
    const prgh = document.createElement('p');
    prgh.setAttribute('class', 'lead');
    prgh.innerText = content;
    return prgh;
}

//  2.1 REnder contact link
  const mailto = document.createElement('a');
  mailto.setAttribute('href', 'mailto:mail@raheebwa.com');
  mailto.setAttribute('class', 'link display-4 text-center');
  mailto.innerText = 'Email us here';

//  3. Data to render
let data = ['Feel free to contact us, Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates maxime animi natus officiis?'];
//  4. Function to render page 
const renderContactPage = () => {
    data.forEach(item => {
        container.appendChild(paragraph(item));
    });
    container.appendChild(mailto);
    return container;
}
export default renderContactPage;
