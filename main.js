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
      arr.push(colorRandomizer().toString(16))
    }

    return '#' + arr.join('') ;
}

var borderCount = function(e, el) {
  var max = el.scrollHeight - window.innerHeight + 50 ;
  var result = (e/max * 100) / 2;
  return result;
}

scrollable.addEventListener('scroll', function(e) {
  var _this = this;
  var current = _this.scrollTop;

//   box.style.top = "translateY(" + current + "px)rotate(45deg)" ;
  box.style.top =  current + "px" ;
  box.style.borderColor = generateHEX();
  box.style.borderRadius = borderCount(current, _this) + '%'
})

}())