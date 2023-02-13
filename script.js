//your code here!
//solution
let list = document.querySelector("#infi-list");
console.log(list);

for(let i=1; i<=10; i++){
  list.innerHTML += `<li>Item ${i}</li>`
}

let n = 10;

list.addEventListener("scroll", ()=>{
  // console.log("used scrolled the list");
  if(list.scrollHeight - list.scrollTop - list.clientHeight < 1){
    // console.log("you reached the end");
    list.innerHTML += `
    <li>Item ${n+1}</li>
    <li>Item ${n+2}</li>
    `
    n+=2;
  }
})
