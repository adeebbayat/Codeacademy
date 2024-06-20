const prompt = require('prompt-sync')({sigint: true});
const process = require('process')
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(ArrOfArr) {
    this.current = [0,0]
    this.win = [2,1]
    this.field = ArrOfArr
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        process.stdout.write(this.field[i][j])
      }
      process.stdout.write('\n')
    }
  }

  moveLeft() {
    this.current[1] -= 1
    this.field[this.current[0]][this.current[1]] = '*'
  }

  moveRight() {
    this.current[1] += 1
    this.field[this.current[0]][this.current[1]] = '*'
  }

  moveDown() {
    this.current[0] += 1
    this.field[this.current[0]][this.current[1]] = '*'
  }

  moveUp() {
    this.current[0] -= 1
    this.field[this.current[0]][this.current[1]] = '*'
  }

}

let myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
])

myField.print()

for (let i = 0; i < 3; i++) {
  const move = prompt('what is your move');
  switch (move) {
    case 'l':
      myField.moveLeft()
      break;
    case 'r':
      myField.moveRight()
      break;
    case 'd':
      myField.moveDown()
      break;
    case 'u':
      myField.moveUp()
      break;
    default:
      console.log('Invalid Move')
  }
  myField.print()
  if (myField.current[0] === myField.win[0] && myField.current[1] === myField.win[1]) {
    console.log('You Win!')
    break;
  }
}