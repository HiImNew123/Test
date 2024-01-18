function calculate() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var discriminant = b ** 2 - 4 * a * c;
  var resultElement = document.getElementById("result");

  if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    resultElement.innerHTML = "Roots: x1 = " + x1 + ", x2 = " + x2 + "<br>";
    resultElement.innerHTML += "Solving steps:<br>";
    resultElement.innerHTML += "Step 1: Calculate the discriminant (b^2 - 4ac) = " + discriminant + "<br>";
    resultElement.innerHTML += "Step 2: Use the quadratic formula: x = (-b ± √discriminant) / (2a)<br>";
    resultElement.innerHTML += "Step 3: Substitute values into the formula to find x1 and x2<br>";
  } else if (discriminant === 0) {
    var x = -b / (2 * a);

    resultElement.innerHTML = "Root: x = " + x + "<br>";
    resultElement.innerHTML += "Solving steps:<br>";
    resultElement.innerHTML += "Step 1: Calculate the discriminant (b^2 - 4ac) = " + discriminant + "<br>";
    resultElement.innerHTML += "Step 2: Use the quadratic formula: x = -b / (2a)<br>";
    resultElement.innerHTML += "Step 3: Substitute values into the formula to find x<br>";
  } else {
    resultElement.innerHTML = "No real roots<br>";
    resultElement.innerHTML += "Solving steps:<br>";
    resultElement.innerHTML += "Step 1: Calculate the discriminant (b^2 - 4ac) = " + discriminant + "<br>";
    resultElement.innerHTML += "Step 2: Since the discriminant is negative, there are no real roots<br>";
  }
}
