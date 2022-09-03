var dsnv = new DanhSachNV()
var validation = new Validation()

// Hàm rút gọn
function getELE(id) {
  return document.getElementById(id)
}

// Lưu vào local storage
function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV))
}

// Lấy data ra từ local storage
function getLocalStorage() {
  if (localStorage.getItem("DSNV") != undefined) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"))
  }
  danhSachNV(dsnv.mangNV)
}
getLocalStorage()

//! DanhSachNV
function danhSachNV(mangNV) {
  console.log('mangNV: ', mangNV);
  var content = ''

  mangNV.map(function (nv) {
    content += `
        <tr>
          <td>${nv.taiKhoan}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngayLam}</td>
          <td>${nv.chucVu}</td>
          <td>${nv.tongLuong}</td>
          <td>${nv.loaiNV}</td>
          <td style='display: flex;'>
            <button type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal' onclick='chiTietNVMain("${nv.taiKhoan}")'>Xem</button>
            <button type='button' class='btn btn-danger' id='btn-delete' style='margin-left: 4px;' onclick='xoaNVMain("${nv.taiKhoan}")'>Xóa</button>
          </td>
        </tr>
      `
  })
  getELE('tableDanhSach').innerHTML = content
}


//!  Add NV
function themNVMain() {
  var taiKhoan = getELE('tknv').value
  var hoTen = getELE('name').value
  var email = getELE('email').value
  var matKhau = getELE('password').value
  var ngayLam = getELE('datepicker').value
  var luongCoBan = getELE('luongCB').value
  var chucVu = getELE('chucvu').value
  var gioLam = getELE('gioLam').value

  //! Validation
  // Giả sử tất cả các trường đều được nhập hợp lệ
  var isValid = true

  // 1. Tài khoản: check rỗng, trùng TK và độ dài TK
  isValid &= validation.checkEmpty(taiKhoan, '#tbTKNV', 'Tài khoản không được để trống')
    && validation.checkTK(taiKhoan, '#tbTKNV', 'Tài khoản không được trùng lặp', dsnv.mangNV)
    && validation.checkDoDai(taiKhoan, '#tbTKNV', 'Tài khoản phải là số và từ 4 - 6 chữ số')

  // 2. Name: check rỗng, kiểu dữ liệu chữ
  isValid &= validation.checkEmpty(hoTen, '#tbTen', 'Tên không được để trống')
    && validation.checkName(hoTen, '#tbTen', 'Tên của bạn phải là chữ')

  isValid &= validation.checkEmpty(email, '#tbEmail', 'Email không được để trống')
    && validation.checkEmail(email, '#tbEmail', 'Email phải có định dạng ...@gmail.com')

  isValid &= validation.checkEmpty(matKhau, '#tbMatKhau', 'Mật khẩu không được để trống')
    && validation.checkPassWord(matKhau, '#tbMatKhau', 'Mật khẩu phải có ít nhất 1 chữ số, <br> 1 chữ viết hoa,<br> 1 ký tự đặc biệt,<br> độ dài từ 6 - 10 ký tự')

  isValid &= validation.checkEmpty(ngayLam, '#tbNgay', 'Ngày làm không được để trống')
    && validation.checkDate(ngayLam, '#tbNgay', 'Ngày làm phải đúng định dạng dd/mm/yyyy')

  isValid &= validation.checkEmpty(luongCoBan, '#tbLuongCB', 'Lương không được để trống')
    && validation.checkSalary(luongCoBan, '#tbLuongCB', 'Lương giới hạn từ 1 000 000đ - 20 000 000đ')

  isValid &= validation.checkPosition('#chucvu', '#tbChucVu', 'Chức vụ chưa được chọn')

  isValid &= validation.checkEmpty(gioLam, '#tbGiolam', 'Giờ làm không được để trống')
    && validation.checkWorkTime(gioLam, '#tbGiolam', 'Giờ làm giới hạn từ 80h - 200h')

  // Check t/m tất cả điều kiện
  if (isValid) {
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)
    nv.calcLuong()
    nv.xepLoaiNV()

    dsnv.themNV(nv)
    danhSachNV(dsnv.mangNV)
    setLocalStorage()
  }
}
getELE('btnThemNV').onclick = themNVMain


//! Detail
function chiTietNVMain(tk) {
  console.log('chiTiet', tk);

  var viTri = dsnv.timViTri(tk)
  if (viTri > -1) {
    var nvTim = dsnv.mangNV[viTri]

    getELE('tknv').value = nvTim.taiKhoan
    getELE('tknv').disable = true
    getELE('name').value = nvTim.hoTen
    getELE('email').value = nvTim.email
    getELE('password').value = nvTim.matKhau
    getELE('datepicker').value = nvTim.ngayLam
    getELE('luongCB').value = nvTim.luongCoBan
    getELE('chucvu').value = nvTim.chucVu
    getELE('gioLam').value = nvTim.gioLam
  } else {
    alert('không tìm thấy')
  }
}


//! Edit
function capNhatNVMain(tk) {
  var taiKhoan = getELE('tknv').value
  var hoTen = getELE('name').value
  var email = getELE('email').value
  var matKhau = getELE('password').value
  var ngayLam = getELE('datepicker').value
  var luongCoBan = getELE('luongCB').value
  var chucVu = getELE('chucvu').value
  var gioLam = getELE('gioLam').value

  var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)
  nv.calcLuong()
  nv.xepLoaiNV()

  dsnv.capNhatNV(nv)
  danhSachNV(dsnv.mangNV)
  setLocalStorage()
}

//! Delete
function xoaNVMain(tk) {
  console.log('delete', tk);

  dsnv.xoaNV(tk)
  danhSachNV(dsnv.mangNV)
  setLocalStorage(dsnv.mangNV)
}