document.addEventListener("DOMContentLoaded", function () {
  // let game = document.getElementById("game");
  let items = document.querySelector("#game").children;
  let mes = document.querySelector("#message");
  let reset = document.querySelector("#reset");
  let options = ["x", "0"];
  let play = [],
    finish = 0,
    dp = [],
    ds = [],
    row0 = [],
    row1 = [],
    row2 = [],
    col0 = [],
    col1 = [],
    col2 = [];
    play.push(options[Math.floor(Math.random() * 2)]);

  let paint = (what) => {
    for (let i = 0; i < what.length; i++) {
      what[i].classList.add("won");
    }
  };

  let GameOver = (type) => {
    for (let i = 0; i < items.length; i++) {
      if (!items[i].classList.contains("pressed")) {
        items[i].classList.add("pressed");
      }
    }
    switch (type) {
      case 0:
        mes.innerText = "Draw!";
        break;
      case 1:
        paint(dp);
        mes.innerText = dp[0].innerText + " won!";
        break;
      case 2:
        paint(ds);
        mes.innerText = ds[0].innerText + " won!";
        break;
      case "line0":
        paint(row0);
        mes.innerText = row0[0].innerText + " won!";
        break;
      case "line1":
        paint(row1);
        mes.innerText = row1[0].innerText + " won!";
        break;
      case "line2":
        paint(row2);
        mes.innerText = row2[0].innerText + " won!";
        break;
      case "col0":
        paint(col0);
        mes.innerText = col0[0].innerText + " won!";
        break;
      case "col1":
        paint(col1);
        mes.innerText = col1[0].innerText + " won!";
        break;
      case "col2":
        paint(col2);
        mes.innerText = col2[0].innerText + " won!";
        break;
    }
  };

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      if (!items[i].classList.contains("pressed")) {
        items[i].classList.add("pressed");
        if (play.pop() === "x") {
          items[i].innerText = "0";
          play.push("0");
        } else {
          items[i].innerText = "x";
          play.push("x");
        }

        if (
          (items[i].id[0] == 0 && items[i].id[1] == 0) ||
          (items[i].id[0] == 0 && items[i].id[1] == 1) ||
          (items[i].id[0] == 0 && items[i].id[1] == 2)
        ) {
          row0.push(items[i]);
        }

        if (
          (items[i].id[0] == 1 && items[i].id[1] == 0) ||
          (items[i].id[0] == 1 && items[i].id[1] == 1) ||
          (items[i].id[0] == 1 && items[i].id[1] == 2)
        ) {
          row1.push(items[i]);
        }

        if (
          (items[i].id[0] == 2 && items[i].id[1] == 0) ||
          (items[i].id[0] == 2 && items[i].id[1] == 1) ||
          (items[i].id[0] == 2 && items[i].id[1] == 2)
        ) {
          row2.push(items[i]);
        }

        if (
          (items[i].id[0] == 0 && items[i].id[1] == 0) ||
          (items[i].id[0] == 1 && items[i].id[1] == 0) ||
          (items[i].id[0] == 2 && items[i].id[1] == 0)
        ) {
          col0.push(items[i]);
        }

        if (
          (items[i].id[0] == 0 && items[i].id[1] == 1) ||
          (items[i].id[0] == 1 && items[i].id[1] == 1) ||
          (items[i].id[0] == 2 && items[i].id[1] == 1)
        ) {
          col1.push(items[i]);
        }

        if (
          (items[i].id[0] == 0 && items[i].id[1] == 2) ||
          (items[i].id[0] == 1 && items[i].id[1] == 2) ||
          (items[i].id[0] == 2 && items[i].id[1] == 2)
        ) {
          col2.push(items[i]);
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
        if (dp.length === 3) {
          if (
            dp[0].innerText === dp[1].innerText &&
            dp[1].innerText == dp[2].innerText
          ) {
            GameOver(1);
          }
        }
        if (ds.length === 3) {
          if (
            ds[0].innerText === ds[1].innerText &&
            ds[1].innerText == ds[2].innerText
          ) {
            GameOver(2);
          }
        }

        if (row0.length === 3) {
          if (
            row0[0].innerText === row0[1].innerText &&
            row0[1].innerText == row0[2].innerText
          ) {
            GameOver("line0");
          }
        }

        if (row1.length === 3) {
          if (
            row1[0].innerText === row1[1].innerText &&
            row1[1].innerText == row1[2].innerText
          ) {
            GameOver("line1");
          }
        }
        if (row2.length === 3) {
          if (
            row2[0].innerText === row2[1].innerText &&
            row2[1].innerText == row2[2].innerText
          ) {
            GameOver("line2");
          }
        }
        if (col0.length === 3) {
          if (
            col0[0].innerText === col0[1].innerText &&
            col0[1].innerText == col0[2].innerText
          ) {
            GameOver("col0");
          }
        }

        if (col1.length === 3) {
          if (
            col1[0].innerText === col1[1].innerText &&
            col1[1].innerText == col1[2].innerText
          ) {
            GameOver("col1");
          }
        }
        if (col2.length === 3) {
          if (
            col2[0].innerText === col2[1].innerText &&
            col2[1].innerText == col2[2].innerText
          ) {
            GameOver("col2");
          }
        }
        finish++;
      }
      if (finish === 9) {
        GameOver(0);
      }
    });
  }

  reset.addEventListener("click", function () {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("pressed");
      if (items[i].classList.contains("won")) {
        items[i].classList.remove("won");
      }
      items[i].innerText = "";
      finish = 0;
      play = [];
      play.push(options[Math.floor(Math.random() * 2)]);
      dp.length = 0;
      ds.length = 0;
      row0.length = 0;
      row1.length = 0;
      row2.length = 0;
      col0.length = 0;
      col1.length = 0;
      col2.length = 0;
      mes.innerText = "";
    }
  });
});
