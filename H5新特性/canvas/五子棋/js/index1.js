const WINDOW_WIDTH = 450;
const WINDOW_HEIGHT = 450;

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var oBtn = document.getElementById("btn");
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    ctx.strokeStyle = "#aaa";
    var img = new Image();
    var Step = true;
    var gameOver = false;
    var chessBoard = [];
    var wins = [];
    var myWin = []; //我方胜出的方式
    var AiWin = []; //ai方胜出的方式
    //棋盘阵列数组
    for (var x = 0; x < 15; x++) {
        chessBoard[x] = [];
        for (var y = 0; y < 15; y++) {
            chessBoard[x][y] = 0;
        }
    }
    //赢法数组
    for (var x = 0; x < 15; x++) {
        wins[x] = [];
        for (var y = 0; y < 15; y++) {
            wins[x][y] = [];
        }
    }
    //赢法集合
    var count = 0; //赢的个数
    //横向赢法
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 11; y++) {
            /*wins[0][0][0] = true;
              wins[0][1][0] = true;           
              wins[0][2][0] = true;
              wins[0][3][0] = true;
              wins[0][4][0] = true;

              wins[0][1][1] = true;
              wins[0][2][1] = true;
              wins[0][3][1] = true;
              wins[0][4][1] = true;
              wins[0][5][1] = true;
            */
            for (var z = 0; z < 5; z++) {
                wins[x][y + z][count] = true;
            }
            count++;
        }
    }
    //竖向赢法
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 11; y++) {
            for (var z = 0; z < 5; z++) {
                wins[y + z][x][count] = true;
            }
            count++;
        }
    }
    //正斜线赢法
    for (var x = 0; x < 11; x++) {
        for (var y = 0; y < 11; y++) {
            for (var z = 0; z < 5; z++) {
                wins[x + z][y + z][count] = true;
            }
            count++;
        }
    }
    //反斜线赢法
    for (var x = 0; x < 11; x++) {
        for (var y = 14; y > 3; y--) {
            for (var z = 0; z < 5; z++) {
                wins[x + z][y - z][count] = true;
            }
            count++;
        }
    }
    //两方胜出初始化
    for (var i = 0; i < count; i++) {
        myWin[i] = 0;
        AiWin[i] = 0;
    }
    img.src = "images/logo.png";
     img.onload = function () {
          ctx.drawImage(img, 15, 15, 420, 420); //加载水印
          drawChessBoard(); //棋盘函数
     }
    canvas.onmousedown = function (ev) {
        if (gameOver) return;
        if (!Step) return;
        var oEvent = ev || window.event;
        var x = Math.round((oEvent.offsetX - 15) / 30);
        var y = Math.round((oEvent.offsetY - 15) / 30);
        if (chessBoard[x][y] == 0) { //棋盘点阵为空才可落子
            chessStep(x, y, Step);
            chessBoard[x][y] = 1;
            for (var i = 0; i < count; i++) {
                if (wins[x][y][i]) {
                    myWin[i]++;
                    AiWin[i] = 6;
                    (myWin[i] == 5) && (setTimeout(function () {
                        alert("你赢了！");
                    }, 300), gameOver = true);
                }
            }
            if (!gameOver) {
                Step = !Step;
                Ai();
            }
        }
    }
    //绘制棋盘
    function drawChessBoard() {
        for (var i = 0; i < 15; i++) {
            ctx.moveTo(15 + 30 * i, 15);
            ctx.lineTo(15 + 30 * i, 435);
            ctx.moveTo(15, 15 + 30 * i);
            ctx.lineTo(435, 15 + 30 * i);
            ctx.stroke();
        }
    }

    function chessStep(i, j, mine) {
        //绘制棋子,黑棋棋子
        ctx.beginPath();
        ctx.arc(15 + 30 * i, 15 + 30 * j, 12, 0, Math.PI * 2);
        ctx.closePath();
        //渐变函数，六个参数分别为内圆圆心及半径，外圆圆心及半径
        var gradient = ctx.createRadialGradient(15 + 30 * i + 2, 15 + 30 * j - 2, 3, 15 + 30 * i + 2, 15 + 30 * j - 2, 12);
        if (mine) { //我下黑棋
            gradient.addColorStop(0, "#636766"); //内圆颜色
            gradient.addColorStop(1, "#0a0a0a"); //外圆颜色
        } else { //对方下白棋
            gradient.addColorStop(0, "#f9f9f9"); //内圆颜色
            gradient.addColorStop(1, "#d1d1d1"); //外圆颜色
        }
        ctx.fillStyle = gradient;
        ctx.fill();
    }
/**
 *Ai难易程度由分数浮动值决定
 即：myWin()与AiWin()赋予数值之间的差值。
 当每一步之间的差值越大，表明对拦截棋子的敏感度越大
 *
 */
function Ai() {
        var myScore = []; //我的分数
        var AiScore = []; //ai的分数
        var maxScore = 0;
        var a, b;
        for (var x = 0; x < 15; x++) {
            myScore[x] = [];
            AiScore[x] = [];
            for (var y = 0; y < 15; y++) {
                myScore[x][y] = 0;
                AiScore[x][y] = 0;
            }
        }
        //判断加分
        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 15; y++) {
                if (chessBoard[x][y] == 0) {
                    for (var i = 0; i < count; i++) {
                        if (wins[x][y][i]) {
                            if (myWin[i] == 1) {
                                myScore[x][y] += 100;
                            } else if (myWin[i] == 2) {
                                myScore[x][y] += 200;
                            } else if (myWin[i] == 3) {
                                myScore[x][y] += 500;
                            } else if (myWin[i] == 4) {
                                myScore[x][y] += 1000;
                            }
                            if (AiWin[i] == 1) {
                                AiScore[x][y] += 150;
                            } else if (AiWin[i] == 2) {
                                AiScore[x][y] += 300;
                            } else if (AiWin[i] == 3) {
                                AiScore[x][y] += 1000;
                            } else if (AiWin[i] == 4) {
                                AiScore[x][y] += 2000;
                            }
                        }
                    }
                    //判断分数最大值
                    //先判断我与最大值
                    if (myScore[x][y] > maxScore) {
                        maxScore = myScore[x][y];
                        a = x;
                        b = y;
                    } else if (myScore[x][y] == maxScore) {
                        //当我的分数与最大值相等时，再去判断最大值与ai分数的大小
                        if (AiScore[x][y] > maxScore) {
                            maxScore = AiScore[x][y];
                            a = x;
                            b = y;
                        }
                    }
                    //先判断ai与最大值
                    if (AiScore[x][y] > maxScore) {
                        maxScore = AiScore[x][y];
                        a = x;
                        b = y;
                    } else if (AiScore[x][y] == maxScore) {
                        //当我的分数与最大值相等时，再去判断最大值与ai分数的大小
                        if (myScore[x][y] > maxScore) {
                            maxScore = myScore[x][y];
                            a = x;
                            b = y;
                        }
                    }
                }
            }
        }
        chessStep(a, b, false);
        chessBoard[a][b] = 2;
        for (var i = 0; i < count; i++) {
            if (wins[a][b][i]) {
                AiWin[i]++;
                myWin[i] = 6;
                (AiWin[i] == 5) && (setTimeout(function () {
                    alert("Ai赢了！")
                }, 300), gameOver = true);
            }
        }
        (!gameOver) && (Step = !Step);
    }
}