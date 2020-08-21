var imgInput = document.getElementById("fInput1");
var original = null;
var hidenImage = null;
var frontImage = null;
function upload() {
  var canv1 = document.getElementById("canv1");
  original = new SimpleImage(imgInput);
  original.drawTo(canv1);
  hidenImage = new SimpleImage(imgInput);
  frontImage = new SimpleImage(imgInput);
}
function chop1(image) {
  //Return image
  var final = new SimpleImage(image.width, image.height);
  //chop image
  for (var pixel of image.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    //Setting the new rgb values
    red = Math.floor(red / 16) * 16;
    green = Math.floor(green / 16) * 16;
    blue = Math.floor(blue / 16) * 16;
    //Setting the pixel values
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
    //Changing the pixel values of the final image
    final.setPixel(x, y, pixel);
  }
  return final;
}
function chop2(image) {
  //Return image
  var final = new SimpleImage(image.width, image.height);
  //chop image
  for (var pixel of image.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    //Setting the new rgb values
    red = (red % 16) * 16;
    green = (green % 16) * 16;
    blue = (blue % 16) * 16;
    //Setting the pixel values
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
    //Changing the pixel values of the final image
    final.setPixel(x, y, pixel);
  }
  return final;
}

function reveal() {
  frontImage = chop1(frontImage);
  hidenImage = chop2(hidenImage);
  var canv2 = document.getElementById("canv2");
  var canv3 = document.getElementById("canv3");
  frontImage.drawTo(canv2);
  hidenImage.drawTo(canv3);
}

function reset() {
  var canvas1 = document.getElementById("canv1");
  var canvas2 = document.getElementById("canv2");
  var canvas3 = document.getElementById("canv3");
  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  var ctx3 = canvas3.getContext("2d");
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  image1 = null;
  image2 = null;
}