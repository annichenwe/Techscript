$('article').readingTime();


//ARTICLE PICTURE SLIDER

var i = 0;
var path = new Array();

path[0] = "image_runa/2015_0724_GK_RifleHack123.jpg";
path[1] = "image_iphone/x.png";
path[2] = "image_iphone/iphonex_TA.jpg";


function swapImage() {

    document.slide.src = path[i];

    if (i < path.length - 1) {
        i++
    } else {
        i = 0;
    }
    setTimeout("swapImage()", 10000);
}

timer = setTimeout("swapImage()", 10000);
