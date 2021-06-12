let color = '#000000';
(function() {
  'use strict';
  buttonStart();

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  const tool = new Tool();
  tool.onMouseDown = function(event) {
    const c = Shape.Circle(event.point, 20);
    c.fillColor = color;
  };

  console.log('main.js loaded');
}());
/**
 * Starts all the onclick listeners for our color buttons.
 * @constructor
 */
function buttonStart() {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');
  const button6 = document.getElementById('button6');
  const button7 = document.getElementById('button7');
  const button8 = document.getElementById('button8');
  const button9 = document.getElementById('button9');
  const button10 = document.getElementById('button10');

  const buttonSelector1 = document.querySelector('#button1');
  const compStyles1 = window.getComputedStyle(buttonSelector1);

  const buttonSelector2 = document.querySelector('#button2');
  const compStyles2 = window.getComputedStyle(buttonSelector2);

  const buttonSelector3 = document.querySelector('#button3');
  const compStyles3 = window.getComputedStyle(buttonSelector3);

  const buttonSelector4 = document.querySelector('#button4');
  const compStyles4 = window.getComputedStyle(buttonSelector4);

  const buttonSelector5 = document.querySelector('#button5');
  const compStyles5 = window.getComputedStyle(buttonSelector5);

  const buttonSelector6 = document.querySelector('#button6');
  const compStyles6 = window.getComputedStyle(buttonSelector6);

  const buttonSelector7 = document.querySelector('#button7');
  const compStyles7 = window.getComputedStyle(buttonSelector7);

  const buttonSelector8 = document.querySelector('#button8');
  const compStyles8 = window.getComputedStyle(buttonSelector8);

  const buttonSelector9 = document.querySelector('#button9');
  const compStyles9 = window.getComputedStyle(buttonSelector9);

  const buttonSelector10 = document.querySelector('#button10');
  const compStyles10 = window.getComputedStyle(buttonSelector10);

  button1.onclick = function(event) {
    console.log('Black Button');
    color = compStyles1.getPropertyValue('background-color');
  };
  button2.onclick = function(event) {
    console.log('Gray Button');
    color = compStyles2.getPropertyValue('background-color');
  };
  button3.onclick = function(event) {
    console.log('Brown Button');
    color = compStyles3.getPropertyValue('background-color');
  };
  button4.onclick = function(event) {
    console.log('Red Button');
    color = compStyles4.getPropertyValue('background-color');
  };
  button5.onclick = function(event) {
    console.log('Orange Button');
    color = compStyles5.getPropertyValue('background-color');
  };
  button6.onclick = function(event) {
    console.log('Yellow Button');
    color = compStyles6.getPropertyValue('background-color');
  };
  button7.onclick = function(event) {
    console.log('Green Button');
    color = compStyles7.getPropertyValue('background-color');
  };
  button8.onclick = function(event) {
    console.log('Blue Button');
    color = compStyles8.getPropertyValue('background-color');
  };
  button9.onclick = function(event) {
    console.log('Purple Button');
    color = compStyles9.getPropertyValue('background-color');
  };
  button10.onclick = function(event) {
    console.log('White Button');
    color = compStyles10.getPropertyValue('background-color');
  };
}
