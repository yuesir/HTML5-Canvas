var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   
context.font = '38px Arial';    //设置字体
context.fillStyle = 'cornflowerblue';   //字体填充颜色
context.strokeStyle = 'blue';       //字体轮廓的颜色

context.fillText("何红伟", canvas.width/2 - 150,
                                 canvas.height/2 + 15); //实心字

context.strokeText("何红伟", canvas.width/2 - 150,
                                   canvas.height/2 + 15 ); //空心字
