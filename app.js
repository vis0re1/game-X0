document.addEventListener("DOMContentLoaded", function () {
 // let game = document.getElementById("game");
  items = document.getElementById("game").children;
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

  let paint = (what) => {
    for(let i = 0; i < what.length; i++) {
      what[i].style.color = "#fff";
      what[i].style.backgroundColor = "#a79e9e";
    }
  }

  let GameOver = (type) => {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("disabled", "true");
    }
    switch(type) {
      case 1:
        paint(dp);
        break;
      case 2:
        paint(ds);
        break;
    }
  }


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
          ds.push(items[i]);
        }
        if (items[i].id[0] == 1 && items[i].id[1] == 1) {
          ds.push(items[i]);
        }
        if (items[i].id[0] == 2 && items[i].id[1] == 0) {
          ds.push(items[i]);
        }

        if (items[i].id[0] === items[i].id[1]) {
          dp.push(items[i]);
        }
        console.log(dp);
        if (dp.length === 3) {
          if (dp[0].innerText === dp[1].innerText && dp[1].innerText == dp[2].innerText) {
            GameOver(1);
          }
        }
        if (ds.length === 3) {
          if (ds[0].innerText === ds[1].innerText && ds[1].innerText == ds[2].innerText) {
            GameOver(2);
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
