// Your code here
// Return a string where "a" is replaced with "b":
const dodger = document.getElementById('dodger')

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 15}px`;
    }
  };

  function moveDodgerRight(){
      let rightNumbers = dodger.style.left.replace("px","");
      let right = parseInt(rightNumbers, 10);
        if (right < 360){
      dodger.style.left= `${right + 15}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown",function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
  });


  dodger.style.backgroundColor = "pink";