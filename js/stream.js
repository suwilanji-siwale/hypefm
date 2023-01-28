$(document).ready(function(){

	"use strict";

    


    
	
	
	
});

	
var player = document.getElementById('radioPlayer');
	
	$('.button-play').click(function() {

		icon = $('.button-play').find('i');

		player.play();
        document.querySelector('.bar1').style.animation = 'animate 0.5s ease-in-out infinite';
        document.querySelector('.bar2').style.animation = 'animate 0.5s ease-in-out infinite';
        document.querySelector('.bar3').style.animation = 'animate 0.5s ease-in-out infinite';
        document.querySelector('.bar4').style.animation = 'animate 0.5s ease-in-out infinite';
		
	
		
	  });

	$('.button-stop').click(function() {
	icon = $('.button-stop').find('i');
	player.src="";

    document.querySelector('.bar1').style.animation = '';
    document.querySelector('.bar2').style.animation = '';
    document.querySelector('.bar3').style.animation = '';
    document.querySelector('.bar4').style.animation = '';


	player.src="https://stream.zeno.fm/dupvt1fgcewvv";
	
	
	});
	

function waveAfterWave() {
	$('.wave').each(function(){
	  height = $(this).height();
	  $(this).css('height', height);
	});
	$('.wave').addClass('no-animation');
  };




  
  
