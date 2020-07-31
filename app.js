//Variables & Event Listeners

let cells = document.querySelectorAll(".game-cells");
let cellsArray = []
let cellsIDs = []
let initButton = document.getElementById(`init`)
let resetButton = document.getElementById('reset')

//Internal Logic for Battle Ship

//1.  Game state object
  //a. Array containing all board positions. 
    //aa. Nested array to serve as previous computer guesses
  //b. Turn counter
 class Ship {
   constructor () {
     this.ori = prompt(`Choose 1 for Vertical or 2 for Horizontal`),
     this.X = prompt(`Choose a starting X value from 1 to 10`)
     this.Y = prompt('Choose a starting Y value from 1 to 10')
     this.hitBox = [];
   }
 }

 class AI_Ship {
  constructor (x,y) {
    this.ori =  game.random(2),
    this.X =  0,
    this.Y =  0,
    this.hitBox = []
  }
}
 
  let game = {
    board : {
      Y1:{
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
       },
      Y2: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
       },
      Y3: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
       },
      Y4: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
       },
      Y5: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
     
      
      
      },
      Y6: {
      X1:{
        display: `w`
      },
      X2: {
        display: `w`
      },
      X3: {
        display: `w`
      },
      X4: {
        display: `w`
      },
      X5: {
        display: `w`
      },
      X6:{
        display: `w`
      },
      X7: {
        display: `w`
      },
      X8: {
        display: `w`
      },
      X9: {
        display: `w`
      },
      X10: {
        display: `w`
      }
      },
      Y7: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
      },
      Y8: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
      },
      Y9: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
      },
      Y10: {
        X1:{
          display: `w`
        },
        X2: {
          display: `w`
        },
        X3: {
          display: `w`
        },
        X4: {
          display: `w`
        },
        X5: {
          display: `w`
        },
        X6:{
          display: `w`
        },
        X7: {
          display: `w`
        },
        X8: {
          display: `w`
        },
        X9: {
          display: `w`
        },
        X10: {
          display: `w`
        }
      }
  },
  // Display board **Doesn't currently render entire board
    render () {
      game.playerOne.takenTiles.forEach(x => document.getElementById(`${x}`).style.backgroundColor = `green`)
    },
  // Player Data
    playerOne: {
      active_Ships : [],
      allowedDeployments : cellsIDs,
      takenTiles : [],
      damage: 0
  },
  // AI Data  
    automatedOpponent : {
      active_Ships : [],
      available_Actions: [],
      previousShots : [],
      allowedDeployments : cellsIDs,
      takenTiles : [0],
      damage: 0
    },
  // AI Setup //NEEDS REFACTOR
    aiSetUp () {
      if (game.state.intialized === true && this.automatedOpponent.active_Ships.length < 5) {
        let setUp = game.automatedOpponent.active_Ships

        for (let currentShip in game.state.ships) {
          setUp.push(new AI_Ship) 
          setUp[currentShip].name = game.state.shipNames[currentShip]
          setUp[currentShip].size = game.state.shipSizes[currentShip]
        
        if (game.automatedOpponent.active_Ships[currentShip].ori === 1) {
          setUp[currentShip].X = game.random(10 - game.automatedOpponent.active_Ships[currentShip].size)
          setUp[currentShip].Y = game.random(10)
          
          game.populate(game.automatedOpponent.active_Ships[currentShip], false)
        } 

        if (game.automatedOpponent.active_Ships[currentShip].ori === 2) {
          setUp[currentShip].X = game.random(10)
          setUp[currentShip].Y = game.random(10 - game.automatedOpponent.active_Ships[currentShip].size)
          
          game.populate(game.automatedOpponent.active_Ships[currentShip], false)
        } 
          
        }  
      }
    },
  // Game States **Suggest removal of playerDamage
    state : {
      intialized : false,
      operations: 0,
      ships: [`2-frigate`,'3-cruiser','4-carrier','5-battleship'],
      shipNames: [`frigate`,`cruiser`,`carrier`,`battleship`],
      shipSizes : [2,3,4,5],
      // Iterate over active ships and determine how many hitboxes are damaged then if 3 or more are damage set intailize to false and display win/loss.
      damage () {
        game.playerOne.damage = Object.values(game.playerOne.active_Ships[0]).splice(2,5).filter(x => x[0] === `damaged`).length
        game.automatedOpponent.damage = Object.values(game.automatedOpponent.active_Ships[0]).splice(2,5).filter(x => x[0] === `damaged`).length
        if (game.playerOne.damage >= 3) {
          game.state.intialized = false;
          alert(`They've crippled your cruiser!`)
          game.reset()
        }
        if (game.automatedOpponent.damage >= 3) {
          game.state.intialized = false
          alert(`You crippled their cruiser!`)
          game.reset()
        }
       }
    },
  // Start game function. neccesary for creating game states and populating neccesary objects.
    initialize () {
      let count = game.state.operations
      let dir = game.playerOne.active_Ships
      let splitShips = x => game.state.ships[x].split(`-`)

      dir.push(new Ship())
      dir[count].name = splitShips(count)[1]
      dir[count].size = parseInt(splitShips(count)[0])
      game.error.valid_Inputs(dir)
      game.populate(dir[count])
        if (count < 3) {
          game.state.operations++;
          game.render()
          setTimeout(() => {
            game.initialize(count += 1);
            }, 1000);} else {
          }
        if (game.state.operations === 4) {
          game.place()
          game.aiSetUp()
        }
      game.intialized = true;
    ;
  },
    // Assign positions for ships
    place (directory = game.playerOne.takenTiles, input = 's') {
      let xValues = []
      let yValues = []
      directory.forEach(x => xValues.push(x.split(`-`)[1]))
      directory.forEach(x => yValues.push(x.split(`-`)[0]))
      if (directory === game.playerOne.takenTiles) {
      for (let current in yValues) {
        game.board[yValues[current]][xValues[current]].display += input
      }
        } else {
        game.board[yValues[current]][xValues[current]].display += input
    }
  },
  // Adds interactable parameters to active ships and ensures that ships will render
    populate (directory = game.playerOne.active_Ships, isPlayer = true) {
        let allowed = game.playerOne.takenTiles
        let allowedAI = game.automatedOpponent.takenTiles
        for (let i = 0; i < directory.size; i++) {
          let newX = `Y${directory.Y}-X${directory.X + i}`
          let newY = `Y${directory.Y + i}-X${directory.X}`
          let current = `Y${directory.Y}-X${directory.X}`
          let push = x => game.playerOne.takenTiles.push(x)
          let push1 = x => game.automatedOpponent.takenTiles.push(x)

        if (isPlayer === true) {
          if (directory.ori === 1 && i === 0) {
          directory.hitBox.push(`${current}`)
          push(current)
        } else if (directory.ori === 1 && i > 0) {
          directory.hitBox.push(`${newY}`)
          push(newY)
        } else if (directory.ori === 2 && i === 0) {
          directory.hitBox.push(`${current}`)
          push(current)
        } else if (directory.ori === 2 && i > 0) {
          directory.hitBox.push(`${newX}`)
          push(newX)
        }
      }

      if (isPlayer === false) {
        if (directory.ori === 1 && i === 0) {
        directory.hitBox.push(`${current}`)
        push1(current)
      } else if (directory.ori === 1 && i > 0) {
        directory.hitBox.push(`${newY}`)
        push1(newY)
      } else if (directory.ori === 2 && i === 0) {
        directory.hitBox.push(`${current}`)
        push1(current)
      } else if (directory.ori === 2 && i > 0) {
        directory.hitBox.push(`${newX}`)
        push1(newX)
      }
    }

    if (allowed.filter(x => x === current).length > 1 && isPlayer === true) {
        alert(`Duplicate inputs detected`)
        game.reset()
        break;
        }
    if (allowedAI.filter(x => x === current).length > 1 && isPlayer === false) {
        game.automatedOpponent.takenTiles = [0]
        game.automatedOpponent.active_Ships = []
        game.aiSetUp()
        }
         
         game.render()
         }    
      
    },
  // Shooting and hit allocation mechanism
  // STILL ALLOWS SHOT ASSIGNMENTS OUTSIDE OF BOARD
    shoot (x,y,enemy = game.automatedOpponent.active_Ships[0]) {
      let xCoord = `${x}`
      let yCoord = `${y}`
      if (game.board[yCoord][xCoord].display.includes(`e`) || game.board[yCoord][xCoord].display.includes(`s`)) {
        if (enemy.hitBox1[0] === yCoord && enemy.hitBox1[1] === xCoord) {
        console.log(`DIRECT HIT`)
        enemy.hitBox1.shift()
        enemy.hitBox1.shift()
        enemy.hitBox1.push('damaged')
      }
        if (enemy.hitBox2[0] === yCoord && enemy.hitBox2[1] === xCoord) {
        console.log(`DIRECT HIT`)
        enemy.hitBox2.shift()
        enemy.hitBox2.shift()
        enemy.hitBox2.push('damaged')
      }
        if (enemy.hitBox3[0] === yCoord && enemy.hitBox3[1] === xCoord) {
        console.log(`DIRECT HIT`)
        enemy.hitBox3.shift()
        enemy.hitBox3.shift()
        enemy.hitBox3.push('damaged')
      }
    }
        if (game.board[yCoord][xCoord].display.includes(`e`) === false && game.board[yCoord][xCoord].display.includes(`s`) === false) {
        console.log(`MISSERS BOI`)
     }
  },
    //Take Turns **Map to board
    takeTurn () {
      let value = game.automatedOpponent.available_Actions[game.random(game.automatedOpponent.available_Actions.length - 1)]
      let X = value.split('-')[1]
      let Y = value.split('-')[0]
        if (game.automatedOpponent.previousShots.includes(`${Y}-${X}`) === false) {
        game.automatedOpponent.previousShots.push(`${Y}-${X}`)
        game.shoot(X,Y, game.playerOne.active_Ships[0])
      } else {
        game.takeTurn()
      }
    },
    //Error block to validate ship inputs
    error : {
      valid_Inputs (obj) {
        for (let current in obj) {
          //Set prompt values to numbers
          obj[current].ori = Number(obj[current].ori)
          obj[current].X = Number(obj[current].X)
          obj[current].Y = Number(obj[current].Y)
          //ship.ori too high / too low
          if (obj[current].ori > 2 ||  obj[current].ori < 0) {
            console.log(`invalid input: horizontal / vertical value is outside parameters!`)
            return false;
          }
        }
      }  
    },
  // Clears game board and active ships
    reset () {
      game.playerOne.active_Ships = []
      game.playerOne.takenTiles = []
      game.automatedOpponent.active_Ships = []
      game.automatedOpponent.previousShots = []
      game.automatedOpponent.takenTiles = [0]
      game.state.operations = 0
      //Change game state
      game.state.intialized = false;
      //Reset Starting colors
      initButton.style.backgroundColor = '#9b111e';
      cellsArray.forEach(x => x.style.border = ``)
      cellsArray.forEach(x => x.style.border = `1px solid black`)
      for (let i = 0; i < 100; i++) {
        cells[i].style.backgroundColor = "#3987c9"
      }
      for (let currentY in game.board) {
        Object.keys(game.board[currentY]).forEach(x => game.board[currentY][x].display = `w`)
       }
  },
  //Randommized - needed for AI
    random (max) { 
      return Math.floor(Math.random() * max) + 1;  
    }
 }

