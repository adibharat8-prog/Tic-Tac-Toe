// Matrix Style
// 0|3|6
// 1|4|7
// 2|5|8


let turn = 'X';
let h2 = document.getElementById('playerTurn');
let arr = Array(9).fill(null);
let toast = document.getElementById('toast');
let gameOver = false;
let winPattern = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

function WinCheck(win){
    for(let pattern of winPattern){
        let [a,b,c] = pattern;

        if(arr[a] != null && arr[a] == arr[b] && arr[b] ==arr[c]){
             toast.classList.add('show');
            const container = document.getElementById('container');
            container.classList.add('blur');
       
            toast.innerText = `Player ${win} Wins!!`;
            gameOver = true;
        } else{
            if(!arr.includes(null)){
            toast.classList.add('show');
            const container = document.getElementById('container');
            container.classList.add('blur');
            toast.innerText = `It's a DRAW!!`;
            gameOver = true;
        }
   }
}
    // }
    // if(arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6] ||
    //    arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7] ||
    //    arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8] ||
    //    arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2] ||
    //    arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5] ||
    //    arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8] ||
    //    arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8] ||
    //    arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6]){

    //     toast.classList.add('show');
    //     const container = document.getElementById('container');
    //     container.classList.add('blur');
       
    //     toast.innerText = `Player ${win} Wins!!`;
    //     gameOver = true;

    // } else{
    //     if(!arr.includes(null)){
    //         toast.classList.add('show');
    //         const container = document.getElementById('container');
    //         container.classList.add('blur');
    //         toast.innerText = `It's a DRAW!!`;
    //         gameOver = true;
    //     }
    // }

}

function func(ele){
    if (gameOver) return;
    const id = Number(ele.id);
    
    //Check for already filled box
    if(arr[id] !== null) return;
    ele.innerText = turn;
    arr[id] = turn;
    let win = turn;
    
    console.log(arr);
    WinCheck(win);
    
    if (!gameOver){
        turn = turn == 'X'? 'O' : 'X';    
        h2.innerText = `Player ${turn} turn`;
    }
    
}