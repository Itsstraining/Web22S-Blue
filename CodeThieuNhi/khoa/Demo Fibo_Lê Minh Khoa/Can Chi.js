let currentYear = 2022;
let can = ['Nhâm' , 'Quý' , 'Giáp' , 'Ất' , 'Bích' , 'Đinh' , 'Mậu' , 'Kỷ', 'Canh' , 'Tân'];
let chi = ['Dần' , 'Mẹo' , 'Thìn' , 'Tỵ' , 'Ngọ' , 'Mùi' , 'Thân' , 'Dậu', 'Tuất', 'Hợi' ,'Tí' ,'Sửu'];
function tinhcanChi ( year) {
	let i = year - currentYear;
	if ( i < 0 ) {
		console.log(can[10 -(-i % 10)]);
		console.log(chi[12 -(-i % 12)]);
	}
	console.log (can[i %10 ]);
	console.log (chi[i %10 ]);
}
tinhcanChi (2027);