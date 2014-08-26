
var context = document.getElementById('canvas').getContext('2d');

function roundedRect(cornerX, cornerY, width, height, cornerRadius) {
   if (width > 0) context.moveTo(cornerX + cornerRadius, cornerY);
   else           context.moveTo(cornerX - cornerRadius, cornerY);

   context.arcTo(cornerX + width, cornerY,
                 cornerX + width, cornerY + height,
                 cornerRadius);

   context.arcTo(cornerX + width, cornerY + height,
                 cornerX, cornerY + height,
                 cornerRadius);

   context.arcTo(cornerX, cornerY + height,
                 cornerX, cornerY,
                 cornerRadius);

   if (width > 0) {
      context.arcTo(cornerX, cornerY,
                    cornerX + cornerRadius, cornerY,
                    cornerRadius);
   }
   else {
      context.arcTo(cornerX, cornerY,
                    cornerX - cornerRadius, cornerY,
                    cornerRadius);
   }
}

function drawRoundedRect(strokeStyle, fillStyle, cornerX, cornerY, width, height, cornerRadius) {
   context.beginPath();

   roundedRect(cornerX, cornerY, width, height, cornerRadius);
   
   context.strokeStyle = strokeStyle;
   context.fillStyle = fillStyle;

   context.stroke();
   context.fill();
}

drawRoundedRect('blue',   'yellow',  50,  40,  100,  100, 10);
drawRoundedRect('purple', 'green',  275,  40, -100,  100, 20);
drawRoundedRect('red',    'white',  300, 140,  100, -100, 30);
drawRoundedRect('white',  'blue',   525, 140, -100, -100, 40);
