(function() {
    var box = document.querySelector('.box');
    var scrollable = document.querySelector('.scrollable');

    var colorRandomizer = function() {
        var val = Math.random() * (255 - 0) + 0;
        var round = Math.round(val)

        return round;
    }

    var generateHEX = function() {
        var arr = [];
        while(arr.length < 3) {
          arr.push(colorRandomizer())
        }

        return arr.length === 3 ? 'rgba(' + arr.join(',') + ',1)' : '#000000' ;
    }

    var borderCount = function(e, el) {
        var max = el.scrollHeight - window.innerHeight + 17 ;
        var result = (e/max * 100) / 2;
        return result;
    }

    scrollable.addEventListener('scroll', function(e) {
        var _this = this;
        var current = _this.scrollTop;
        box.style.top = (current * 1.7) + "px";
        box.style.borderColor = generateHEX();
        box.style.borderRadius = borderCount(current, _this) + '%';
    })

}())
