$(document).ready(function(){
	var c = 0;
	var texto = $("textarea").val();

	autosize($('textarea')); /*plugin de jQuery para el resize de textarea*/
	
	$("form").on('submit' , function(event){
		event.preventDefault();

		$('textarea').css("height", "12vh"); /*vuelve el tamaño normal al enviar el twitt*/

		var texto = $("textarea").val();
		texto = texto.replace(/\n/g, "<br>"); /* Agrega salto de linea al presionar enter*/
		
		if(texto.length < 1){
			$(".boton").after('<p class="adver">Debes escribir algo antes.</p>');
			$(".adver").fadeOut(2800);
		}
		else{
		
			$("#areaTwits").append(' <div class="row twits">' 
			+ '<div class="twitt">'
			+'<h3>@nicole61192</h3>'

			+'<p class="textoTwitt">'
			+ texto +'</p>'
			+'<button class="likes">'
			+'<span class="likeable">❤ '+ c +'</span>'
			+'</button>'
			+'<button class="eliminar">'
			+'<span class="equis glyphicon glyphicon-remove"></span>'
			+'</button>'
			+'</div>'
			+'</div>'
			);
			$("textarea").val("").focus();
		}
	})

	$("#areaTwits").on('click' , '.eliminar' , function(){
		$(this).parent().fadeOut(300);
		$("textarea").val("").focus();
	})

	$("#areaTwits").on('click' , '.likeable' , function(){
		$(this).css("color", "#E12B31").text('❤ ' + (c+1))
		$("textarea").val("").focus();
	})


})
