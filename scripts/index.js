const questions = document.getElementsByClassName('accordion-title')//Gets all the questions (plus icon)

for (const question of questions) {
  const answer = question.parentElement.querySelector('.accordion-content')
  const remove = question.parentElement.querySelector(".remove")
  const add = question.parentElement.querySelector(".add")
  let open = false //Variable to check if the answer is visible or not

  function openAnswer() {
    if (open == true) { //If you click the question while the answer is visible it will stop being visible and open will change it's value to false
      add.style.display = "block";
      remove.style.display = "none";
      answer.style.overflow = "hidden";
      answer.style.maxHeight = '0';
      open = false; 
    } else { //If you click the question while the answer is not visible it will start being visible and open will change it's value to true
      add.style.display = "none";
      remove.style.display = "block";
      answer.style.maxHeight = "300px";
      answer.style.overflow = "visible";
      open = true;
    }
  }

  question.addEventListener('click', openAnswer) 
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$('.brand-carousel').owlCarousel({
  loop:true,
  margin:15,
  autoplay:true,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})

// let constrain = 1000;
// let mouseOverContainer = document.getElementById("ex1");
// let ex1Layer = document.getElementById("ex1-layer");

// function transforms(x, y, el) {
//   let box = el.getBoundingClientRect();
//   let calcX = -(y - box.y - (box.height / 2)) / constrain;
//   let calcY = (x - box.x - (box.width / 2)) / constrain;
  
//   return "perspective(100px) "
//     + "   rotateX("+ calcX +"deg) "
//     + "   rotateY("+ calcY +"deg) ";
// };

//  function transformElement(el, xyEl) {
//   el.style.transform  = transforms.apply(null, xyEl);
// }

// mouseOverContainer.onmousemove = function(e) {
//   let xy = [e.clientX, e.clientY];
//   let position = xy.concat([ex1Layer]);

//   window.requestAnimationFrame(function(){
//     transformElement(ex1Layer, position);
//   });
// };

// $('.js-tilt').tilt({
//   glare: true,
//   maxGlare: .5
// })