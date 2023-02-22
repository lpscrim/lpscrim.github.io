const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let win = 0;

class Field {
  constructor (field) {
    this._field = field;
    
  }
  print() {
    for (let row of this._field){
      console.log(row.join(' '));
    }
  }

  playGame() {
    let x = 0;
    let y = 0;

    while (win == 0){
      let input = prompt('Enter a direction!  (U/D/L/R)')
    
      if (input.toUpperCase() === 'U') {
        if (x <= 0) {
          console.log('Cant go further up!');
        } else {
          y -= 1;
        }

      } else if (input.toUpperCase() === 'L') {
        if (y <= 0) {
          console.log('Cant go further left!');
        } else {
          x -= 1;
        }

      } else if (input.toUpperCase() === 'D') {
        if (y >= this._field.length) {
          console.log('Cant go further down!');
        } else {
          y += 1;
        }
        
      } else if (input.toUpperCase() === 'R') {
        if (x >= this._field.length[y]) {
          console.log('Cant go further right!');
        } else {
          x += 1;
        }
        
      } else {
        console.log('invalid entry')
      }

      if (this._field[y][x] == hat) {
        console.log('You found the hat! You win!')
        win = 1;
      } else if (this._field[y][x] == hole) {
        console.log('You fell in a hole. Game Over')
        win = 2
      } else if (this._field[y][x] == undefined) {
        console.log('Trying to escape eh?')
      }
      else {
        this._field[y][x] = pathCharacter;
      }
        test.print()
    }
  }

  static generateField(width, height, percentage) {
    let newField = [];

    for (let i = 0; i < height; i++){
      newField.push([]);
      for (let j = 0; j < width; j++){
        newField[i].push(fieldCharacter)
      }
    }
    newField[0][0] = pathCharacter;


    let hatX = Math.floor(Math.random() * width);
    let hatY = Math.floor(Math.random() * height);
    newField[hatY][hatX] = hat;
    
    let holes = (((width * height) - 2) * percentage / 100);

    for (let k = holes; k > 0; k--) {
      let holeX = hatX;
      let holeY = hatY;

      while (holeX === hatX) {
        holeX = Math.floor(Math.random() * width)
      };
      while (holeY === hatY) {
        holeY = Math.floor(Math.random() * height)
      };
      if (holeX != 0 && holeY != 0){
        newField[holeY][holeX] = hole; 
      }
    }

    return newField;
  }

  solve(){
    let solveX = 0;
    let solveY = 0;
    let testCount = 0;
    
    
      while (win == 0){

        console.log(this._field)
        console.log(solveX)
        console.log(solveY)
        
                
        if(this._field[solveY][solveX + 1] === fieldCharacter ){
          solveX += 1;
        } else if(this._field[solveY + 1][solveX] === fieldCharacter){
          solveY += 1;
        } else if(this._field[solveY][solveX - 1] === fieldCharacter){
          solveX -= 1;
        } else if(this._field[solveY - 1][solveX] === fieldCharacter){
          solveY -= 1;
        } 

          else if(this._field[solveY][solveX + 1] === pathCharacter){
          solveX += 1;
          this._field[solveY][solveX] = '9'
        } else if(this._field[solveY + 1][solveX] === pathCharacter){
          solveY += 1;
          this._field[solveY][solveX] = '9'
        } else if(this._field[solveY][solveX - 1] === pathCharacter){
          solveX -= 1;
          this._field[solveY][solveX] = '9'
        } else if(this._field[solveY - 1][solveX] === pathCharacter){
          solveY -= 1;
          this._field[solveY][solveX] = '9'
        } 
        
          else if((this._field[solveY][solveX + 1] == hat)){
          console.log("Solved!");
          win = 1;
        } else if(this._field[solveY + 1][solveX] == hat){
          console.log("Solved!");
          win = 1;
        } else if(this._field[solveY][solveX - 1] == hat){
          console.log("Solved!");
          win = 1;
        } else if(this._field[solveY - 1][solveX] == hat){
          console.log("Solved!");
          win = 1; 
        } else {
          console.log('This game is impossible!');
          win = 2;
        }

        this._field[solveY][solveX] = pathCharacter;
        
        
        console.log(solveX)
        console.log(solveY)

        testCount += 1;
        test.print();
      }
      if(testCount >= 30){
        win = 2;
      }
  }


}


let Nu = Field.generateField(6,6,17)
console.log(Nu)
let test = new Field(Nu)
test.print()
test.solve()
