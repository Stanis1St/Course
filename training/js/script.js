var btn_back = document.querySelector('#gallery .buttons .back');
var btn_forward = document.querySelector('#gallery .buttons .forward');
var images = document.querySelectorAll('#gallery  .imgs img');
console.log(images); 
var i =0;
 
btn_back.onclick = function()  {
    images[i].className='';
    i--;
        if( i<0 ) {
            i = (images.length - 1);
        }
   images[i].className='showed';
}

console.log(i);

btn_forward.onclick = function()  {
    images[i].className='';
    i++;
        if(i>= images.length){
           i=0;
        }
       images[i].className='showed';   
}