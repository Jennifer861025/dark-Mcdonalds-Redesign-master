let scrollTop;
let arrHeight = [];
let accHeight = [];
let sect = document.querySelectorAll('.section');
let item = document.querySelectorAll('.item');

sect.forEach((el) => {
  arrHeight.push(el.offsetHeight);
})

arrHeight.reduce((acc, cur) => {
  accHeight.push(acc + cur);
  return acc + cur; 
}, 0);

window.addEventListener('scroll', () => {
  scrollTop = window.pageYOffset;
  requestAnimationFrame(scrollSpy);
});

function scrollSpy () {
   for (let i = 0; i < accHeight.length; i++) {    
    if (scrollTop < accHeight[i]) {
      item.forEach((el) => {
        el.classList.remove('active');
      })      
      document.getElementById('tar' + i).classList.add('active');
      return
    } 
  }  
}


 