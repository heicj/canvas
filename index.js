// const canvas = document.getElementById("myCanvas")

// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "#FF0000";

// ctx.fillRect(0, 0, 150, 75);

function startGame(){
  myGameArea.start();
}

const myGameArea = {
  canvas: document.getElementById("myCanvas"),
  start: function(){
    this.canvas.width = 500,
    this.canvas.height = 500,
    this.context = this.canvas.getContext("2d"),
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
  }
}