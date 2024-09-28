
function calculateTip() {
    var sum = document.getElementById("Sum").value;
    var tips = document.getElementById("tips").value;
    var total = sum + (sum * tips);
    document.getElementById("tip").innerHTML = total;
  }
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };
  