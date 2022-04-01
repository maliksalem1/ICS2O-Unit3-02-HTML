// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length').value)
  const width = parseInt(document.getElementById('width').value)
  const height = parseInt(document.getElementById('height').value)

  // process 
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = '<p>volume is: ' + volume.toString() + ' cm³</p>'
}