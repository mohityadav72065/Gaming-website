const verifyBtn =
document.querySelector(".verify-btn");

const code =
document.getElementById("code");

verifyBtn.addEventListener("click", function(){

  // EMPTY CHECK
  if(code.value.trim() === ""){

    document.getElementById("codeError").innerText =
    "Please fill this field to continue";

    document.getElementById("codeError").style.display =
    "block";

    code.style.border =
    "2px solid red";

  }

  // SUCCESS
  else{

    alert("Code Verified");

  }

});