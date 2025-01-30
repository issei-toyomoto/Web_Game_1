// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// 静止オブジェクト(地面)
const ground = Bodies.rectangle(400, 585, 800, 30, { isStatic: true });

// 可動オブジェクト（円）
const circle = Bodies.circle(180, 10 - 70, 25, { friction: 0.01 });
// 可動オブジェクト（柱）
//const pool = Bodies.rectangle();

// オブジェクトの追加
Composite.add(engine.world, [ground, circle]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

document.body.addEventListener('keydown',
    event => {
        if (event.key === 'w') {
            circle.force.y = -0.04;
        }
});

document.body.addEventListener('keydown',
    event => {
        if (event.key === 'a') {
            circle.force.x = -0.05;
        }
});

document.body.addEventListener('keydown',
    event => {
        if (event.key === 's') {
            circle.force.y = 0.05;
        }
});

document.body.addEventListener('keydown',
    event => {
        if (event.key === 'd') {
            circle.force.x = 0.1;
        }
});

/*setInterval(()=>{
    document.querySelector('#debugkanato').innerHTML = square.force.y;
},10)*/