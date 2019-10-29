$(document).ready(function() {
  $("form").submit(function(event) {
    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    var outputArray = [];
    console.log(countTo);
    console.log(countBy);

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Please enter a number.")
    } else if (countTo <= 0 || countBy <= 0) {
      alert("Please enter a number greater than 0.")
    } else if (countBy > countTo) {
      alert("The count by number must be less than the count to number.")
    } else {
      for (var index = countBy; index <= countTo; index += countBy) {
        outputArray.push(" " + index);
      }
    };

    console.log(outputArray);
    $("p#output").text(outputArray);
    event.preventDefault();
  });
});

/* Another option for the first If statement:
if (countTo.toString() === "NaN" || countBy.toString() === "NaN") */
