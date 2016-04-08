$(document).ready(function() {
	$("#click").click(function(event) {
		var JSONP = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?"
		$("#imagenes").empty();
		$.getJSON( JSONP, function( data ) {
			$.each( data.items, function( i, item ) {
			    $( "<img>" ).attr( "src", item.media.m ).appendTo( "#imagenes" );
			  });
		});	
	}); 
	$("#click2").click(function(event) {
		var busqueda = $("#busqueda").val();
		var JSONP2 = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + busqueda + "&tagmode=any&format=json&jsoncallback=?"
		$("#imagenes").empty();
		$.getJSON( JSONP2, function( data ) {
			$.each( data.items, function( i, item ) {
			    $( "<img>" ).attr( "src", item.media.m ).appendTo( "#imagenes" );
			  });
		});
	});	
		
});

