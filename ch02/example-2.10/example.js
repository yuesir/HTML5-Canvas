
var context = document.getElementById('canvas').getContext('2d'),
    directionCheckbox = document.getElementById('directionCheckbox'),
    annotationCheckbox = document.getElementById('annotationCheckbox'),
    CLOCKWISE = 1,
    COUNTER_CLOCKWISE = 2;

// Functions.....................................................

function drawGrid(color, stepx, stepy) {
   context.save()

   context.strokeStyle = color;
   context.fillStyle = '#ffffff';
   context.lineWidth = 0.5;
   context.fillRect(0, 0, context.canvas.width, context.canvas.height);

   for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
     context.beginPath();
     context.moveTo(i, 0);
     context.lineTo(i, context.canvas.height);
     context.stroke();
   }

   for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
     context.beginPath();
     context.moveTo(0, i);
     context.lineTo(context.canvas.width, i);
     context.stroke();
   }

   context.restore();
}

function drawText() {
   context.save();
   context.font = '18px Arial';
   context.fillStyle = 'rgb(0, 0, 200)';
   context.fillText('Two arcs, one path', 10, 30);

   context.font = '16px Lucida Sans';
   context.fillStyle = 'navy';
   context.fillText('context.arc(300, 200, 150, 0, Math.PI*2, false)', 10, 360);
   context.fillText('context.arc(300, 200, 100, 0, Math.PI*2, !sameDirection)', 10, 380);
   context.restore();
}

function drawArcAnnotations(sameDirection) {
   context.save();
   context.font = '16px Lucida Sans';
   context.fillStyle = 'blue';
   context.fillText('CW', 345, 145);
   context.fillText(sameDirection ? 'CW' : 'CCW', 425, 75);
   context.restore();
}

function drawOuterCircleAnnotations(sameDirection) {
   context.save();
   context.beginPath();
   context.moveTo(410, 210);
   context.lineTo(500, 250);
   context.stroke();

   context.beginPath();
   context.arc(500, 250, 3, 0, Math.PI*2, false);
   context.fillStyle = 'navy';
   context.fill();

   context.font = '16px Lucida Sans';
   context.fillText(sameDirection ? '+1' : '-1', 455, 225);
   context.fillText(sameDirection ? '1' : '-1', 515, 255);
   context.restore();
}

function drawInnerCircleAnnotations(sameDirection) {
   context.save();
   context.beginPath();
   context.moveTo(300, 175);
   context.lineTo(100, 250);
   context.stroke();

   context.beginPath();
   context.arc(100, 250, 3, 0, Math.PI*2, false);
   context.fillStyle = 'navy';
   context.fill();

   context.font = '16px Lucida Sans';
   context.fillText('+1', 125, 225);
   context.fillText(sameDirection ? '+1' : '-1', 215, 185);
   context.fillText(sameDirection ? '2' : '0', 75, 255);
   context.restore();
}

function drawAnnotations(sameDirection) {
   context.save();
   context.strokeStyle = 'blue';
   drawInnerCircleAnnotations(sameDirection);
   drawOuterCircleAnnotations(sameDirection);
   drawArcAnnotations(sameDirection);
   context.restore();
}

function drawTwoArcs(sameDirection) {
   context.beginPath();
   context.arc(300, 170, 150, 0, Math.PI*2, false); // outer: CW
   context.arc(300, 170, 100, 0, Math.PI*2, !sameDirection); // innner

   context.fill();
   context.shadowColor = undefined;
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   context.stroke();
}

function draw(sameDirection) {
   context.clearRect(0, 0, context.canvas.width,
                           context.canvas.height);
   drawGrid('lightgray', 10, 10);

   context.save();

   context.shadowColor = 'rgba(0, 0, 0, 0.8)';
   context.shadowOffsetX = 12;
   context.shadowOffsetY = 12;
   context.shadowBlur = 15;

   drawTwoArcs(directionCheckbox.checked);

   context.restore();

   drawText();

   if (annotationCheckbox.checked) {
      drawAnnotations(directionCheckbox.checked);
   }
}

// Event handlers................................................

annotationCheckbox.onclick = function (e) {
   draw(directionCheckbox.checked);
};
   
directionCheckbox.onclick = function (e) {
   draw(directionCheckbox.checked);
};
    
// Initialization................................................

context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = context.fillStyle;//'rgba(20, 60, 150, 0.5)';

draw(directionCheckbox.checked);
