console.log("heyyy")
let a=document.getElementById('title')
console.log(a.innerText)
let mess="bhot ho gya ab band karo"
title.innerText=mess;
console.log(title.innerText)
title.innerText="Great Vibes"
title.style.color="red"
title.style.backgroundColor="skyblue"
// let redDiv=document.getElementById("red")
// let yellowDiv=document.getElementById('yellow')
// let greenDiv=document.getElementById('green')
// redDiv.onclick = () => console.log("you clicked red")
// yellowDiv.onclick = () => console.log("you clicked yellow")
// greenDiv.onclick = () => console.log("you clicked green")
const squares =document.querySelectorAll('.colorSquare')
// console.log(squares)
const counter={"red": 0,"yellow": 0,"green": 0}
squares.forEach(square=>{
  square.onclick = () => 
    {
      counter[square.value]+=1
      square.innerText=counter[square.value]
    }
})

function clearVal (){
  counter.red=0
  counter.yellow=0
  counter.green=0
  squares.forEach(square=>{
    square.innerText= ''
  })
  
}
const clearBtn=document.getElementById("clear-btn")
clearBtn.onclick=()=>{
  clearVal()
}
