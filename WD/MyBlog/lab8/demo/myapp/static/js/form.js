function validateForm() {
    let name = document.getElementById("name").value[0];
    let email = document.getElementById("email").value[0];
    let message = document.getElementById("message").value[0];
   
    let correct = 1;
    if (name == "" || email == "" || message == "") 
        {
            alert("All fields are required!");
            correct = 0;
            return false;  
        }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;
    if (!emailPattern.test(email))
         {
            alert("Invalid email format! Email must end with '@e-uvt.ro'.");
            correct = 0 ;
            return false;
         }
    
    if(correct == 1)
        {
             alert("Success!");
        }
    return true;
    }