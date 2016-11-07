'use strict';

class Robot {
  constructor(){
    // this.coordinates = coordinates
    // this.x = x
    // this.y = y
    // this.bearing = bearing
  }

  at(x,y){
    this.coordinates = []
    this.coordinates[0] = x
    this.coordinates[1] = y
    return this.coordinates
  }



  orient(bearing_given) {
  var bearings = [ 'east', 'west', 'north', 'south' ]
  if (!bearings.includes(bearing_given)){
    // return "Invalid Robot Bearing"
    throw new Error ("Invalid Robot Bearing")
  } else { 
      for (var i = 0; i < bearings.length; i++) {
        if (bearing_given === bearings[i]){
          this.bearing = bearing_given
        }
      }
    }
  }


  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }
    else if (this.bearing === "east"){
      this.bearing = "north"
    }
    else if (this.bearing === "south"){
      this.bearing = "east"
    }
    else  {
      this.bearing = "south"
    }
    return this.bearing
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    }
    else if (this.bearing === "east"){
      this.bearing = "south"
    }
    else if (this.bearing === "south"){
      this.bearing = "west"
    }
    else {
      this.bearing = "north";
    }

    return this.bearing


  }

  



  advance() {
    if (this.bearing === "north"){
      // this.x = this.x
      this.coordinates[1] += 1
      // this.bearing = "north"
      
    }
    else if (this.bearing === "south"){
      // this.x = this.x
      this.coordinates[1] -= 1
      // this.bearing = "south"


    }
    else if (this.bearing === "east"){
      this.coordinates[0]+= 1
      // this. = this.y
      // this.bearing = "east"
    }

    else {
      this.coordinates[0]-= 1
      // this.y = this.y
      // this.bearing = "west"
    }



  }


    place(obj) {
      this.coordinates = []
      this.coordinates[0] = obj["x"]
      this.coordinates[1]= obj["y"]
      this.bearing = obj["direction"]

    }

    instructions(string) {
      var array = string.split("")
      var todo = []

      for (var i = 0; i < array.length; i++){
        if (array[i] === "R") {
          todo.push("turnRight") 
        }
        else if(array[i] === "L"){
           todo.push("turnLeft") 
        }
        else if(array[i] === "A"){
           todo.push("advance") 
        }
       } 
     return todo
    }

  //   coordinates(){
  //     var points = []
  //     points.push(this.x)
  //     points.push(this.y)
  //     return points
  // }


    evaluate(string){
      var todo = this.instructions(string)
      for (var i = 0; i < todo.length; i++){
        if (todo[i] === "turnRight"){
          this.turnRight()
        }
        else if (todo[i] === "turnLeft"){
          this.turnLeft()
        }
        else if (todo[i] === "advance"){
          this.advance()
        }

      }

      // return todo[0]


    }



}