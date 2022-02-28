function addValue() {
  var enterEmail = document.querySelector(".email");
  var enterPassword = document.querySelector(".password");
//   var clickhere = document.querySelector(".clickhere")
// clickhere.style.display = "none"
  var value = enterEmail.value;
  var value = enterPassword.value;

  createTask(value);
  enterEmail.value = "";
  enterPassword.value = "";
}

var email = document.querySelector(".email");

var password = document.querySelector(".password");

function createTask(value) {
    // if(email.value.length === 0){
    //     alert("Please Provide Email Id")
    //     return 
    // }
       if(!email.value){
        alert("Please Provide Email Id");
        return 
    }
    if(!password.value){
      alert("Please Enter Password");
      return 
  }
    if(password.value.length <5){
        alert("Password must be at least 5 characters")
        return 
    }
  var tasksResult = document.querySelector(".tasksResult");

  var tasksFunctions = document.createElement("div");
  tasksFunctions.setAttribute("class", "tasksFunctions");

  var valueOfTask = document.createElement("div");
  valueOfTask.setAttribute("class", "valueOfTask");

  var h1 = document.createElement("h1");
//   h1.innerHTML =`Email ID = ${email.value} ` ;
  h1.innerHTML ="Email ID = " + email.value;

  var h2 = document.createElement("h2");
  h2.innerHTML ="Your Password = " + password.value;

  var button = document.createElement("button");
  button.innerText = "Delete";

  button.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
  valueOfTask.append(h1);
  valueOfTask.append(h2);
  valueOfTask.append(button);
  tasksFunctions.append(valueOfTask);
  tasksResult.append(tasksFunctions);
}

function newAccount(){

    alert("Please Try Again")
}
function imgTaks(){
  var right = document.querySelector(".right");
  var closeBtn = document.querySelector(".closeBtn");
  var left = document.querySelector(".left")
  var email = document.querySelector(".email")
  var password = document.querySelector(".password")
  var signIn = document.querySelector(".signIn")
var socialMedia = document.querySelector(".socialMedia")
  closeBtn.style.display = "none"
  right.style.display = "none"
left.style.width = "100%"
left.style.height = "100vh"
email.style.width = "50%"
email.style.height = "30%"
password.style.width = "50%"
password.style.height = "30%"
// loginInfo.style.padding = "30px"

signIn.style.width = "15%"
signIn.style.height = "50%"
socialMedia.style.width = "100%"
socialMedia.style.height = "20%"
}