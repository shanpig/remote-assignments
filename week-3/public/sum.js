window.onload = ()=>{
  let button = document.querySelector("button")
  
  button.addEventListener("click", ()=>{
    let number = document.querySelector("input").value;
    
    calculate(number).then((result)=>{
      let p = document.querySelector(".result");
      p.innerText = result;
    })
  })
}

function calculate(number){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    
    xhr.open("POST", `/getData?number=${number}`, true);
    
    xhr.onload = function(){
      resolve(this.responseText);
    }
  
    xhr.onerror = ()=>{
      reject("there is something wrong when sending xhr!")
    }

    xhr.send();
  })
}