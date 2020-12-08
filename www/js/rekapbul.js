var server = "https://stit-tunasbangsa.ac.id/absensionline/";
$('document').ready(function(){
	var kelas = localStorage.getItem('kelasiswa');
	
	$("#id-kelas").html(kelas);
	//jujmlah siswa
	$.getJSON(server+'jmsis.php?kls='+kelas,function(siswa){
		$("#jm-siswa span").remove();
		$.each(siswa,function(index,data){
			$("#jm-siswa").append(
			"<span> Jumlah siswa: "+data.jumlah+"</span>");
		});
	});
	//tanggal bulan
	var hariIni=tanggal();
	$("#tanggal").html(hariIni);
	
	//rekap presensi
	$.getJSON(server+'rekap_bulanan.php?kls='+kelas,function(siswa){
		$("#rekap div").remove();
		$.each(siswa,function(index,data){
			$("#rekap").append(
			"<div>"+
			"<table class='rekapbul'>"+
			"<tr>"+
			"<td>"+	data.nama+"<br> <b>("+data.nis+")</b></td>"+
		
		"<td style='width:30px; border-left:1px solid #ddd; padding-left:5px;'>H:<br/>"+data.h+"</td>"+
			"<td style='width:30px;'>S:<br/>"+data.s+"</td>"+
			"<td style='width:30px;'>I:<br/>"+data.i+"</td>"+
			"<td style='width:30px;'>A:<br/>"+data.a+"</td>"+
			"</tr>"+			
			"</table>"+
			"</div>");
		});
	});
	
});

function tanggal(){
	var d = new Date();
	var bulan = parseInt(d.getMonth())+1;
	var tahun = d.getFullYear();
	var hariIni='Periode : <b> Bulan '+bulan+' - '+tahun+'</b>';
	
	return(hariIni);
}
