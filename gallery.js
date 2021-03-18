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

    var modalDiv = document.createElement("div");
    modalDiv.className = 'modal';

    var modalBgDiv = document.createElement("div");
    modalBgDiv.setAttribute('id', 'modal-bg');

    var modalContentDiv = document.createElement("div");
    modalContentDiv.className = 'modal-content';

    var modalImg = document.createElement('img');
    modalImg.setAttribute('id', 'modal-img');
    modalImg.setAttribute('src', clickedImage.src);

    var modalAside = document.createElement('aside');
    modalAside.setAttribute('id', 'modal-aside');

    var modalHeader = document.createElement('header');

    var rowSmall = document.createElement("div");
    rowSmall.className = 'row small';

    var profileImageSmall = document.createElement('img');
    profileImageSmall.setAttribute('id', 'profile-image-small');
    profileImageSmall.setAttribute('src', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
