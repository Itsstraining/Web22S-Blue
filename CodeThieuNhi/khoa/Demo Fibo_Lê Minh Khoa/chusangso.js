var Tien= ("","Nghìn","Triệu","Tỷ","nghìn tỷ","triệu tỷ",);
var chuSo = ("","Không","Một","Hai","Ba","tư","năm","sáu","bảy","tám","chín");

//chữ sang số;
function DocChuSangSo(baso) {
	var tram;
	var chuc;
	var donvi;
	var ketqua="";
	tram=parseInt(baso/100);
	chuc=parseInt((baso%100)/10);
	donvi=baso%10;
	if(tram==0 && chuc == 0 && donvi ==0) return"";
	if(tram!=0) {
		ketqua +=chuSo[tram] +"trăm";
		if((chuc == 0) && (donvi!=0)) ketqua +="Linh";
	}

	if((chuc !=0) && (chuc !=1)) {
		ketqua +=
	}
	

}