//jquery
$(function(){
	$('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
	$('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1500);
	$('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1000);
	$('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1700);
	$('.cuenta-regresiva').countdown('2019/10/22 09:00:00',function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));


	});
	$('.invitado-info').colorbox({inline:true, width:"50%", height:"95%"});
});

//javascript normal
(function(){

	var map = L.map('mapa').setView([-25.49854795807889, -54.66078042984009],16.25);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.49854795807889, -54.66078042984009]).addTo(map)
    .bindPopup('<h2>UPE CONFEST 19.</h2><marquee><br> La mejor Conferencia de Desarrollo WEB.</marquee>')
    .openPopup();

})();