const images = [
    { src: 'image_1.jpg' },
    { src: 'image_2.jpg' },
    { src: 'image_3.jpg' },
    { src: 'image_4.jpg' },
    { src: 'image_5.jpg' },
    { src: 'image_6.jpg' },
    { src: 'image_7.jpg' },
    { src: 'image_8.jpg' },
    { src: 'image_9.jpg' },
    { src: 'image_10.jpg' },
    { src: 'image_11.jpg' },
    { src: 'image_12.jpg' },
    { src: 'image_13.jpeg' },
    { src: 'image_14.jpg' },
    { src: 'image_15.jpg' }
];

let currentImageIndex = 0;

function showFullImage(index) {
    currentImageIndex = index;
    document.getElementById('fullImageContainer').style.display = "flex";
    updateFullImage();
}

function closeFullImage() {
    document.getElementById('fullImageContainer').style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateFullImage();
}

function updateFullImage() {
    const fullImage = document.getElementById('fullImage');
    fullImage.src = images[currentImageIndex].src;
}