//Event Listeners
cells.forEach(x => game.automatedOpponent.available_Actions.push(x.id))

//Enables Left click shoot functionality after the game is intialized
for (let i = 0; i < 100; i++) {
  let cellsX = cells[i].id.split('-')[1]
  let cellsY = cells[i].id.split('-')[0]
  cells[i].addEventListener('click', function(){
    if (game.state.intialized === true) {
      game.shoot(cellsX, cellsY)
      if (game.board[cellsY][cellsX].display.includes('e')) {
        document.getElementById(`${cellsY}-${cellsX}`).style.backgroundColor = "#be0018"
      }
      if ((game.board[cellsY][cellsX].display.includes('e') === false)) {
        document.getElementById(`${cellsY}-${cellsX}`).style.backgroundColor = "white"
      }
      game.state.damage()
      game.takeTurn()
    }
  ;})
  cellsArray.push(cells[i]) 
}

initButton.addEventListener(`click`, function() {
  if (game.state.intialized === false) {
   game.state.intialized = true;
   initButton.style.backgroundColor = `green`;
   cellsArray.forEach(x => x.style.border = `1px solid black`)
  }
})
const color = () => cellsArray.forEach(x => x.style.backgroundColor = `3987c9`)
cellsArray.forEach(x => x.style.border = `1px solid black`)
cellsArray.forEach(x => cellsIDs.push(x.id))
cellsArray.forEach(x => x.innerHTML = (x.id))

initButton.addEventListener('click', game.initialize)

resetButton.addEventListener('click', game.reset)


//document.getElementById(`${cellsY}-${cellsX}`).style.border = `1px solid black`

