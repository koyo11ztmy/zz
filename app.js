// load
function loaded(){
    document.getElementById("loading").classList.remove("active");
}

setTimeout(loaded,5000)

// top
const returntop=document.querySelector('.top-a');
window.addEventListener('scroll',() => {
    let scroll_y=window.scrollY;
    if(scroll_y>350){
        returntop.classList.add('active');
    }else{
        returntop.classList.remove('active');
    }
});