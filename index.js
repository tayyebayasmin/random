var groupimg=['images.jpg','images0.jpg','images1.jpg','images2.jpg','images3.jpg','images5.jpg','images6.jpg','images7.jpg']

 function imgchanger(){
 let a=Math.floor(Math.random()*groupimg.length)
 let d=document.getElementById('image')
 console.log(d)
 d.src=groupimg[a]
}
var b=document.getElementById('btn')
//console.log(b)
b.addEventListener('click',imgchanger)
