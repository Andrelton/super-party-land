var MyApp = {}

MyApp.jump = function() {

}

$('div').on('click', function(event) {
  event.preventDefaul();
  MyApp.jump();
}
