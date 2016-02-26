var readTime = function(x){
var minutes = Math.floor(x.split(' ').length / 230 )
  if(minutes === 0) minutes = 1
  return minutes + ' min read'
}

var time-to-read = document.querySelector('time-to-read');


var para = document.querySelector('para');

console.log(para.textContent.split(' ').length);