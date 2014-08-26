
var context = document.getElementById('canvas').getContext('2d'),
    moveToFunction = CanvasRenderingContext2D.prototype.moveTo;

CanvasRenderingContext2D.prototype.lastMoveToLocation = {};

CanvasRenderingContext2D.prototype.moveTo = function (x, y) {
   moveToFunction.apply(context, [x,y]);
   this.lastMoveToLocation.x = x;
   this.lastMoveToLocation.y = y;
};

CanvasRenderingContext2D.prototype.dashedLineTo = function (x, y, dashLength) {
   dashLength = dashLength === undefined ? 5 : dashLength;

   var startX = this.lastMoveToLocation.x;
   var startY = this.lastMoveToLocation.y;

   var deltaX = x - startX;
   var deltaY = y - startY;
   var numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);

   for (var i=0; i < numDashes; ++i) {
      this[ i % 2 === 0 ? 'moveTo' : 'lineTo' ]
         (startX + (deltaX / numDashes) * i, startY + (deltaY / numDashes) * i);
   }

   this.moveTo(x, y);
};

context.lineWidth = 3;
context.strokeStyle = 'blue';

context.moveTo(20, 20);
context.dashedLineTo(context.canvas.width-20, 20);
context.dashedLineTo(context.canvas.width-20, context.canvas.height-20);
context.dashedLineTo(20, context.canvas.height-20);
context.dashedLineTo(20, 20);
context.dashedLineTo(context.canvas.width-20, context.canvas.height-20);
context.stroke();
