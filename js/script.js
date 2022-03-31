// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const aBase = parseInt(document.getElementById('aBase').value)
  const bBase = parseInt(document.getElementById('bBase').value)
  const height = parseInt(document.getElementById('height').value)

  // process 
  const area = (aBase + bBase) * (1 / 2) * height

  // output
  document.getElementById('area').innerHTML = '<p>Area is: ' + area.toString() + ' mm²</p>'
}