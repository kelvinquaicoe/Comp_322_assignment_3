function runCalculator() {
  const validResults = [];

  document.write("<style>");
  document.write("body { font-family: Arial, sans-serif; background: #f4f7fb; color: #1d2733; margin: 24px; } ");
  document.write("table { border-collapse: collapse; width: 80%; margin: 24px auto; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.08); } ");
  document.write("th, td { border: 1px solid #d7deea; padding: 12px 14px; text-align: center; } ");
  document.write("th { background: #2d6cdf; color: white; } ");
  document.write("tr:nth-child(even) td { background: #f9fbff; } ");
  document.write(".error { color: #b42318; font-weight: bold; } ");
  document.write("</style>");

  document.write("<h2 style='text-align:center;'>Calculator Results</h2>");
  document.write("<table>");
  document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

  while (true) {
    const xInput = prompt("Enter the first number (x):", "");
    if (xInput === null) {
      break;
    }

    const operator = prompt("Enter the operator (+, -, *, /, %):", "+");
    if (operator === null) {
      break;
    }

    const yInput = prompt("Enter the second number (y):", "");
    if (yInput === null) {
      break;
    }

    const x = Number(xInput);
    const y = Number(yInput);
    let result;

    if (isNaN(x) || isNaN(y) || !["+", "-", "*", "/", "%"].includes(operator)) {
      result = "Error";
      document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td class='error'>" + result + "</td></tr>");
      continue;
    }

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = y === 0 ? "Error" : x / y;
        break;
      case "%":
        result = y === 0 ? "Error" : x % y;
        break;
      default:
        result = "Error";
    }

    if (result === "Error") {
      document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td class='error'>" + result + "</td></tr>");
      continue;
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    validResults.push(Number(result));
  }

  document.write("</table>");

  document.write("<h2 style='text-align:center;'>Summary</h2>");
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

  if (validResults.length === 0) {
    document.write("<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>0</td></tr>");
  } else {
    const min = Math.min(...validResults);
    const max = Math.max(...validResults);
    const total = validResults.reduce((sum, value) => sum + value, 0);
    const avg = total / validResults.length;

    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
  }

  document.write("</table>");
}

runCalculator();
