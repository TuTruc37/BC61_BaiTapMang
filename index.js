var arrSoN = [];
var arrThemSo = [];
function themSoNVaoMang() {
  var inputSoN = document.getElementById("txt-soN").value * 1;
  arrSoN.push(inputSoN);
  console.log(arrSoN);
  document.getElementById("ketQua").innerHTML = arrSoN;
}
document.querySelector(".btn-kq").onclick = themSoNVaoMang;

function tinhTongSoDuong() {
  var ketqua1 = document.getElementById("ketQua1");
  var tong = 0;
  console.log(arrSoN);
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      tong += arrSoN[i];
    }

    ketqua1.innerHTML = tong;
  }
}
document.getElementById("btn-kq1").onclick = tinhTongSoDuong;

document.getElementById("btn-kq2").onclick = function demSoDuong() {
  var ketqua2 = document.getElementById("ketQua2");
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      count++;
    }
  }
  ketqua2.innerHTML = count;
};

function timSoNhoNhat() {
  var ketqua3 = document.getElementById("ketQua3");
  var min = arrSoN[0];
  for (var i = 1; i < arrSoN.length; i++) {
    if (arrSoN[i] < min) {
      min = arrSoN[i];
    }
  }
  ketqua3.innerHTML = min;
}

document.getElementById("btn-kq3").onclick = timSoNhoNhat;

function timSoDuongNhoNhat() {
  var ketqua4 = document.getElementById("ketQua4");
  var arrSoDuong = [];

  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      arrSoDuong.push(arrSoN[i]);
    }
  }
  if (arrSoDuong.length > 0) {
    var min = arrSoDuong[0];
    for (var i = 1; i < arrSoDuong.length; i++) {
      if (arrSoDuong[i] < min) {
        min = arrSoDuong[i];
      }
    }
    ketqua4.innerHTML = min;
  } else {
    ketqua4.innerHTML = "Không có số dương trong mảng";
  }
}
document.getElementById("btn-kq4").onclick = timSoDuongNhoNhat;

function timSoChanCuoiCung() {
  var soChan = -1;
  var ketqua4 = document.getElementById("ketQua5");

  for (var i = arrSoN.length - 1; i >= 0; i--) {
    if (arrSoN[i] % 2 == 0) {
      soChan = arrSoN[i];
      break;
    }
  }
  ketqua4.innerHTML = soChan;
}
document.getElementById("btn-kq5").onclick = timSoChanCuoiCung;

function doiChoHaiGiaTri() {
  var ketQua6 = document.getElementById("ketQua6");
  // vị trí một và vị trí 2 phải là vị trí index
  var viTriMot = document.getElementById("txt-viTri1").value * 1;
  var viTriHai = document.getElementById("txt-viTri2").value * 1;
  //dùng biến temp để đổi chỗ cho nhau khi nhập vị trí index viTri1 và viTri2 ở mảng và vị trí chưa nhập thì đứng yên

  for (var i = 0; i < arrSoN.length; i++) {
    if (i == viTriMot) {
      var temp = arrSoN[i];
      arrSoN[i] = arrSoN[viTriHai];
      arrSoN[viTriHai] = temp;
    }
  }

  ketQua6.innerHTML = arrSoN;
}
document.getElementById("btn-kq6").onclick = doiChoHaiGiaTri;

function xapSepTangDan() {
  // Sắp xếp mảng theo thứ tự tăng dần.
  var ketQua7 = document.getElementById("ketQua7");
  arrSoN.sort(function (a, b) {
    return a - b;
  });
  console.log(arrSoN);
  ketQua7.innerHTML = arrSoN;
}

document.getElementById("btn-kq7").onclick = xapSepTangDan;

function timSoNguyenToDauTien() {
  var ketQua8 = document.getElementById("ketQua8");

  // Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về –1.
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      ketQua8.innerHTML = arrSoN[i];
      break;
    }
  }
}
document.getElementById("btn-kq8").onclick = timSoNguyenToDauTien;

function laSoNguyenTo(arrSoN) {
  if (arrSoN < 2) return false;
  for (var i = 2; i <= Math.sqrt(arrSoN); i++) {
    if (arrSoN % i === 0) {
      return false;
    }
  }
  return true;
}

function timSoNguyenToDauTien() {
  var ketQua8 = document.getElementById("ketQua8");
  laSoNguyenTo(arrSoN);
  var firstPrime = -1;
  for (var i = 0; i < arrSoN.length; i++) {
    if (laSoNguyenTo(arrSoN[i])) {
      firstPrime = arrSoN[i];
      break;
    }
  }

  ketQua8.innerHTML = firstPrime;
}

document.getElementById("btn-kq8").onclick = timSoNguyenToDauTien;

//Đếm số nguyên
function themSo() {
  var themSoInput = document.getElementById("txt-nhapSo").value * 1;
  arrThemSo.push(themSoInput);
  console.log(arrThemSo);
  document.getElementById("ketQua9").innerHTML = arrThemSo;
}
document.getElementById("btn-kq9").onclick = themSo;
function demSoDuong() {
  var ketQua10 = document.getElementById("ketQua10");
  var count = 0;
  for (var i = 0; i < arrThemSo.length; i++) {
    if (Number.isInteger(arrThemSo[i])) {
      count++;
    }
  }
  ketQua10.innerHTML = count;
}
document.getElementById("btn-kq10").onclick = demSoDuong;

function soSanhSoLuongAmDuong() {
  var ketQua11 = document.getElementById("ketQua11");
  var countDuong = 0;
  var countAm = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      countDuong++;
      console.log(countDuong);
    } else if (arrSoN[i] < 0) {
      countAm++;
      console.log(countAm);
    }
  }
  var kq;
  if (countDuong > countAm) {
    kq = "Số dương > số âm";
  } else if (countDuong == countAm) {
    kq = "Số dương = số âm";
  } else {
    kq = "Số dương < số âm";
  }
  ketQua11.innerHTML = kq;
}
document.getElementById("btn-kq11").onclick = soSanhSoLuongAmDuong;
