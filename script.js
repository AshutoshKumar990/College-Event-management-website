var form = document.getElementById("regForm");
var msg = document.getElementById("message");

form.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("studentName").value;
  var email = document.getElementById("studentEmail").value;
  var phone = document.getElementById("studentPhone").value;
  var eventName = document.getElementById("eventChoice").value;

  if (name == "" || email == "" || phone.length != 10 || eventName == "") {
    msg.style.color = "red";
    msg.innerText = "Please fill all details and enter 10-digit mobile number!";
  } else {
    msg.style.color = "green";
    msg.innerText = "Thank you " + name + "! Registered for " + eventName + ".";
    form.reset();
  }
};