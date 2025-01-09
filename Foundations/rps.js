let computerChoice = getComputerChoice();
let whoWin;
let message;
let humanChoice = 1;
let computerScore = 0;
let humanScore = 0;
let winCondition = 't'

function play(bVal){
  var v = bVal.value;
  if (v === "Rock") {
    humanChoice = 1
  } else if ( v === "Paper") {
    humanChoice = 2
  } else {
    humanChoice = 3
  }
  computerChoice = getComputerChoice()
  whoWin = checkWinCondition()
  message = printChoice(humanChoice)+" vs "+printChoice(computerChoice)+" -- "+whoWin
  message = message +" -- User "+humanScore+" : Computer "+computerScore
  // console.log(message)
  var ul = document.createElement("ul")
  var result = document.createTextNode(message)
  ul.appendChild(result)
  document.getElementById("result").appendChild(ul)
  if (humanScore >= 5 || computerScore >= 5) {
    document.getElementById('choiceButton1').style.visibility = 'hidden'
    document.getElementById('choiceButton2').style.visibility = 'hidden'
    document.getElementById('choiceButton3').style.visibility = 'hidden'
    if (humanScore >= 5)  {
      message = "Game END -- User get 5 WIN"
    } else {
      message = "Game END -- Computer get 5 WIN"
    }
    var ul = document.createElement("ul")
    var result = document.createTextNode(message)
    ul.style.color="green"
    ul.style.fontWeight="bold"
    ul.appendChild(result)
    document.getElementById("result").appendChild(ul)
  }
}

function getComputerChoice(){
  return(((Math.floor(Math.random()*1000*Math.random()))%3)+1);
}

// 1 = Rock, 2 = Paper , 3 = Scissor
function printChoice(c){
  if (c === 1) { return "Rock" }
  else if (c === 2) { return "Paper" }
  else { return "Scissor" }
}

function checkWinCondition(){
  if (computerChoice === 1){
    if (humanChoice === 2){
      winCondition = 'h'
    } else if (humanChoice === 3) {
      winCondition = 'c'
    } else {
      winCondition = 't'
    }
  } else if (computerChoice === 2){
    if (humanChoice === 3){
      winCondition = 'h'
    } else if (humanChoice === 1) {
      winCondition = 'c'
    } else {
      winCondition = 't'
    }
  } else if (computerChoice === 3){
    if (humanChoice === 1){
      winCondition = 'h'
    } else if (humanChoice === 2) {
      winCondition = 'c'
    } else {
      winCondition = 't'
    }
  }
  if (winCondition === 'h') {
    humanScore++
    return "User Win"
  } else if (winCondition === 'c') {
    computerScore++
    return "Computer Win"
  } else {
    winCondition = 't'
    return "TIE"
  }
}




