let lists = document.getElementById("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists){
    list.addEventListner("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            
        })
    })
}