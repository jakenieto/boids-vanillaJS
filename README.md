# Boids in Vanilla JS Using Canvas
  In this project I implemented the boid algorithm which simulates the flocking behaviour of birds. 
## Usage
You must link the script in your html file, and include the canvas element with the id 'boids'.
```     
        <script type='module' src='main.js'>
            import './boids/boids.js'      
        </script>
        <style>
           canvas {
                padding: 0;
                margin: auto;
                display: flex;
                width: 100%;
                height: 100%;
                position: relative;
            }
        </style>
    </head>
    <body>
        <div class="canvas-container">
            <canvas id="main"></canvas>
        </div> 
        
```
## Example
An example of the animation is on my personal website <http://www.jakenieto.com>. If you click the background a new flock of boids
is generated. 
