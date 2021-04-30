document.addEventListener("DOMContentLoaded", function () {
  let game = document.getElementById("game");
  let options = ["x", "0"];
  let firstChoice = Math.floor(Math.random() * 2);

  class Item {
    render() {
      let btn = document.createElement("button");
      btn.setAttribute("class", "child");
      btn.addEventListener("click", function () {
        btn.innerText = options[firstChoice];
      });
      game.appendChild(btn);
    }
  }

  //render game
  for (let i = 0; i < 9; i++) {
    let obj = new Item();
    obj.render();
  }
});
