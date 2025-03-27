// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 27  2025
// This file contains the JS functions for index.html

"use strict"

function calculatoinOfAreaOfTrapizoid() {
  // Setting the varibles
  const baseAOfTrapizoid = parseFloat(document.getElementById("base-a-of-trapizoid").value)
  const baseBOfTrapizoid = parseFloat (document.getElementById("base-b-of-trapizoid").value)
  const heightOfTheTrapizoid = parseFloat (document.getElementById("height-of-the-trapizoid").value)
  const calculatoinOfAreaOfTrapizoid = [(baseAOfTrapizoid + baseBOfTrapizoid) / 2] * heightOfTheTrapizoid
  // clacualtoins 
  document.getElementById("area").innerHTML ="Area is: " + calculatoinOfAreaOfTrapizoid + "mm²"
}