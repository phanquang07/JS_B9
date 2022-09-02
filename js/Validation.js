
function Validation() {
  //! Check Empty
  this.checkEmpty = (inputValue, spanID, message) => {
    if (inputValue.trim() !== '') {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check trùng tài khoản
  this.checkTK = (inputValue, spanID, message, mangNV) => {
    // Giả sử tài khoản nv chưa tồn tại
    var isExist = false

    console.log(mangNV);

    // Duyệt mảng, xóa khoảng trắng
    isExist = mangNV.some((nv) => {
      return nv.taiKhoan === inputValue.replaceAll(" ", "")
    })

    // Ktra điều kiện
    if (isExist) {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    } else {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    }
  }

  //! Check kiểu dữ liệu và độ dài TK
  this.checkDoDai = (inputValue, spanID, message) => {
    var pattern = /^[0-9]{4,6}$/
    if (inputValue.match(pattern)) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check name
  this.checkName = (inputValue, spanID, message) => {
    var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
    if (inputValue.match(pattern)) {
      // hợp lệ
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
      // không hợp lệ
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check email
  this.checkEmail = (inputValue, spanID, message) => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (inputValue.match(pattern)) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check password
  this.checkPassWord = (inputValue, spanID, message) => {
    var pattern = /^(?=.*\d)(?=.*[0-9])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/
    if (inputValue.match(pattern)) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check date
  this.checkDate = (inputValue, spanID, message) => {
    var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
    if (inputValue.match(pattern)) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check salary
  this.checkSalary = (inputValue, spanID, message) => {
    var pattern = /^[0-9]+$/
    if (inputValue.match(pattern) && inputValue >= 1000000 && inputValue <= 20000000) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check vị trí làm việc
  this.checkPosition = (selectID, spanID, message) => {
    var indexPosition = document.querySelector(selectID).selectedIndex
    if (indexPosition != 0) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }

  //! Check working time
  this.checkWorkTime = (inputValue, spanID, message) => {
    if (inputValue >= 80 && inputValue <= 200) {
      document.querySelector(spanID).innerHTML = ''
      document.querySelector(spanID).style.display = 'none'
      return true
    } else {
      document.querySelector(spanID).innerHTML = message
      document.querySelector(spanID).style.display = 'block'
      return false
    }
  }
}