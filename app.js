'use strict';
let imG1=document.getElementById('img1');
let imG2=document.getElementById('img2');
let imG3=document.getElementById('img3');
let reSult=document.getElementById("REsult");
let btN1=document.getElementById('butt');
let proDuct=[];
let prodNAme=[];
let voTtes=[];
let viEwws=[];
let roUnd=1;
let maXround=25;
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

let randomNm;
function ranDom(){
   if (roUnd==1){
     return  Math.floor(Math.random() * proDuct.length);
   }else{
       randomNm= Math.floor(Math.random() * proDuct.length);

  while(randomNm==fIrstd||randomNm==seCndb||randomNm==thIrdb){
    randomNm= Math.floor(Math.random() * proDuct.length);

  }
   }
   return randomNm;
}
let fIrst;
let seCnd;
let thIrd;
let fIrstd;
let seCndb;
let thIrdb;
let x;

function renderImg(){

fIrst =ranDom();
seCnd=ranDom();
thIrd=ranDom();

if(roUnd==1){
while(fIrst==seCnd||fIrst==thIrd||seCnd==thIrd){
  fIrst=ranDom();
  seCnd=ranDom();
  thIrd=ranDom();
}
}else{

  while(fIrst==seCnd||fIrst==thIrd||seCnd==thIrd){
    console.log('hi');

    fIrst=ranDom();
    seCnd=ranDom();
    thIrd=ranDom();
  }

}


fIrstd=fIrst;
seCndb=seCnd;
thIrdb =thIrd;

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

   
   let clCkimg=event.target.id;
    switch(clCkimg){

      case 'img1':
          proDuct[fIrst].voTes=proDuct[fIrst].voTes+1

          break;
      case 'img2':
          proDuct[seCnd].voTes++

          break;
      case 'img3':
          proDuct[thIrd].voTes++
          break;
        default:
}

renderImg();

  }else{
    img1.removeEventListener('click', changephoto);

    img2.removeEventListener('click', changephoto);
    img3.removeEventListener('click', changephoto);

  }

}
btN1.addEventListener('click',addresult);
function addresult(event){
if (roUnd==maXround+1){

    for(let i=0;i<proDuct.length;i++){
     let liEl=document.createElement('li');
     liEl.textContent=`${proDuct[i].name} had ${proDuct[i].voTes} and was seen ${proDuct[i].viEw} times`
    voTtes.push(proDuct[i].voTes);
    viEwws.push(proDuct[i].viEw);

     reSult.appendChild(liEl);


  }

    Chartrender();

  }
}
for(let i =0;i<proDuct.length;i++){
prodNAme.push(proDuct[i].name);

}

function Chartrender(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: prodNAme,
          datasets: [{
              label: '# of Votes',
              data: voTtes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'
                 
              ],
              borderWidth: 1
          },{
            label: '# of Votes',
            data: viEwws,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });



}





