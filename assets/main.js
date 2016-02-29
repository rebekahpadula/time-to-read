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
