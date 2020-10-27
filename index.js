const dodger = document.getElementById('dodger');

const moveDodgerLeft = () => {
    console.log(dodger.style.left)
    let num = parseInt(dodger.style.left);
    if (num >= 10) {
      num -= 10;
      dodger.style.left = `${num}px`;
    }
}

const moveDodgerRight = () => {
    console.log(dodger.style.left)
    let num = parseInt(dodger.style.left);
    if (num < 360) {
      num += 10;
      dodger.style.left = `${num}px`;
    }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    moveDodgerRight()
  } else if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})