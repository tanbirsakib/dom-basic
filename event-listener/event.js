// make bg-blue
const bluebutton = document.getElementById("bule-button");
bluebutton.onclick = function () {
  document.body.style.backgroundColor = "blue";
};
//make bg-yellow
const yellowButton = document.getElementById("yellow-button");
function yellowBg() {
  document.body.style.backgroundColor = "yellow";
}
yellowButton.onclick = yellowBg;
//make bg hotpink with addEventListener
const hotPinkButton = document.getElementById("hot-pink");
hotPinkButton.addEventListener("click", hotPink);
function hotPink() {
  document.body.style.backgroundColor = "hotpink";
}
//make bg hotpink with addEventListener inline
const lightBlue = document.getElementById("light-blue");
lightBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});
//make bg khaki without declaring variable
document.getElementById('khaki').addEventListener('click', function(){
    document.body.style.backgroundColor = 'khaki'
})