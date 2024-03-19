let boxes = document.querySelectorAll(".box");
let resetBtn1 = document.querySelector("#reset-button1");
let resetBtn2=document.querySelector("#reset-button2");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let disabledBoxes=0;//to check game is over no one won

//playerX, playerY
let turn0 = true;
const winningPatterns = [[0,1,2],
                         [0,3,6],
                         [0,4,8],
                         [1,4,7],
                         [2,5,8],
                         [2,4,6],
                         [3,4,5],
                         [6,7,8],
                        ];



const resetGame = () =>{
        turn0=true;
        enableBoxes();
        msgContainer.classList.add("hide");
} ;

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        disabledBoxes+=1;
        box.disabled=true;//because if you click on button twice it change the value O-X, X-O
        checkWinner();
        gameDraw(disabledBoxes);
    });
});

//disable boxes after winning 
const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

//displaying winner
const showWinner = (winner) =>{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
        disabledBoxes=0;
};

//to check game is over no one won
const gameDraw = (disabledBoxes) =>{
   if( disabledBoxes == 9 ){
        msg.innerText=`Ooppss!! It's Draw :(`;
        msgContainer.classList.remove("hide");
        disabledBoxes=0;
   }
};

const checkWinner = () =>{
    for(let pattern of winningPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1==pos2 && pos2 == pos3)
            {
                showWinner(pos1);
            }
        }
        
    }
};
resetBtn1.addEventListener("click",resetGame);
resetBtn2.addEventListener("click",resetGame);