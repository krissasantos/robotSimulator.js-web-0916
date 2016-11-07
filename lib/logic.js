'use strict';

// function Robot() {
//   // implement your solution here!
// }


class Robot {
  constructor(x,y, direction){
    this.x = x
    this.y = y
    this.direction = direction
  }


  orient(direction_given) {
  var directions = [ 'east', 'west', 'north', 'south' ]

    for (var i = 0; i < directions.length; i++) {
      if (direction_given === directions[i]){
        let direction = direction_given
        return direction
      }
    }
  }


  turnLeft(x,y,direction){
    if (direction === "north"){
      direction = "west"
    }
    else if (direction === "east"){
      direction = "north"
    }
    else if (direction === "south"){
      direction = "east"
    }
    else  {
      direction = "south"
    }
    return direction
  }

  turnRight(x,y,direction){
    if (direction === "north"){
      direction = "east"
    }
    else if (direction === "east"){
      direction = "south"
    }
    else if (direction === "south"){
      direction = "west"
    }
    else {
      direction = "north";
    }

    return direction


  }

  advance(number_of_units, x,y, direction){
    if (direction === "north"){
      x = x
      y += number_of_units
    }
    else if (direction === "south"){
      x = x
      y -= number_of_units

    }
    else if (direction === "east"){
      x+= number_of_units
      y = y
    }

    else {
      x-= number_of_units
      y = y
    }
    

  }

}