let W = 9001;
A= 9000;
let level = [
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W], //W represents the walls
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W], // A represents the empty spaces
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,W],
    [W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W],
]

function drawLevel(){
    let canvas = document.createElement('canvas');
        canvas.id = "WormGame";
        canvas.width = 420;
        canvas.height = 260;
        canvas.style.border = "1px solid";
    let ctx = canvas.getContext('2d');
    let body = document.getElementsByTagName("body")[0];
         body.appendChild(canvas);
    ctx.fillRect(0,0,20,20);

    for(i=0; i<20; i++){
        for (j = 0; j<12; j++) {
            if (level[i][j] == 9001) {
                let x = 20*1;
                    y= 20 * j;
                ctx.fillRect(x,y,20,20);
            }
            
        }
    }
}