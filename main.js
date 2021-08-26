var canvas = new fabric.canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) {
    player_object = Img;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);


    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", function (e)
{
   keyPressed = e.keyCode;
   document.getElementById("key_value").innerHTML = keyPressed;
   document.getElementById("key_arrow").innerHTML = "";
   document.getElementById("key_value_h4").style.display = "inline-block";

	if(keyPressed == '87')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>w</span> key";
	}

	if(keyPressed == '66')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>b</span> key";
	}
	if(keyPressed == '71')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>g</span> key";
	}
	if(keyPressed == '76')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>l</span> key";
	}
	if(keyPressed == '84')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>t</span> key";
	}
	if(keyPressed == '82')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>r</span> key";
	}
	if(keyPressed == '89')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>y</span> key";
	}
	if(keyPressed == '68')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>d</span> key";
	}
	if(keyPressed == '67')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>c</span> key";
	}

    if(keyPressed == '38')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>Up</span> arrow key";
	}
	if(keyPressed == '40')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>Down</span> arrow key";
	}
	if(keyPressed == '37')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>Left</span> arrow key";
	}
	if(keyPressed == '39')
	{
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>Right</span> arrow key";
	}
    if(e.shiftKey == true)
    {
   document.getElementById("key_arrow").innerHTML = "You have pressed <span>shift</span> key";
   document.getElementById("key_value_h4").style.display = "none";
    }
    
	if(e.shiftKey == true && keyPressed == '80')
    {
   document.getElementById("key_arrow").innerHTML = "<span>p</span> and <span>shift</span> pressed together  key";
   document.getElementById("key_value_h4").style.display = "none";
    }
	if(e.shiftKey == true && keyPressed == '77')
    {
   document.getElementById("key_arrow").innerHTML = "<span>m</span> and <span>shift</span> pressed together  key";
   document.getElementById("key_value_h4").style.display = "none";
    }

});
function up()
{
   if(player_y >=0)
   {
   player_y = player_y - block_image_height;
   console.log("block image height = " + block_image_height);
   console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
   canvas.remove(player_object);
   player_update();
   }
}
function down()
{
   if(player_y <=500)
   {
   player_y = player_y + block_image_height;
   console.log("block image height = " + block_image_height);
   console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
   canvas.remove(player_object);
   player_update();
   }
}
function left()
{
    if(player_x >0)
    {
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function right()
{
    if(player_x <=850)
    {
    player_x = player_x + block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
