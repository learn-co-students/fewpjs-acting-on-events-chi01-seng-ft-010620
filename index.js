// Your code here
let dodger = document.getElementById("dodger")
dodger

document.addEventListener("keydown", function(e){
    console.log(e.key);
});

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 1}px`;
    }
});

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        let leftNumbers = dodger.style.left.replace("px", ""); 
        let left = parseInt(leftNumbers, 10); 
        dodger.style.left = `${left + 1}px`;
    }
});

