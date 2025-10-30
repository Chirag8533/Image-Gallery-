let currentImageIndex = 0;
let images = [];

document.querySelectorAll('.images img').forEach((img, index) => {
  img.addEventListener('click', () => {
    images = Array.from(document.querySelectorAll('.images img'));
    currentImageIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('#gallery img');
  allImages.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.style.display = '';
    } else {
      img.style.display = 'none';
    }
  });
}
