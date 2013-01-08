var winWidth = $(window).width();
var winHeight = $(window).height();

$('canvas').attr('width', winWidth);
$('canvas').attr('height', winHeight);

var bg = new Path();
bg.add(new Point(winWidth, 0));
bg.add(new Point(winWidth, winHeight));
bg.add(new Point(0, winHeight));
bg.closed = true;
bg.fillColor = '#F2ECEB';