'use strict';
let imG1=document.getElementById('img1');
let imG2=document.getElementById('img2');
let imG3=document.getElementById('img3');
let reSult=document.getElementById("REsult");
let btN1=document.getElementById('butt');
let proDuct=[];
let roUnd=1;
let maXround=10;
function Products(product1){

  this.name=product1.split('.')[0];
  this.iMg=`image/${product1}`;
  this.viEw=0;
  this.voTes=0;
  proDuct.push(this);



}


let list=['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','petsweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','waterglass.jpg','wineglass.jpg' ];

for(let i=0;i<list.length;i++){

  new Products(list[i]);

}
// console.log(proDuct);


function ranDom(){

  return Math.floor(Math.random() * proDuct.length);

}
let fIrst;
let seCnd;
let thIrd;


function renderImg(){

fIrst =ranDom();
seCnd=ranDom();
thIrd=ranDom();

while(fIrst==seCnd){
  seCnd=ranDom();

}
while (fIrst==thIrd||seCnd==thIrd){
  thIrd=ranDom();


}
imG1.setAttribute('src', proDuct[fIrst].iMg);
imG2.setAttribute('src', proDuct[seCnd].iMg);
imG3.setAttribute('src', proDuct[thIrd].iMg);

proDuct[fIrst].viEw++;
proDuct[seCnd].viEw++;
proDuct[thIrd].viEw++;



  






}
renderImg();
imG1.addEventListener('click',changephoto);
imG2.addEventListener('click',changephoto);
imG3.addEventListener('click',changephoto);


function changephoto(event){
   if (roUnd<=maXround){
    roUnd++;

    renderImg();
   
    let clCkimg=event.target.id;
    // console.log(clCkimg);
    switch(clCkimg){

      case 'img1':
          proDuct[fIrst].voTes++
          console.log( proDuct[fIrst].voTes);
          break;
      case 'img2':
          proDuct[seCnd].voTes++
console.log(proDuct[seCnd].voTes);
          break;
      case 'img3':
          proDuct[thIrd].voTes++
console.log(proDuct[thIrd].voTes );
          break;
        default:



    }
   
}else{
    img1.removeEventListener('click', changephoto);

    img2.removeEventListener('click', changephoto);
    img3.removeEventListener('click', changephoto);
   console.log(proDuct);

  }

}
btN1.addEventListener('click',addresult);
function addresult(event){
if (roUnd==maXround+1){

    for(let i=0;i<proDuct.length;i++){
     let liEl=document.createElement('li');
     liEl.textContent=`${proDuct[i].name} had ${proDuct[i].voTes} and was seen ${proDuct[i].viEw} times`

     reSult.appendChild(liEl);



    }



}




}





