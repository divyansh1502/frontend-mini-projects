var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    let img = val.querySelector("img");

    val.addEventListener("mouseenter", function(){
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function(){
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets){
        img.style.left = dets.offsetX + "px";
        img.style.top  = dets.offsetY + "px";
    });
});
