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

//柱の長さをランダムに変更するための変数に値を代入
let h_pool = Math.floor(Math.random() * (450 - 100)) + 100;

// 静止オブジェクト(地面)
const ground = Bodies.rectangle(400, 585, 800, 30, { isStatic: true });

// 可動オブジェクト（円）
const circle = Bodies.circle(180, 10 - 70, 25, { friction: 0.01 });


// 可動オブジェクト（柱）
const pool = Bodies.rectangle(400,30,60,h_pool);

// オブジェクトの追加
Composite.add(engine.world, [ground, circle,pool]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

//キーが離された時中の処理をする
document.body.addEventListener('keyup',
    event => {
        //Wが離された時
        if (event.key === 'w') {
            circle.force.y = -0.04;
        }
});

Matter