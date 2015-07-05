// VERSION 1***
// var PartyButton = (function(){
//   var config = {
//     container: $('div.party'),
//     item: $('button.party')
//   };

//   var handler = {
//     init: function() {
//       config.container.on(
//         'click',
//         config.item,
//         speak
//       )
//     }
//   }

//   function speak() {
//     alert("You did it, son!");
//   }

//   return handler;
// }());


// VERSION 2***
// var PartyButton = (function(){
//   var config = {
//     container: $('div.party'),
//     item: $('button.party')
//   };

//   var handler = {
//     init: function() {
//       // debugger
//       // $.extend(this.config, config);
//       // this.config = config;
//       config.container.on(
//         'click',
//         config.item,
//         run(event)
//       )
//     }
//   };

//   function run(event) {
//     event.preventDefault();
//     alert("You did it, son!");
//   };



//   return handler;
// }());


// VERSION 3***
// var partyButton = (function(){
//   var container = $('div.party');
//   var item = $('button.party');

//   var listener = {
//     listen: function() {
//       container.on(
//         'click',
//         item,
//         run
//       );
//     }
//   }

//   function run(event) {
//     console.log(event);
//     event.preventDefault();
//     alert("Awesome job, Billy.");
//   }

//   return listener;
// }());

// VERSION 4***
// var partyButton = {
//   listen: function() {
//     var div = $('div.party');
//     var button = 'button.party';

//     div.on('click', button, function(event) {
//       event.preventDefault();
//       var content = makeThat();
//       View.add(div, content);
//     })

//     function makeThat() {
//       return "<h1>Hi!</h1>"
//     };
//   },
// };

// var View = {
//   add: function(container, thing) {
//     container.append(thing);
//   }
// }


// VERSION 5***
// var partyButton = function() {
//   $('div.party').on('click', 'button.party', function(event) {
//     event.preventDefault();
//     alert('Wow! Wow.');
//   })
// }

// VERSION 6**
// var partyButton = (function(){
//   var div = $('div.party');
//   var button = 'button.party';

//   var handler = {
//     clickListen: function() {
//       div.on('click', button, function(event) {
//         event.preventDefault();
//         alert(cry());
//       });

//       function cry() {
//         return "Waaah!";
//       }
//     },

//     hoverListen: function() {

//     }
//   }

//   return handler;
// }());

// VERSION 7***
var partyButton = (function(){
  var div = $('div.party');
  var button = 'button.party';

  var clickListen = function() {
    div.on('click', button, function(event) {
      event.preventDefault();
      alert(cry());
    });

    function cry() {
      return "Waaah!";
    }
  };

  return {
    clickListen: clickListen
  }
}());





