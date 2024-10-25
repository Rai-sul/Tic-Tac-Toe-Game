let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetGame");
let newGameButton = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg_container");
let dis_msg = document.querySelector("#msg");
let turn0 = true;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  dis_msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

// ======================================================================================

// Define the callback function "inside"
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turn0) {
//       box.innerText = "0";
//       turn0 = false;
//     } else {
//       box.innerText = "X";
//       turn0 = true;
//     }
//     box.disabled = true;
//     checkWinner();
//   });
// });

//======================================================================================

// Define the callback function "outside"
const handleClick = (box) => {
  if (turn0) {
    box.innerText = "0";
    turn0 = false;
  } else {
    box.innerText = "X";
    turn0 = true;
  }
  box.disabled = true;
  checkWinner();
};

// Add event listener with reference to the callback function
boxes.forEach((box) => {
  box.addEventListener("click", () => handleClick(box));
});

// ======================================================================================

const checkWinner = () => {
  for (let pattern of winningPattern) {
    pos1 = boxes[pattern[0]].innerText;
    pos2 = boxes[pattern[1]].innerText;
    pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
