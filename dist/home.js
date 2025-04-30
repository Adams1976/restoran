export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 
     

    const heading = document.createElement('h1');
    heading.innerHTML = 'Добро пожаловать в ресторан <br><span class = "title-logo">Urban Bites<span>';
    heading.classList.add('title-restoran')

    const image = document.createElement('img');
    image.classList.add('img-home')
    image.src = 'https://mm-g.ru/upload/iblock/07f/07fee081eb7a21deac65b9560aa7af56.jpg'; 
    image.alt = 'Restaurant Image';

    const description = document.createElement('p');
    description.textContent = 'Ресторан европейской кухни';
    description.classList.add('descriptoin')

    const description1 = document.createElement('p');
    description1.textContent = 'Приходите отведать вкуснейшие блюда!';
    description1.classList.add('descriptoin')

    const buttonHome = document.createElement('button')
    buttonHome.classList.add('button-home')
    buttonHome.textContent = 'Заказать онлайн'

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(description);
    content.appendChild(description1)
    content.appendChild(buttonHome)

}