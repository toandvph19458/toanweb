const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

// Event
let isMenuOpen = false
menuIcon.addEventListener('click', function(e) {
    if(isMenuOpen == false) {
        menu.classList.remove('hidden')
        isMenuOpen = true
    } else {
        menu.classList.add('hidden')
        isMenuOpen = false
    }
})
var img = [];
for(var i=0; i<2;i++){
    img[i] = new Image();
    img[i].src="../images/"+i+".jpg"
}
var index =0;
function  start(){
    index++;
    if(index==img.length){
        index=0;
    }
    var anh = document.getElementById("anh");
    anh.src=img[index].src;
    
    
     t = setTimeout("start()",1000);
}