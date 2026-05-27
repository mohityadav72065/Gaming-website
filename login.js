const form = document.getElementById("loginForm");

let country = document.getElementById("country");
let mobile = document.getElementById("mobile");
let pin = document.getElementById("pin");

/* FORM SUBMIT */
form.addEventListener("submit", function(e){

  e.preventDefault();

  let valid = true;

  // RESET ERRORS
  document.querySelectorAll(".error").forEach(el=>{
    el.style.display = "none";
    el.innerText = "";
  });

  document.querySelectorAll("input, select").forEach(el=>{
    el.classList.remove("input-error");
  });

  // COUNTRY
  if(country.value === ""){

    document.getElementById("countryError").innerText =
    "Please fill this field to continue";

    document.getElementById("countryError").style.display =
    "block";

    country.classList.add("input-error");

    valid = false;
  }

  // MOBILE
  if(mobile.value.trim() === ""){

    document.getElementById("mobileError").innerText =
    "Please fill this field to continue";

    document.getElementById("mobileError").style.display =
    "block";

    mobile.classList.add("input-error");

    valid = false;
  }

  // PIN
  if(pin.value.trim() === ""){

    document.getElementById("pinError").innerText =
    "Please fill this field to continue";

    document.getElementById("pinError").style.display =
    "block";

    pin.classList.add("input-error");

    valid = false;
  }

  // SUCCESS
  if(valid){
    alert("Login Success");
  }

});


/* COUNTRY BLUR */
country.addEventListener("blur", function(){

  if(country.value === ""){

    document.getElementById("countryError").innerText =
    "Please fill this field to continue";

    document.getElementById("countryError").style.display =
    "block";

    country.classList.add("input-error");

  }else{

    document.getElementById("countryError").style.display =
    "none";

    country.classList.remove("input-error");

  }

});


/* MOBILE BLUR */
mobile.addEventListener("blur", function(){

  if(mobile.value.trim() === ""){

    document.getElementById("mobileError").innerText =
    "Please fill this field to continue";

    document.getElementById("mobileError").style.display =
    "block";

    mobile.classList.add("input-error");

  }else{

    document.getElementById("mobileError").style.display =
    "none";

    mobile.classList.remove("input-error");

  }

});


/* PIN BLUR */
pin.addEventListener("blur", function(){

  if(pin.value.trim() === ""){

    document.getElementById("pinError").innerText =
    "Please fill this field to continue";

    document.getElementById("pinError").style.display =
    "block";

    pin.classList.add("input-error");

  }else{

    document.getElementById("pinError").style.display =
    "none";

    pin.classList.remove("input-error");

  }

});