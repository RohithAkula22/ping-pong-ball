document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball"); //* targetting the ball

  // TODO: Here the ballX and ballY will be helping us to set a starting point with respect to the table
  let ballX = 50; //? distance to the top of the ball w.r.t ping pong table
  let ballY = 50; //? distance to the left of the ball w.r.t ping pong table

  //* displacement means scalar quantity and the direction
  let dx = 2; //? displacement factor in x-direction, 2 -> you will displace by 2px in +x direction, -2 ->  you will displace by 2px in -x direction
  let dy = 2; //? displacement factor in y-direction, 2 -> you will displace by 2px in +y direction, -2 ->  you will displace by 2px in -y direction

  //TODO: Give intial top and left to the ball
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  //* Executes after every one milli second in setInterval
  setInterval(function exec() {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`; // Update the top of the ball
    ball.style.top = `${ballY}px`; // Update the top of the ball

    // if (ballX > 700 - 25 || ballX <= 0) dx *= -1; , 700 is the width of the table and 25 is of ball
    // if (ballY > 400 - 25 || ballY <= 0) dy *= -1;

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; //change the x direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; //change the y direction
  }, 1);
});
