

$('#gallery img').click(function(){
	$('#gallery img').removeClass('gigante');
	var $targetImg = $(this);
	$targetImg.addClass('gigante');
	var $container = $('#gallery');
	// initialize
	$container.packery({
	  itemSelector: 'img',
	  gutter: 5,
	  fit: $targetImg,
	  transitionDuration: "1.5s",
	});
})





var container = document.querySelector('#gallery');
var pckry = new Packery( container );

eventie.bind( container, 'click', function( event ) {
  // don't proceed if item was not clicked on
  var target = event.target;
  if ( !classie.has( target, 'item' ) ) {
    return;
  }

  var isGigante = classie.has( target, 'gigante' );
  classie.toggleClass( target, 'gigante' );

  if ( isGigante ) {
    // if shrinking, just layout
    pckry.layout();
  } else {
    // if expanding, fit it
    pckry.fit( target );
  }
});


// 
.gigante {width:500px;}