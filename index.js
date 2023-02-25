//Bài 1
document.getElementById('btnQLTS').onclick = function(){
    //BÀI 1
    //INPUT txtDiemChuan, txtDiem3Mon, txtDiemKhuVuc, txtDoiTuong
    var DiemChuan =Number(getID('txtDiemChuan').value)
    var DiemMon1 = Number(getID('txtDiemMon1').value)
    var DiemMon2 = Number(getID('txtDiemMon2').value)
    var DiemMon3 = Number(getID('txtDiemMon3').value)
    var DiemKhuVuc = Number(getID('slKhuVuc').value)
    var DoiTuong = Number(getID('slDoiTuong').value)
    //Output TongDiem, DauRot
    
    dau(DiemMon1, DiemMon2, DiemMon3, DiemKhuVuc, DoiTuong, DiemChuan)
    
}
function dau(DiemMon1, DiemMon2, DiemMon3, DiemKhuVuc, DoiTuong,DiemChuan){
    var TongDiem = DiemMon1 + DiemMon2 + DiemMon3 + DiemKhuVuc+ DoiTuong

    if(DiemChuan>0 && DiemChuan<=34.5){
        if(TongDiem >= DiemChuan && DiemMon1 !=0 && DiemMon2 !=0 && DiemMon3 !=0){
            getID('ketQua1').innerHTML = "Bạn đã đậu. Tổng điểm: "+ TongDiem
        }
        else{
            getID('ketQua1').innerHTML = "Bạn đã rớt. Tổng điểm: "+ TongDiem
        }
    }
    else{
        getID('ketQua1').innerHTML = "Vui lòng nhập lại điểm chuẩn 0->34.5"
    }
}


// Bài 2:
document.getElementById('btnTinhTienDien').onclick = function(){
    //input txtHoten(string), nKW(Number)
    var txtTen = getID('txtB2Hoten').value
    var nKW = Number(getID('NB2kw').value)
    //Output tong(Number)
    var tong = 0

    //Xử lý
    if(nKW ==0){
        alert('Số kw không hợp lệ! Vui lòng nhập lại')
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+0
    }
    else if(nKW>0 && nKW <=50){
        tong = nKW*500
    }
    else if(nKW >50 && nKW <=100){
        tong = 50*500 + (nKW - 50)*650
    }
    else if(nKW >100 && nKW <=200){
        tong = 50*500 + 50*650 + (nKW-100)*850
    }
    else if(nKW >200 && nKW <=350){
        tong = 50*500 + 50*650+ 100*850 + (nKW-200)*1100
    }
    else{
        tong = 50*500 + 50*650+ 100*850 + 150*1100 + (nKW-350)*1300
    }
    var KQ = tong.toLocaleString();
    document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+KQ
    
}

//Bài 3
document.getElementById('btnTinhTienThue').onclick = function(){
    var B3Ten = getID('txtB3Hoten').value
    var B3TongThuNhap = Number(getID('NB3TThuNhapN').value)
    var B3SoNguoi = Number(getID('NB3SoNguoi').value)

    // OUTPUT: KQ(Number)
    var KQ =0
    // min Tổng thu nhập: 4000001
    let TNCT = B3TongThuNhap - 4000000 - B3SoNguoi*1600000

    if(TNCT<=4000000){
        alert('Số tiền thu nhập không hợp lệ')
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(TNCT>4000000&&TNCT<=60000000){
        KQ = (TNCT*0.05).toLocaleString()
        
    }
    else if(TNCT>60000000&&TNCT<=120000000){
        KQ = (60000000*0.05 +(TNCT-60000000)*0.1).toLocaleString()
    }
    else if(TNCT>120000000&&TNCT<=210000000){   
        KQ = (60000000*0.05+60000000*0.1+(TNCT-120000000)*0.15).toLocaleString()
    }
    else if(TNCT>210000000&&TNCT<=384000000){
        KQ = (60000000*0.05+60000000*0.1+90000000*0.15 +(TNCT - 210000000)*0.2).toLocaleString()
    }
    else if(TNCT>384000000&&TNCT<=624000000){
        KQ = (60000000*0.05+60000000*0.1+90000000*0.15 +174000000*0.2+(TNCT-384000000)*0.25).toLocaleString()
    }
    else if(TNCT>624000000&&TNCT<=960000000){
        KQ = (60000000*0.05+60000000*0.1+90000000*0.15 +174000000*0.2+ 240000000*0.25 + (TNCT-624000000)*0.3).toLocaleString()
    }
    else{
        KQ = (60000000*0.05+60000000*0.1+90000000*0.15 +174000000*0.2+ 240000000*0.25 +336000000*0.3 +(TNCT-960000000)*0.35).toLocaleString()
    }
    if(TNCT>0){
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+KQ+' VND'
    }
    else{
        alert('Số tiền thu nhập không hợp lệ')
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+0+' VND'
    }
}



//Bài 4
document.getElementById('btnTinhTienCap').onclick = function(){
    //input LoaiKH(string), MaKH(String), SoKenhCC(Number), SoKN(Numer)
    var LoaiKH = getID('slLoaiKH').value
    var MaKH = getID('txtB4MaKH').value
    var SoKenhCC = Number(getID('nB4SoKenhCC').value)
    var SoKN= Number(getID('nB4SoKetNoi').value)

    // Number sang Dollar
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      // Loại bỏ trường hợp Chọn sai loại khách hàng
    if(LoaiKH==0){
        alert('Hãy chọn loại khách hàng')
        getID('ketQua4').innerHTML = 'Mã khách hàng: '+MaKH+'; Tiền cáp: '+0
    }

    //Khai báo Tong là tiền cáp, TienDollar là Tiền cáp dạng Dollar
    var tong = 0
    var tienDollar =0
    // Nếu Loại khách hàng là Nhà dân
    if(LoaiKH ==1){
        tong = SoKenhCC*7.5 + 4.5 + 20.5
        var tienDollar = USDollar.format(tong)
        getID('ketQua4').innerHTML = 'Mã khách hàng: '+MaKH+'; Tiền cáp: '+tienDollar
    }
    //Nếu là Doanh nhân
    else if(LoaiKH ==2){
        //10 kết nối đầu là 75
        if(SoKN>=0 &&SoKN<=10){
            tong = SoKenhCC*50 + 15 + 75
        }
        //sau 10 kết nối tính thêm 1 kết nối thêm 5$
        else{
            tong = SoKenhCC*50 + 15 + 10*7.5 + (SoKN-10)*5
        }

        var tienDollar = USDollar.format(tong)
        getID('ketQua4').innerHTML = 'Mã khách hàng: '+MaKH+'; Tiền cáp: '+tienDollar
    }
    
}
function getID(ID){
    return document.getElementById(ID)
}
function myFunction() {
    var slLoaiKH = getID('slLoaiKH')
    var Sokn = getID('DivSoketNoi')
    if(slLoaiKH.value ==2){
         Sokn.style.display = 'block'
    }
    else{
        Sokn.style.display = 'none'
   }
  }
//   Hoàn thành