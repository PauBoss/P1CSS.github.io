/**
 * He creado una variable para obtener las palabras del texto,
 * metiéndolas en un span.
 **/
let palabra = $( 'p' )
, texto = palabra.text( )
.trim( )
, palabras = texto.split( ' ' )
, spans = palabras.map( p => `<span>${p}</span> ` );

// Aquí meto  los <span> dentro del la <p>
palabra.html( spans );

/**
 * Y por último con esta función, al hacer click sobre cada palabra
 * convertida en span, se volverá de color rojo.
 **/
palabra.on( 'click', 'span', function ( ) {
	$( this )
	.css( 'color', 'red' );
} );
