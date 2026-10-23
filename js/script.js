function changePic(){
    // define a variable 
    var pic = document.getElementById("pic1");
    // change the image source by changing the src attribute
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPmL-owPWqFO6DQAtfDyAjfFkEKTsJ-2roR-dZagVGg&s=1024";
    changeTitle();
    changeDescription();
}

function changeTitle(){
    // define a variable
    var title = document.getElementById("pic1-title");
    // change the title text
    title.textContent = "New Article Title";
}  

function changeDescription(){
    var description = document.getElementById("pic1-desc");
    description.textContent = "A bad ride";
}
