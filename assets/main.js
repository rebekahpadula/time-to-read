// mine
(function readTime () {
    var para = document.querySelectorAll('.para');
    para = Array.prototype.slice.call(para);
    var timeToRead = document.querySelector('.timeToRead');
    var numWords = 0;

    for (var i = 0; i < para.length; i++) {
        numWords += para[i].textContent.split(' ').length;
    };

    var x = Math.ceil(numWords / 230);
    timeToRead.innerHTML = x + ' min read';
})();

// loop or reduce to find totalWords in para which is now an array because .slice.call
//  use text content to get actual content not just number of para objects





// (function readTime () {
//     var para = document.querySelectorAll('.para');
//     var timeToRead = document.querySelector('.timeToRead');
//     var words = para.innerHTML.split(' ');
//     var x = Math.ceil(totalWords / 230);
//     timeToRead.innerHTML = x + ' min read' + '(' + totalWords;
// })();
