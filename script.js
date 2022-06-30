var color1=document.querySelector('#color1')
var color2=document.querySelector('#color2')
var body=document.querySelector('body')
color1.addEventListener('input',function(){
    var f=color1.value;
    var s=color2.value;
    // console.log(f);
    body.setAttribute('style',`background-image: linear-gradient(to right,${f},${s});`)
    var h3=document.querySelector('h3')
    h3.innerHTML=`linear-gradient(to right,${f},${s});`
   
    
})

color2.addEventListener('input',function(){
    var f=color1.value;
    var s=color2.value;
    // console.log(f);
  
    body.setAttribute('style',`background-image: linear-gradient(to right,${f},${s});`)
    var h3=document.querySelector('h3')
    h3.innerHTML=`linear-gradient(to right,${f},${s});`
    
})