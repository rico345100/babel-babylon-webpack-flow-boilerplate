/* @flow */
import "babel-polyfill";
import "css/style.css";
import { Engine, Scene, FreeCamera, Vector3, PointLight, Mesh } from 'babylonjs';
import { engine, canvasEl } from './engine';

if(!Engine.isSupported()) {
    throw new Error("Your browser doesn't support babylon.js.");
}

const scene = new Scene(engine);

const camera = new FreeCamera('camera', new Vector3(0, 4, -10), scene);
camera.setTarget(new Vector3(0, 0, 10));
camera.attachControl(canvasEl);

const light = new PointLight('light', new Vector3(0, 5, -5), scene);

engine.runRenderLoop(() => scene.render());

Mesh.CreateSphere("sphere", 10, 1, scene);