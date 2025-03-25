
let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
const resultText = document.getElementById('result-text');

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 6s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 6s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateScore, 6000);
    
});
function updateScore(){
    document.querySelector("#heads-score").textContent = `heads: ${heads}`;
    document.querySelector("#tails-score").textContent = `tails: ${tails}`;
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateScore();
});