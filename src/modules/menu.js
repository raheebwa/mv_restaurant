// 1. Render Card columns container
const cardContainer = document.createElement('div');
cardContainer.setAttribute('class', 'card-columns');

// 2. Render Card
function myCard(imageSrc, cardHeading, cardContent) {
    // 2.1 Render Card div 
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    //  2.2. Render Card Body
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body text-center');
    //  2.3 image
    const cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'card-img-top');
    cardImg.src = imageSrc;
    //  2.4 title
    const cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = cardHeading;
    //  2.5 content
    const cardP = document.createElement('p');
    cardP.setAttribute('class', 'card-text');
    cardP.innerText = cardContent;

    // 2.6 Append All together
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardP);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    return card;
}
//  5. Data for Cards
let menuItems = [
    {
            iitemImg: './assets/menu-1.png',
            itemName: 'Cute Burger Fish',
            itemDesc: 'UGX 25000/-'
        }, 
        {
            iitemImg: './assets/menu-2.png',
            itemName: 'Cute Burger Chicken',
            itemDesc: 'UGX 35000/-'
        }, 
        {
            iitemImg: './assets/menu-3.png',
            itemName: 'Cute Burger Beef',
            itemDesc: 'UGX 20000/-'
        },
];

//  6. Function build Menu page
function renderMenuPage() {
    menuItems.forEach(item => {
        cardContainer.appendChild(myCard(
            item.iitemImg,
            item.itemName,
            item.itemDesc
        ));
    });
    return cardContainer;
}
//  7. Export Menu Page
export default renderMenuPage;