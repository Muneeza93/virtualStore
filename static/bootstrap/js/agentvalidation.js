// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const agent_Form = document.getElementById('agents')

agent_Form.addEventListener('submit',(e) => {

    // Defining a function to validate form 

    // Retrieving the values of form elements 
    var firstname = document.agentForm.firstName.value;
    var secondname = document.agentForm.secondname.value;
    var email = document.agentForm.email.value;
    var password = document.agentForm.password.value;
    var retypepassword= document.agentForm.retypepassword.value;
    var phone= document.agentForm.phone.value;
    var employeeID= document.agentForm.employeeID.value;
    var nationalID= document.agentForm.nationalID.value;
    


    
	// Defining error variables with a default value
    var fnameErr = snameErr = emailErr = passwordErr = phoneErr = employeeIDErr = nationalIDErr = true;
    
    // Validate first name
    if(firstname == "") {
        printError("fnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("fnameErr", "Please enter a valid name");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }

    //validate second name
    if(secondname == "") {
        printError("snameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(secondname) === false) {
            printError("snameErr", "Please enter a valid second name");
        } else {
            printError("snameErr", "");
            snameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if(password == "") {
        printError("passwordErr", "Please enter password");
    } else {
        // Regular expression for basic password validation
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a password");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // Validate retype password
    if(retypepassword == "") {
        printError("passwordErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(regex.test(retypepassword) === false) {
            printError("passwordErr", "Please enter a valid email address");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    
    // Validate mobile number
    if(phone == "") {
        printError("phoneErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
        }
    }
    
    // Validate employeeID
    if(employeeID == "Select") {
        printError("employeeIDErr", "Please select your employee ID");
    } else {
        printError("employeeIDErr", "");
        countryErr = false;
    }
    
    // Validate national ID
    if(nationalID == "") {
        printError("nationalIDErr", "Please fill in  your national ID");
    } else {
        var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
        if (regex.test(nationalID) === false) {
            printError( "nationalIDErr", "Please fill in a valid your national ID");
        } else {
        printError("nationalIDErr", "");
        nationalIDErr = false;
      }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((fnameErr || snameErr || emailErr || passwordErr || phoneErr || employeeIDErr || nationalIDErr) == true) {
        alert('failed')
        return
    } else {
        alert('successful')
    }
    // if((fnameErr || snameErr) == true) {
    //    e.preventDefault();
    // } else {
    //     e.currentTarget.submit();
    // }
    
});

/*/^
  (?=.*\d)          // should contain at least one digit
  (?=.*[a-z])       // should contain at least one lower case
  (?=.*[A-Z])       // should contain at least one upper case
  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/*/