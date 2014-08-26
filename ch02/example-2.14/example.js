
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),

    AXIS_MARGIN = 40,
    AXIS_ORIGIN = { x: AXIS_MARGIN, y: canvas.height-AXIS_MARGIN },

    AXIS_TOP   = AXIS_MARGIN,
    AXIS_RIGHT = canvas.width-AXIS_MARGIN,

    HORIZONTAL_TICK_SPACING = 10,
    VERTICAL_TICK_SPACING = 10,

    AXIS_WIDTH  = AXIS_RIGHT - AXIS_ORIGIN.x,
    AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

    NUM_VERTICAL_TICKS   = AXIS_HEIGHT / VERTICAL_TICK_SPACING,
    NUM_HORIZONTAL_TICKS = AXIS_WIDTH  / HORIZONTAL_TICK_SPACING,

    TICK_WIDTH = 10,
    TICKS_LINEWIDTH = 0.5,
    TICKS_COLOR = 'navy',

    AXIS_LINEWIDTH = 1.0,
    AXIS_COLOR = 'blue';

// Functions..........................................................

function drawGrid(color, stepx, stepy) {
   context.save()

   context.fillStyle = 'white';
   context.fillRect(0, 0, context.canvas.width, context.canvas.height);

   context.lineWidth = 0.5;
   context.strokeStyle = color;

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

function drawAxes() {
   context.save(); 
   context.strokeStyle = AXIS_COLOR;
   context.lineWidth = AXIS_LINEWIDTH;

   drawHorizontalAxis();
   drawVerticalAxis();

   context.lineWidth = 0.5;
   context.lineWidth = TICKS_LINEWIDTH;
   context.strokeStyle = TICKS_COLOR;

   drawVerticalAxisTicks();
   drawHorizontalAxisTicks();

   context.restore();
}

function drawHorizontalAxis() {
   context.beginPath();
   context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
   context.lineTo(AXIS_RIGHT,    AXIS_ORIGIN.y)
   context.stroke();
}

function drawVerticalAxis() {
   context.beginPath();
   context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
   context.lineTo(AXIS_ORIGIN.x, AXIS_TOP);
   context.stroke();
}

function drawVerticalAxisTicks() {
   var deltaY;
   
   for (var i=1; i < NUM_VERTICAL_TICKS; ++i) {
      context.beginPath();

      if (i % 5 === 0) deltaX = TICK_WIDTH;
      else             deltaX = TICK_WIDTH/2;
              
      context.moveTo(AXIS_ORIGIN.x - deltaX,
                     AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);

      context.lineTo(AXIS_ORIGIN.x + deltaX,
                     AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);

      context.stroke();
   }
}

function drawHorizontalAxisTicks() {
   var deltaY;
   
   for (var i=1; i < NUM_HORIZONTAL_TICKS; ++i) {
      context.beginPath();

      if (i % 5 === 0) deltaY = TICK_WIDTH;
      else             deltaY = TICK_WIDTH/2;
              
      context.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING,
                     AXIS_ORIGIN.y - deltaY);

      context.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING,
                     AXIS_ORIGIN.y + deltaY);

      context.stroke();
   }
}

// Initialization................................................

drawGrid('lightgray', 10, 10);
drawAxes();
