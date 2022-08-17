var data = [
    {
        image: './images/house2.jpg',
        title: 'first houese',
        icon: '<i class="fa fa-house"></i>'
    },
    {
        image: './images/house3.jpg',
        title: 'second houese',
        icon: '<i class="fa fa-house"></i>'
    },
    {
        image: './images/house4.jpg',
        title: 'third houese',
        icon: '<i class="fa fa-house"></i>'
    },
    {
        image: './images/house5.jpg',
        title: 'fourth houese',
        icon: '<i class="fa fa-house"></i>'
    },
];


for (let index = 0; index < data.length; index++) {
    let father = document.querySelector('.images');
    let newDiv = document.createElement('div');
    newDiv.classList.add('position-relative')
    newDiv.classList.add('img1')

    let newImage = document.createElement('img')
    newImage.src = data[index].image; 
    newDiv.append(newImage);

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');

    cardText.innerHTML = data[index].icon + ' ' + data[index].title;

    newDiv.append(cardText)

    father.append(newDiv)
}