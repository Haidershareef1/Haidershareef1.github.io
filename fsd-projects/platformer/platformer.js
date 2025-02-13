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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(400, 500, 100, 500, "blue");
    createPlatform(500, 600, 50, 50, "white");
    createPlatform(700, 700, 50, 50, "black");



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 400, 50);
    createCollectable("max", 700, 50);
    createCollectable("kenndi", 500, 50);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 100);
    createCannon("right", 300, 2000);
    createCannon("left", 300, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
