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
  
  
      // TODO 2 - Create Platforms
      createPlatform(400, 610, 100, 15, "blue");
      createPlatform(200, 500, 50, 15, "red");
      createPlatform(450, 420, 100, 15, "red");
      createPlatform(750, 500, 100, 15, "red");
      createPlatform(1000, 610, 100, 15, "red");
      createPlatform(1350, 480, 50, 15, "red");
      createPlatform(1080, 450, 100, 15, "red");
      createPlatform(1100, 200, 50, 15, "red");
      createPlatform(1350, 330, 50, 15, "red");
      createPlatform(480, 200, 50, 15, "red");
      createPlatform(725, 300, 50, 15, "red");
      createPlatform(150, 275, 50, 15, "red");
      createPlatform(850, 120, 100, 15, "red");
    
  
      // TODO 3 - Create Collectables
      createCollectable("database", 155, 170, 0.5, 0.7);
      createCollectable("database", 1355, 430, 0.5, 0.7);
      createCollectable("database", 880, 80, 0.5, 0.7);
      
      // TODO 4 - Create Cannons
      createCannon("top", 350, 3000);
      createCannon("top", 650, 2500);
      createCannon("top", 1300, 2800);
      createCannon("right", 100, 2500);
      createCannon("right", 750, 3000);
      createCannon("right", 250, 3500);
      //////////////////////////////////
      // ONLY CHANGE ABOVE THIS POINT //
      //////////////////////////////////
    }
  
    registerSetup(setup);
  });