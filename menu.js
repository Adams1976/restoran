export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const heading = document.createElement('h1');
    heading.textContent = 'Меню ';

    const heading2 = document.createElement('h2')
    heading2.classList.add('heading')
    heading2.innerHTML = 'Добро пожаловать в Urban Bites <br> ресторан на высоте 3 этажа, прямо на площади Путина!'
    
    const menuList = document.createElement('div');
    menuList.classList.add('blocks');

    for (let i = 0; i < 6; i++) { 
        const menuBlock = document.createElement('div');
        menuBlock.classList.add('block');

        const menuImg = document.createElement('img');
        menuImg.classList.add('menu-img');
        menuImg.setAttribute('src', './images/fac19e0f2cbb5be17b6c.png');
        menuImg.setAttribute('width', '210px');

        const blockInfo = document.createElement('div');
        blockInfo.classList.add('block-info');

        const blockTitle = document.createElement('p');
        blockTitle.classList.add('block-title');
        blockTitle.textContent = 'Сочный Шашлык';

        const blockTitle1 = document.createElement('p');
        blockTitle1.textContent = 'Лучший шашлык в регионе';

        const blockIcon = document.createElement('div');
        blockIcon.classList.add('block-icon');

        for (let j = 0; j < 5; j++) { 
            const iconStar = document.createElement('img');
            iconStar.setAttribute('src', './images/icons8-звезда-48.png');
            iconStar.setAttribute('width', '25px');
            blockIcon.appendChild(iconStar);
        }

        const blockPrice = document.createElement('div');
        blockPrice.classList.add('block-price');

        const blockPriceTitle = document.createElement('p');
        blockPriceTitle.classList.add('block-title');
        blockPriceTitle.textContent = '$10';

        const menuListButton = document.createElement('button');
        menuListButton.classList.add('block-button');
        menuListButton.textContent = 'купить';

        menuBlock.appendChild(menuImg);
        menuBlock.appendChild(blockInfo);
        blockInfo.appendChild(blockTitle);
        blockInfo.appendChild(blockTitle1);
        blockInfo.appendChild(blockIcon);
        blockInfo.appendChild(blockPrice);
        blockPrice.appendChild(blockPriceTitle);
        blockPrice.appendChild(menuListButton);

        menuList.appendChild(menuBlock);
    }

    content.appendChild(heading);
    content.appendChild(heading2);
    content.appendChild(menuList);
}