let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let modalBg = document.querySelector('#modal-bg');
let srcVal = "";

var thx = '';

for (let i = 0; i < imagens.length; i++) {
  imagens[i].dataset.likes = 0;
  imagens[i].addEventListener('click', function () {
    thx = imagens[i];
    srcVal = imagens[i].getAttribute('src');
    document.getElementById('likes').value = thx.attributes['data-likes'].value;
    document.getElementById('likes').innerHTML = thx.attributes['data-likes'].value;
    modalImg.setAttribute('src', srcVal);
    modal.classList.toggle('modal-active');
  });
}

modalBg.addEventListener('click', function () {
  modal.classList.toggle('modal-active');
  thx = '';
  console.log(thx)
});

modalImg.addEventListener('dblclick', function () {
  buttonClick();
});

function buttonClick() {
  ++thx.attributes['data-likes'].value;
  document.getElementById('likes').innerHTML = thx.attributes['data-likes'].value;
}
