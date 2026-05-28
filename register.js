const sendBtn =
document.querySelector(".send-btn");

const mobile =
document.getElementById("mobile");

const mobileError =
document.getElementById("mobileError");

/* BUTTON CLICK */
sendBtn.addEventListener("click", function(){

  if(mobile.value.trim() === ""){

    mobile.style.border =
    "2px solid red";

    mobileError.style.display =
    "block";

  }

  else{

    mobile.style.border =
    "2px solid #ccc";

    mobileError.style.display =
    "none";

    window.location.href =
    "verify.html";

  }

});

/* INPUT CLICK OUTSIDE */
mobile.addEventListener("blur", function(){

  if(mobile.value.trim() === ""){

    mobile.style.border =
    "2px solid red";

    mobileError.style.display =
    "block";

  }

  else{

    mobile.style.border =
    "2px solid #ccc";

    mobileError.style.display =
    "none";

  }

});
/* ONLY NUMBERS ALLOW */
mobile.addEventListener("input", function(){

  // REMOVE LETTERS
  mobile.value =
  mobile.value.replace(/[^0-9]/g, "");

});