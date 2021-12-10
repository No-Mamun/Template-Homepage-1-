

var photos=["images/istockphoto-1166781983-612x612.jpg","images/istockphoto-525801903-1024x1024.jpg","images/home3.jpg","images/home5.jpg"];
var imgTag= document.querySelector("img");
var count=0;
function next(){
count++;
if(count>=photos.length){
    count=0;
    imgTag.src=photos[count];
}
else{
    imgTag.src=photos[count];
}
}
function prev(){
    count--;
    if(count <0){
        count=photos.length -1;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }
}
