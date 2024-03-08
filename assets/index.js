
let article   = document.querySelector('.container')
let indi   = document.querySelector('.wholeBody')


var a=(article.clientHeight)*0.9;
console.log(a)

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < a) {
      document.body.style.backgroundColor = '#fb638c';
    } 
    else if (verticalScrollPx > a && verticalScrollPx < (2*a)) {
        document.body.style.backgroundColor = 'white';
    } 
    else if (verticalScrollPx > (2*a) && verticalScrollPx < (3*a)) {
      document.body.style.backgroundColor = '#00c1b5';
    } 
    else if (verticalScrollPx > (3*a) && verticalScrollPx < (4*a)) {
      document.body.style.backgroundColor = '#ff651a';
    } 
    else if (verticalScrollPx > (4*a) && verticalScrollPx < (5*a)) {
      document.body.style.backgroundColor = '#ffbe00';
    } 
    else if (verticalScrollPx > (5*a) && verticalScrollPx < (6*a)) {
      document.body.style.backgroundColor = '#1d3fbb';
    } 
    else if (verticalScrollPx > (6*a) && verticalScrollPx < (7*a)) {
      document.body.style.backgroundColor = '#e30512';
    } 
  });
  
