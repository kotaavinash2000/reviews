const reviews=[
    {
        id:1,
        name:"Kota Avinash",
        img:"https://images.pexels.com/photos/1852389/pexels-photo-1852389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        position:"Web Designer and Programmer",
        infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur quo quidem ab? Vitae ullam placeat dolore cumque quo numquam?",
    },
    {
        id:2,
        name:"Kiran Teja",
        img:"https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        position:"Pega Developer",
        infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur quo quidem ab? Vitae ullam placeat dolore cumque quo numquam? kjhigu",
    },
    {
        id:3,
        name:"Phani",
        img:"https://images.pexels.com/photos/3446256/pexels-photo-3446256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        position:"Programmer",
        infos:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur quo quidem ab? Vitae ullam placeat dolore cumque quo numquam? hgtddsssxe",

    },{
        id:4,
        name:"Sriharsha",
        img:"https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        position:"Pega Developer",
        infos:"https://images.pexels.com/photos/ Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur quo quidem ab? Vitae  "
    }
]

const name1=document.querySelector(".name");
const position=document.querySelector(".position");
const photo=document.querySelector(".photo");
const forButton=document.querySelector(".btn-1");
const bacButton=document.querySelector(".btn-2");
const info=document.querySelector(".info");

let currItem=0;
window.addEventListener("DOMContentLoaded",function(){
    
showPerson(currItem);

});

function showPerson(number){
        const item=reviews[number];
        photo.src=item.img;
        name1.textContent=item.name;
        position.textContent=item.position;
        info.textContent=item.infos;

}

bacButton.addEventListener('click',function(){
    currItem++;
    if(currItem>reviews.length-1){
        currItem=0;
    }
    showPerson(currItem);
})

forButton.addEventListener('click',function(){
    currItem--;
    if(currItem<0){
        currItem=reviews.length-1;
    }
    showPerson(currItem)
})