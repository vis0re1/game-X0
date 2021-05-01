document.addEventListener("DOMContentLoaded", function () {
  let game = document.getElementById("game");
  let options = ["x", "0"];
  let firstChoice = Math.floor(Math.random() * 2);
  let play = [];
  let click = false;
  let newGame = true;


  console.log(newGame);
  class Item {
    constructor(id) {
      this.id = id;
    }
    render() {
      //let click = false;
      let btn = document.createElement("button");
      btn.setAttribute("class", "child");
      btn.setAttribute("id", this.id);
/*       btn.addEventListener("click", function () {
        if (newGame) {
          //   click = true;
          btn.innerText = options[firstChoice];
          play.push(options[firstChoice]);
          newGame = false;
        }
        console.log(newGame);

        btn.classList.add("pressed");
      }); */
      game.appendChild(btn);
    }
  }

  //render game
  for (let i = 0; i < 9; i++) {
    let obj = new Item(i);
    obj.render();
  }

  items = document.getElementById("game").children;
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
      }
    });
  }
});
