function valeur() {
  var age = document.getElementById("age").value;
  var regexNumber = /^[0-9]+$/;

  if (age <= 0 || isNaN(age)) {
    alert("Veuillez renseigner un age correct")
  } else {
    if (age >= 18) {
      alert("Vous êtes majeur.");
    } else {
      alert("Vous êtes mineur.");
    }
  }
}
