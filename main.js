function getEle(id) {
  return document.getElementById(id);
}
// bai 1
var n = 0;
var i = 1;
while (n <= 10000) {
  n += i;
  i++;
}
getEle('bai1').innerHTML = 'Số nguyên dương nhỏ nhất: ' + --i;
// bai 2
function tinhTong(e) {
  e.preventDefault();
  var bai2 = getEle('bai2');
  var x = getEle('x').value;
  var n = getEle('n').value;
  if (x === '') {
    bai2.innerHTML = 'Vui lòng nhập x';
  } else if (n === '') {
    bai2.innerHTML = 'Vui lòng nhập n';
  } else if (n <= 0) {
    bai2.innerHTML = 'Vui lòng nhập n lớn hơn 0';
  } else {
    var result = 0;
    for (var i = 1; i <= n; i++) {
      result += Math.pow(x, n);
    }
    bai2.innerHTML = `Kết quả của phép toán là: ${result}`;
  }
}

// bai 3
var num = 6;
