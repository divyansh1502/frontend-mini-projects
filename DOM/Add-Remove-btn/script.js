var istatus = document.querySelector("h5");

var btn = document.querySelector(".add");

var flag = 0;
btn.addEventListener("click", function(){
    if (flag == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "#dadada"
        btn.style.color = "#202020ff"
        flag = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "cadetblue"
        btn.style.color = "#fff"
        flag = 0;
    }
})