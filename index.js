const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate() {
  let password1 = ''
  let password2 = ''
  for(i = 0; i < 16; i++) {
    let x = Math.floor(Math.random() * characters.length)
    let y = Math.floor(Math.random() * characters.length)
    password1 += characters[x]    
    password2 += characters[y]
  }
  let first_recommendation = document.getElementById("first-recommendation")
  first_recommendation.textContent = password1
  let second_recommendation = document.getElementById("second-recommendation")
  second_recommendation.textContent = password2

}

//  document.getElementById("first-recommendation").addEventListener("click", function() {
//   navigator.clipboard.writeText();
// }
function copyContent(){
  let X = document.getElementById.innerText("first-recommendation")
  navigator.clipboard.writeText(x);

}
