$(document).ready(function(){
var selectedImg=document.getElementsByClassName("galleryImg");
var largeImg=document.getElementById("large-img");
for(var i=0;i<selectedImg.length;i++){
   selectedImg[i].addEventListener("click",function(){
   largeImg.src=this.src;
});
}

$('header #downBtn').click(function () {
  $('html, body').animate({
      scrollTop: $('.courses').offset().top }, 500) })
})