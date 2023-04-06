function submit(){
  var name = document.forms["contactUs"]["name"].value
  var email = document.forms["contactUs"]["email"].value
  document.getElementById('notification').play();
  alert("Thank you for contacting us " + TOS + ". We will email you at " + email " when we are available.")
}