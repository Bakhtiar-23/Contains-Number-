document.addEventListener("DOMContentLoaded", function () {
    var containsNumber = function (numbers, aNumber) {
      return numbers.includes(aNumber);
    };
  
    window.checkArray = function () {
      var numberToSearch = document.getElementById("numberInput").value;
      var numbersArray = [6, 4, 2, 5, 9, 7, 5, 7, 2];
      var resultDiv = document.getElementById("result");
  
      if (containsNumber(numbersArray, parseInt(numberToSearch))) {
        resultDiv.textContent = "Array contains the number " + numberToSearch;
        resultDiv.style.color = "green";
      } else {
        resultDiv.textContent = "Array doesn't contain the number " + numberToSearch;
        resultDiv.style.color = "red";
      }
    };
  });
  