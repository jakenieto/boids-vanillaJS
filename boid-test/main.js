import startBoids from  "./boids/boids.js"
import Drawer from "./../Utilities/drawer.js"

const canvas = document.querySelector('canvas') // Grab canvas from DOM
const context = canvas.getContext('2d') // Get context to access 2D canvas functions

let drawer = new Drawer(canvas,context,window.innerWidth,window.innerHeight)

startBoids(drawer)
drawer.draw()