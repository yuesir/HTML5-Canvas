
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.lineJoin = 'round';
context.lineWidth = 30;

context.font = '24px Helvetica';
context.fillText('Click anywhere to erase', 175, 200);

context.strokeStyle = 'goldenrod';  //描边的颜色
context.fillStyle = 'rgba(0, 0, 255, 0.5)'; //填充的颜色

context.strokeRect(75, 100, 200, 200);
context.fillRect(325, 100, 200, 200);

context.canvas.onmousedown = function (e) {
   context.clearRect(0, 0, canvas.width, canvas.height);
};
