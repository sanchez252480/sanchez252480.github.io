$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 700, 50, 50, "blue");
createPlatform(900, 300, 50, 50, "purple");
createPlatform(600, 600, 50, 50, "yellow");
createPlatform(800, 400, 50, 50, "green");
createPlatform(700, 500, 50, 50, "red");

    // TODO 3 - Create Collectables
createCollectable("steve", 900, 250);
createCollectable("diamond", 800, 350);
createCollectable("grace", 1100, 200)


    
    // TODO 4 - Create Cannons
createCannon("left", 400, 2000);
createCannon("left", 300, 1800);
createCannon("right", 275, 1700);
createCannon("top", 1100, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
