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

    return arr.length === 3 ? '#' + arr.join('') : '#000000' ;
}
// -50
var borderCount = function(e, el) {
  var userAgent = window.navigator.userAgent;
  var scrollBottom = 17;
  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
   scrollBottom = -50;
  }
  var max = el.scrollHeight - window.innerHeight + scrollBottom ;
  var result = (e/max * 100) / 2;
  return result;
}

scrollable.addEventListener('scroll', function(e) {
  var _this = this;
  var current = _this.scrollTop;
  var top = current*1.55;

//   box.style.top = "translateY(" + current + "px)rotate(45deg)" ;
  box.style.top =  top + "px" ;
  box.style.borderColor = generateHEX();
  box.style.borderRadius = borderCount(current, _this) + '%'
})

}())