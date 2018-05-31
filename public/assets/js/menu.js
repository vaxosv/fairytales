function menu_anumation() {
    var menu = document.getElementsByClassName("item")

    
    // console.log(menu);
    for (i = 0; i < menu.length; i++) {

        if (menu[i].style.display == "none") {
            menu[i].style.display = "flex";
            menu[i].style.animation = "fadein ease-in-out 700ms";
        } else{
        	menu[i].style.animation = "fadeout ease-in-out 620ms";
            setTimeout(slow, 600,i)
        }
    }
}


function slow (i) {
	menu[i].style.display = "none";
}

var menu = document.getElementsByClassName("item")
for (i = 0; i < menu.length; i++) {
    menu[i].style.display = "none";
}