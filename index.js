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
    var txtTen = getID('txtB2Hoten').value
    var nKW = Number(getID('NB2kw').value)
    var tong = 0
    if(nKW ==0){
        alert('Số kw không hợp lệ! Vui lòng nhập lại')
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+0
    }
    else if(nKW>0 && nKW <=50){
        tong = nKW*500
        var a = tong.toLocaleString();
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+a
    }
    else if(nKW >50 && nKW <=100){
        tong = 50*500 + (nKW - 50)*650
        var a = tong.toLocaleString();
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+a
    }
    else if(nKW >100 && nKW <=200){
        tong = 50*500 + 50*650 + (nKW-100)*850
        var a = tong.toLocaleString();
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+a
    }
    else if(nKW >200 && nKW <=350){
        tong = 50*500 + 50*650+ 100*850 + (nKW-200)*1100
        var a = tong.toLocaleString();
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+a
    }
    else{
        tong = 50*500 + 50*650+ 100*850 + 150*1100 + (nKW-350)*1300
        var a = tong.toLocaleString();
        document.getElementById('ketQua2').innerHTML = 'Họ tên:' +txtTen+' ; Tiền điện: '+a
    }
    
}

//Bài 3
document.getElementById('btnTinhTienThue').onclick = function(){
    var B3Ten = getID('txtB3Hoten').value
    var B3TongThuNhap = Number(getID('NB3TThuNhapN').value)
    var B3SoNguoi = Number(getID('NB3SoNguoi').value)
    var CN =0
    var a = 0
    // min Tổng thu nhập: 4000001
    if(B3TongThuNhap<=4000000){
        alert('Số tiền thu nhập không hợp lệ')
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>4000000&&B3TongThuNhap<=60000000){
        debugger
        a = Number((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.05)
        CN = a.toLocaleString()
        if(a>0){
            getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
        }
        else{
            alert('Số tiền thu nhập không hợp lệ')
            getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+0+' VND'
        }
    }
    else if(B3TongThuNhap>60000000&&B3TongThuNhap<=120000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.1).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>120000000&&B3TongThuNhap<=210000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.15).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>210000000&&B3TongThuNhap<=384000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.2).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>384000000&&B3TongThuNhap<=624000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.25).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>624000000&&B3TongThuNhap<=960000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.3).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
    else if(B3TongThuNhap>960000000){
        CN = ((B3TongThuNhap - 4000000 - B3SoNguoi*1600000)*0.35).toLocaleString()
        getID('ketQua3').innerHTML = 'Họ tên: '+B3Ten+'; Tiền thuế thu nhập cá nhân: '+CN+' VND'
    }
}


//Bài 4
document.getElementById('btnTinhTienCap').onclick = function(){
    var LoaiKH = getID('slLoaiKH').value
    var MaKH = getID('txtB4MaKH').value
    var SoKenhCC = Number(getID('nB4SoKenhCC').value)
    debugger    
    if(LoaiKH==0){
        alert('Hãy chọn loại khách hàng')
        getID('ketQua4').innerHTML = 'Mã khách hàng: '+MaKH+'; Tiền cáp: '+0
    }
    var tong = 0
    if(LoaiKH ==1){
        tong = SoKenhCC*7.5 + 4.5 + 20.5
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        var t = USDollar.format(tong)
          
        getID('ketQua4').innerHTML = 'Mã khách hàng: '+MaKH+'; Tiền cáp: '+t
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