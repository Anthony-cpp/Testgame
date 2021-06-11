	
	var p_x = 10 ,p_y = 70;
	var i,score = 0,c,flag = 1,v = 0.5,t;
	var a,b,x=180;

	var ex = new Array(5);
	var ey = new Array(5);

	var vel = 0;

	ex = [200, 220, 240, 260, 280];
	ey = [g_r(0,100), g_r(20,60), g_r(70,130), g_r(70,140), 130];

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = 'green';
	ctx.fillRect(p_x, p_y, 30, 10);


function draw(){

	ctx.clearRect(0, 0, 1000, 1000);


	ctx.fillRect(p_x, p_y, 30, 10);
	ctx.fillStyle = "rgb(0,20,200)";


	ctx.fillRect(ex[0], ey[0], 30, 10);
	ctx.fillRect(ex[1], ey[1], 30, 10);
	ctx.fillRect(ex[2], ey[2], 30, 10);
	ctx.fillRect(ex[3], ey[3], 30, 10);
//	ctx.fillRect(ex[4], ey[4], 30, 10);
	if( flag == 2 ) ctx.fillRect(x,0,100,400);
	if( flag == 4 ) ctx.fillRect(x,0,100,400);

	ctx.fillStyle = "rgb(50,200,10)";

}


addEventListener( "keydown", keydownfunc );


function g_r( min, max ) {

    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}


function ce( c, d ){

	var e,f,flag_s = 0;

	e = c;
	f = d;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c + 30;
	f = d;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c;
	f = d + 10;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	e = c + 30;
	f = d + 10;
	if(e >= p_x && p_x + 30 >= e && f >= p_y && f <= p_y + 10) flag_s = 1;

	if( flag_s == 1 ) flag = 0;
	
}


function keydownfunc( event ) {


 if( flag != 0){
	var key_code = event.keyCode;
 		
	if( key_code === 38 && p_y >= 10 ){

	vel = -1.5;

	}
	if( key_code === 40 && p_y <= 130){

	p_y += 4;

	}

	draw();
 }

}

function enemy(){


    if( flag != 0 ){

	for(i = 0;i < 5;i++){
	
	      if(i % 5 == 0){
		ex[0] -= 1 + v;
		}

	else if(i % 5 == 1){
	ex[1] -= 0.5 + v;
	}

	else if(i % 5 == 2){
		ex[2] -= 1.1 + v;
	}

	else if(i % 5 == 3)   ex[3] -= g_r(1,2) + v;

	//else if(i % 5 == 4)   ex[4] -= 8 + v;

	}
	
	vel += 0.05;
	p_y += vel;

	if( p_y > 130){

	p_y = 0;
	score += 20;

	}

	else if ( p_y < 0){

	p_y = 130;
	score += 20;

	}


	draw();

	document.getElementById("sc").textContent = score + " " + "Level" + flag;

	}
}


function over(){

	if( score > 200 && flag == 1){

	flag = 2;	
	ey[0] = g_r( 0, 134 );
	ey[1] = g_r( 70, 80 );
	ey[2] = g_r( 0, 90 );
	ey[3] = g_r( 90, 140 );
	v = 0;
	ex[0] = 200;
	ex[1] = 200;
	ex[2] = 195;
	ex[3] = 195;

	}

	else if( score > 500 && flag == 2){

	flag = 3;
	ey[0] = g_r( 0, 134 );
	ey[1] = g_r( 10, 150 )
	ey[2] = g_r( 0, 90 );
	ey[3] = g_r( 90, 140 );
	v = 1.5;
	ex[0] = 190;
	ex[1] = 180;
	ex[2] = 200;
	ex[3] = 150;

	}

	else if( score > 900 && flag == 3){

	flag = 4;
	ey[0] = g_r( 30, 134 );
	ey[1] = g_r( 0, 120 );
	ey[2] = g_r( 70, 100 );
	ey[3] = g_r( 90, 140 );
	ex[0] = 150;
	ex[1] = 150;
	ex[2] = 150;
	ex[3] = 150;
	v = 1.5;
	x = 80;
	}

	else if( score > 1100 && flag == 4 ){
	flag = 5;
	p_x = 10;
	p_y = 70;
	ey[0] = g_r( 0, 140 );
	ey[1] = g_r( 50, 120 );
	ey[2] = g_r( 70, 100 );
	ey[3] = g_r( 90, 140 );
	ex[0] = 150;
	ex[1] = 150;
	ex[2] = 150;
	ex[3] = 150;
	v = 1;
	
	}


	else if(flag == 0){

		document.getElementById("sc").textContent = "Finish!!" + score;
		ctx.clearRect(0, 0, 1000, 1000);
		ctx.fillStyle = "rgb(100,100,100)";
		ctx.fillRect(0,0,1000,1000);
/*		ctx.fillStyle = "rgb(256,0,0)";
		ctx.font =  "30pt 'AR明朝体U'";
		ctx.fillText('Game Over !!',20 ,80);*/
	}
}

function check(){

	

	var v_s;
	
	if(flag == 2){
	x -= 0.05;
	if(x < 40) x = 150;
	}

	if(flag == 4){
	x += 0.05;
	if(x > 150) x = 80;
	}

	for(i = 0; i < 4; i++) {

	if(flag == 5){
	
	ex[0] = 40;
	ex[1] = 40;
	ex[2] = 150;
	ex[3] = 150;
	ey[0] = 40;
	ey[1] = 90;
	ey[2] = 0;
	ey[3] = 0;


	}


	if(ex[i] < 0){

	ex[i] = 200;
	score += 10;


	switch(flag){

	case 1:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 2:
	v = 0;

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 70, 80 );
	ex[1] = 195;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 190;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 190;
	}

	break;

	case 3:

	if(i == 0) {
	ey[0] = g_r( 0, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 10, 150 );
	ex[1] = 180;
	}

	else if(i == 2){
	ey[2] = g_r( 0, 90 );
	ex[2] = 200;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 150;
	}

	break;

	case 4:
	if(i == 0) {
	ey[0] = g_r( 30, 134 );
	ex[0] = 190;
	}

	else if(i == 1){
	ey[1] = g_r( 0, 120 );
	ex[1] = 170;
	}

	else if(i == 2){
	ey[2] = g_r( 70, 100 );
	ex[2] = 160;
	}

	else{
	ey[3] = g_r( 90, 140 );
	ex[3] = 180;
	}

	break;

	}
	

	} 

	}

	ce(ex[0],ey[0]);
	ce(ex[1],ey[1]);
	ce(ex[2],ey[2]);
	ce(ex[3],ey[3]);

}
	
function count_5(){
	 if(flag == 5) score += 10; 
	}

function restart(){
	p_x = 10;
	p_y = 70;
	ex[0] = 200;
	ex[1] = 220;
	ex[2] = 240;
	ex[3] = 260;
	ey[0] = g_r(0,100);
	ey[1] = g_r(20,60);
	ey[2] = g_r(70,130);
	ey[3] = g_r(70,140);
	vel = 0;
	score = 0;
	flag = 1;

}

setInterval(count_5,1000);
setInterval(enemy, 20);
setInterval(over,1);
setInterval(check,1);

