var image=null;
function upload(){
  var img=document.getElementById("img");
  image= new SimpleImage(img);
  var canvas = document.getElementById("can1");
  image.drawTo(canvas);
}

function makegray(){
  if(image==null){
    alert("images not loaded")
  }else{
  for ( var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue()) / 3 ;
     pixel.setRed(avg);
     pixel.setGreen(avg); 
    pixel.setBlue(avg);
  }
    var imgcanvas = document.getElementById("can2");
    image.drawTo(imgcanvas);
    
           
  }}
function clrcanvas(){
 var can = document.getElementById("can1");
var c = can.getContext("2d");
 c.clearRect(0,0,can.width,can.height);
  var can2 = document.getElementById("can2");
 var cc = can2.getContext("2d");
 cc.clearRect(0,0,can2.width,can2.height);
}

function doRed(){
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue()/3);
    if(avg < 128){
      pixel.setRed( 3*avg );
      pixel.setGreen(0);
      pixel.setBlue(0);
            
    }else{
       pixel.setRed(255);
       pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
    
  }
  var imgcanvas = document.getElementById("can2");
    image.drawTo(imgcanvas);
}
