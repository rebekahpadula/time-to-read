// mine
(function readTime () {
    var para = document.querySelectorAll('.para');
    para = Array.prototype.slice.call(para);
    var timeToRead = document.querySelector('.timeToRead');
    var numWords = 0;

    numWords = para.reduce(function (a, b) {
        return a + b.textContent.split(' ').length;
    }, 0);
    
    // or instead of reduce you could use a loop
    // for (var i = 0; i < para.length; i++) {
    //     numWords += para[i].textContent.split(' ').length;
    // };

    var x = Math.ceil(numWords / 230);
    timeToRead.innerHTML = x + ' min read';
})();
