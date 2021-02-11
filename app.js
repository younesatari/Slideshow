/* Getting Elements and Asign them to Variables */
const personImg = document.querySelector('.img');
const personName = document.querySelector('.name');
const personProfession = document.querySelector('.profession');
const personDescription = document.querySelector('.description');
const surpriseMe = document.querySelector('.primary-btn');
const btns = document.querySelectorAll('.btn');

/* Persons infos */
let persons = [
   {image: "img/0.png", name: "Youness Atari" ,profession: "Front end Developer",description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
   {image: "img/1.png", name: "John Doe" ,profession: "Back end Developer",description:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
   {image: "img/2.png", name: "Andriy Hardy" ,profession: "Web Designer",description:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."}
] 

/* Count */
let count = 0;

/* Change Review */
function changeReview(num){
   personImg.innerHTML = `
   <img src="${persons[num].image}">
   <span><i class="fas fa-quote-right"></i></span>
   `;
   personName.innerHTML = `${persons[num].name}`;
   personProfession.innerHTML = `${persons[num].profession}`;
   personDescription.innerHTML = `${persons[num].description}`;
}

/* Arrows Event Listener */
btns.forEach(btn=>{
   btn.addEventListener('click',e=>{

      /* Right Arrow */
      if(e.target.classList.contains('fa-chevron-right')){
         count++;
         if(count > 2){ count = 0 }
         changeReview(count);
      } 

      /* Left Arrow */
      if(e.target.classList.contains('fa-chevron-left')){
         count--;
         if(count < 0){ count = 2 }
         changeReview(count);
      }
   })
});

/* Surprise Me Button Event Listener */
surpriseMe.addEventListener('click', ()=>{

   /* Random Number */
   count = Math.floor(Math.random() * 3);

   changeReview(count)
});


