var collisionCount = 0;
labelb = "?"

function reset() {
    location.reload(true);


}

function start() {
    ratio = document.querySelector('input[name="ratio"]:checked').value;

    console.log(ratio)
    if (ratio == "100") {
        labelb = "100"
        console.log("fdfdf")
        Matter.Body.setMass(boxB, 100)


    } else {
        labelB = "10000"
        Matter.Body.setMass(boxB, 10000)
        labelb = "10000"
    }

    Matter.Body.setVelocity(boxB, {
        x: -2,
        y: 0
    })




}

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create({



});
engine.world.gravity.y = 0;


// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(250, 430, 100, 100, {
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    restitution: 1,
    inertia: Infinity
});
var boxB = Bodies.rectangle(550, 430, 100, 100, {
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    restitution: 1,
    inertia: Infinity
});
var ground = Bodies.rectangle(400, 630, 810, 60, {
    isStatic: true,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    restitution: 1
});

var wall = Bodies.rectangle(5, 300, 5, 1500, {
    isStatic: true,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    restitution: 1
});

Matter.Body.setMass(boxA, 1)
Matter.Body.setMass(boxB, 10000)



// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground, wall]);
// run the renderer
Render.run(render);
// create runner
var runner = Runner.create();
runner.delta = 1;
render.options.wireframes = false;

const ctx = render.context;

Matter.Events.on(render, "afterRender", function() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("1", boxA.position.x - 5, boxA.position.y + 5);
    ctx.fillText(labelb, boxB.position.x - 15, boxB.position.y + 5);
});
Runner.run(runner, engine);
Matter.Events.on(engine, "collisionStart", function(event) {
    event.pairs.forEach(pair => {
        collisionCount++;
        document.getElementById("collisions").innerText=("Collisions: "+collisionCount)         

        console.log("Total collision count:", collisionCount);

    });
});
Matter.Events.on(engine, "beforeUpdate", function() {
    var boxACenter = boxA.position;
    var boxBCenter = boxB.position;

    var distance = (boxBCenter.x - boxACenter.x)

    if (distance > 300) {
        Matter.Body.setPosition(boxB, ({
            x: boxBCenter.x - 150,
            y: boxBCenter.y
        }))

    }
    if (((collisionCount == 314) && (ratio== 10000)) || ((collisionCount == 31) && (ratio== 100))){
        Matter.Runner.stop(runner);  
        console.log("done")
       
        document.getElementById("resetphysics").style.display = "block"
        document.getElementById("physicspanel").style.display = "none"

         Matter.Body.setVelocity(boxB, {
        x: 0,
        y: 0})
        Matter.Body.setVelocity(boxA, {
        x: 0,
        y: 0})
    }
});