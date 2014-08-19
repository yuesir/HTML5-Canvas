
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    repeatRadio = document.getElementById('repeatRadio'),
    noRepeatRadio = document.getElementById('noRepeatRadio'),
    repeatXRadio = document.getElementById('repeatXRadio'),
    repeatYRadio = document.getElementById('repeatYRadio'),
    image = new Image();

function fillCanvasWithPattern(repeatString) {
   var pattern = context.createPattern(image, repeatString);
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.fillStyle = pattern; //以图片作为填充
   context.fillRect(0, 0, canvas.width, canvas.height);
   context.fill();
};

repeatRadio.onclick = function (e) {
  fillCanvasWithPattern('repeat'); 
};

repeatXRadio.onclick = function (e) {
  fillCanvasWithPattern('repeat-x'); 
};

repeatYRadio.onclick = function (e) {
  fillCanvasWithPattern('repeat-y'); 
};

noRepeatRadio.onclick = function (e) {
  fillCanvasWithPattern('no-repeat'); 
};

image.src = 'redball.png';
image.onload = function (e) {
   fillCanvasWithPattern('repeat');
};

