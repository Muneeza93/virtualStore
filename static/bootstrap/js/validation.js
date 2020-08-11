// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const Product_Form = document.getElementById('product')

Product_Form.addEventListener('submit',(e) => {

    // Defining a function to validate form 

    // Retrieving the values of form elements 
    var nameofItem = document.productsForm.nameofItem.value;
    var make = document.productsForm.make.value;
    var serialno = document.productsForm.serialno.value;
    var price = document.productsForm.price.value;
    var initialpay = document.productsForm.initialpay.value;
    var payinterval = document.productsForm.payinterval.value;
    
    // Defining error variables with a default value
    var nameofItemErr = makeErr = serialnoErr = priceErr = initialpayErr = payintervalErr = true;
    
    // Validate nameofItem
    if(nameofItem == "") {
        printError("nameofItemErr", "Please enter name of Item");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nameofItem) === false) {
            printError("nameofItemErr", "Please enter a valid name of Item");
        } else {
            printError("nameofItemErr", "");
            nameofItemErr = false;
        }
    }
    
    // Validate make
    if(make == "") {
         printError("makeErr", "Please enter the make");
    } else {
      // Regular expression for basic make validation
       var regex = /^[a-zA-Z\s]+$/;
       if(regex.test(make) === false) {
          printError("makeErr", "Please enter a valid make");
      } else{
       printError("makeErr", "");
        makeErr = false;
       }
     }
    
    // Validate serial number
    if(serialno == "") {
        printError("serialnoErr", "Please enter serial number");
    }else{
            printError("serialnoErr", "");
            serialnoErr = false;
        
    }
    
    // Validate price
    if(price == "") {
        printError("priceErr", "Please enter the price");
    } else {
        printError("priceErr", "");
        priceErr = false;
    }
    
    // Validate initial pay
    if(initialpay == "") {
        printError("initialpayErr", "Please select initial pay");
    } else {
        printError("initialpayErr", "");
        initialpayErr = false;
    }

    // Validate pay interval
    if(payinterval == "") {
        printError("payintervalErr", "Please select pay interval");
    } else {
        printError("payintervalErr", "");
        payintervalErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameofItemErr || makeErr || serialnoErr || priceErr || initialpayErr || payintervalErr) == true) {
        alert('failed')
        e.preventDefault();
    } else {
        alert('successful')
        e.currentTarget.submit();
    }
    
});

// /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/ nin
// /^\S+@\S+\.\S+$/;email
///^[a-zA-Z\s]+$/;name