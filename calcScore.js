// Suponha um jogo onde um morteiro deve tentar acertar um alvo. Quanto mais próximo o projétil atingir o alvo, mais pontos vale o disparo, sendo o valor dos pontos determinados pela fórmula abaixo:
// pontos = 10 - distância_do_centro_em_metros;

// Caso o projétil tenha um erro maior que 10 metros, não receberá nenhum ponto.
// Implemente uma função que retorne quantos pontos obterá um disparo. A função receberá as coordenadas do alvo na superfície em relação ao morteiro "targetX,targetY"(valores em metros) e o vetor da velocidade inicial do disparo "vX,vY,vZ"(valores em m/s).

// Considerar:
// - A superfície é plana;
// - A gravidade a ser utilizada deve ser { x: 0 , y: 0 ,z: -9.8 } (valores em m/s²);
// - Não existe resistência do ar neste jogo;


functioncalculeScore( targetX, targetY, vX, vY, vZ ) {
  const G = 9.8; // gravitational acceleration
  
  const points = 10 - distância_do_centro_em_metros
  vX+vY



 }

 functioncalculeScore( 15, 80, 50, 45, 280 )
 
 var pro = {
	vX, //start pos x
	vZ, //start pos y
	targetX, //radius
	targetY, //init velocity
	vY //angle
	};
	
	var canvas = document.getElementById('surface');
	var ctx = canvas.getContext('2d');
	
	var frameCount = 0;
	var v0x = pro.v * Math.cos(pro.theta * Math.PI/180);
	var v0y = pro.v * Math.sin(pro.theta * Math.PI/180);
	var startX = pro.vX;
	var startY = pro.y;
	var g = 9.8;
	
	setInterval(function()
	{
		//smooth clear
		ctx.save();
			ctx.fillStyle = "rgba(0, 0, 0, .2)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();
		
		if(pro.y &lt; canvas.height - pro.r)
			pro.y = startY - ( v0y * frameCount - (1/2 * g * Math.pow(frameCount,2)) );
		if( pro.x &gt; canvas.width - pro.r)
			pro.x = startX + v0x * frameCount;
			
		ctx.save();
			ctx.beginPath();
			ctx.fillStyle = "rgba(0, 200, 0, 0.6)";
			ctx.arc(pro.x,pro.y,pro.r,0,Math.PI*2,true);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
		ctx.restore();
		frameCount+=.1;
	}, 1000 / 77);