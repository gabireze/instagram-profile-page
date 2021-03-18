let images = [
  { 'src': 'https://via.placeholder.com/1080x1350', 'likes': 0 },
  { 'src': 'https://via.placeholder.com/500', 'likes': 0 },
  { 'src': 'https://via.placeholder.com/720x1080', 'likes': 0 },
  { 'src': 'https://via.placeholder.com/293', 'likes': 0 },
  { 'src': 'https://via.placeholder.com/450', 'likes': 0 },
  { 'src': 'https://via.placeholder.com/1080x1350', 'likes': 0 },
];
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let modalBg = document.querySelector('#modal-bg');
let clickedImage = {}

for (let i = 0; i < images.length; i++) {
  if (!document.getElementById("images")) {
    var imagesSection = document.createElement("section")
    imagesSection.setAttribute('id', 'images');
  }

  var imageDiv = document.createElement("div");
  imageDiv.className = 'card-img';

  var currentImage = document.createElement("img");
  currentImage.className = 'small-img';
  currentImage.setAttribute('src', images[i]['src']);

  var id = hashGenerator();
  images[i].id = id;

  imageDiv.appendChild(currentImage);
  imagesSection.appendChild(imageDiv);

  document.getElementById("main").appendChild(imagesSection);
}

let sectionImages = document.querySelectorAll('.small-img');

for (let i = 0; i < images.length; i++) {
  sectionImages[i].addEventListener('click', function () {
    clickedImage = images[i];
    var srcImage = clickedImage.src;
    modalImg.setAttribute('src', srcImage);
    modal.classList.toggle('modal-active');
  });
}

modalBg.addEventListener('click', function () {
  modal.classList.toggle('modal-active');
  clickedImage = {}
});

function likePhoto() {
  ++images.find(image => clickedImage.id === image.id).likes;
}

function hashGenerator() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function submitCommentary() {
  if (!images.find(image => clickedImage.id === image.id).comments) {
    images.find(image => clickedImage.id === image.id).comments = [];
  }
  let commentary = {
    'id': hashGenerator(),
    'commentary': document.getElementById("commentary").value
  }
  images.find(image => clickedImage.id === image.id).comments.push(commentary);
  document.getElementById("commentary").value = '';
}