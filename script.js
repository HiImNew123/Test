function calculate() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("result").innerHTML = "Roots: x1 = " + x1 + ", x2 = " + x2;
  } else if (discriminant === 0) {
    var x = -b / (2 * a);
    document.getElementById("result").innerHTML = "Root: x = " + x;
  } else {
    document.getElementById("result").innerHTML = "No real roots";
  }
}
