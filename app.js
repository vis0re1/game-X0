document.addEventListener("DOMContentLoaded", function () {
  let game = document.getElementById("game");
  //let options = ["x", "0"];
  //let firstChoice = Math.floor(Math.random() * 2);
  let play = [];
 // let click = false;
 // let newGame = true;
  let finish = 0;

 // let rows = [];
 // let cols = [];
  let dp = [];
  let ds = [];

  items = document.getElementById("game").children;
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      if (!items[i].classList.contains("pressed")) {
        items[i].classList.add("pressed");
        if (play.pop() === "x") {
          items[i].innerText = "0";
          items[i].classList.add("0");
          play.push("0");
        } else {
          items[i].innerText = "x";
          items[i].classList.add("x");
          play.push("x");
        }

        if (items[i].id[0] == 0 && items[i].id[1] == 2) {
          ds.push(items[i].innerText);
        }
        if (items[i].id[0] == 1 && items[i].id[1] == 1) {
          ds.push(items[i].innerText);
        }
        if (items[i].id[0] == 2 && items[i].id[1] == 0) {
          ds.push(items[i].innerText);
        }

        if (items[i].id[0] === items[i].id[1]) {
          dp.push(items[i].innerText);
        }
        console.log(dp);
        if (dp.length === 3) {
          if (dp[0] === dp[1] && dp[1] == dp[2]) {
            console.log("ai castigat pe diagolana princiaplaa");
          }
        }
        if (ds.length === 3) {
          if (ds[0] === ds[1] && ds[1] == ds[2]) {
            console.log("ai castigat pe diagolana secundara");
          }
        }
        finish++;
      }
      if (finish === 9) {
        console.log("finish game");
        for (let i = 0; i < items.length; i++) {
          items[i].setAttribute("disabled", "true");
        }
      }
    });
  }
});
