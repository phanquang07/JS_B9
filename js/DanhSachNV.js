function DanhSachNV() {
  this.mangNV = []

  //! Add NV
  this.themNV = (nv) =>{
    this.mangNV.push(nv)
  }

  //! Find place
  this.timViTri = (tk) => {
    // Giả sử vị trí chưa đc tìm thấy
    var viTri = -1
    // Duyệt mảng và so sánh taiKhoan để tìm nv trong mảng
    this.mangNV.map((nv, index) => {
      if (nv.taiKhoan === tk) {
        viTri = index
      }
    })
    return viTri
  }

  //! Edit NV
  this.capNhatNV = (nv) => {
    var viTri = this.timViTri(nv.taiKhoan)
    if (viTri > -1) {
      dsnv.mangNV[viTri] = nv
    }
  }

  //! Delete NV
  this.xoaNV = (tk) => {
    var viTri = this.timViTri(tk)
    if (viTri > -1) {
      this.mangNV.splice(viTri, 1)
    }
  }
}