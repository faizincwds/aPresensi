$('document').ready(function(){
	//periksa apakah sudah login
	var user = localStorage.getItem("namasiswa");
	var kelas = localStorage.getItem("kelasiswa");
	
	$("#id-nama").html("Nama : "+user);
	$("#id-kelas").html("Kelas : "+kelas);
	
		//tanggal
	var hariIni=tanggal();
	$("#tanggal").html(hariIni)
	
	if(user =='00' || kelas =='00'){
		window.location='index.html';
	}
});



function tanggal(){
	var d = new Date();
	var tanggal = d.getDate();
	var bulan = parseInt(d.getMonth())+1;
	var tahun = d.getFullYear();
	var hariIni = tanggal+' / '+bulan+' / '+tahun;
	
	return(hariIni);
}