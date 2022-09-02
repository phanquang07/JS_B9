function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam, loaiNV) {
  this.taiKhoan = taiKhoan
  this.hoTen = hoTen
  this.email = email
  this.matKhau = matKhau
  this.ngayLam = ngayLam
  this.luongCoBan = luongCoBan
  this.chucVu = chucVu
  this.gioLam = gioLam
  this.tongLuong = 0
  this.loaiNV = loaiNV
  this.calcLuong = function () {
    if (chucVu === 'Sếp') {
      this.tongLuong = this.luongCoBan * 3
    } else if (chucVu === 'Trưởng phòng') {
      this.tongLuong = this.luongCoBan * 2
    } else if (chucVu === 'Nhân viên') {
      this.tongLuong = this.luongCoBan
    }
  }
  this.xepLoaiNV = function () {
    if (gioLam >= 192) {
      this.loaiNV = 'Xuất sắc'
    } else if (gioLam >= 176) {
      this.loaiNV = 'Giỏi'
    } else if (gioLam >= 160) {
      this.loaiNV = 'Khá'
    } else if (gioLam < 160) {
      this.loaiNV = 'Trung bình'
    }
  }
}
