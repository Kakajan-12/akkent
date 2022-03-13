const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://media.istockphoto.com/photos/water-bottling-factory-picture-id1155187984?k=20&m=1155187984&s=612x612&w=0&h=1upgkWS8hcRHY4w4B2CFaWzObuFcKGwTOtmolGsQvM0=', 'https://static1.bigstockphoto.com/6/0/2/large1500/206608753.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);