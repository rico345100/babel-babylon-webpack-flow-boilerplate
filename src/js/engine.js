/* @flow */
import { Engine } from 'babylonjs';

const body = document.body;

if(!body) {
    throw new Error("Cannot found document.body.");
}

export const canvasEl = document.createElement('canvas');
body.appendChild(canvasEl);

// Prevent Canvas stretching
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
};

resizeCanvas();

export const engine = new Engine(canvasEl);