
// Helper function to get data of users
function getUsers() {
    return JSON.parse(localStorage.getItem('data')) || [] ;
}

// To add new user during the signup 
function store(){
     
    var email = document.getElementById("email") ;
    var name = document.getElementById("name") ;
    var pw = document.getElementById("pw") ;
    
    var lowerCaseLetters = /[a-z]/g ; 
    var upperCaseLetters = /[A-Z]/g ;
    var numbers = /[0-9]/g ;
    
    // checking for unique Email Id
    var users = getUsers() ;
    var flagEmail=0 ;
    for(var i=0;i<users.length;i++)
    { if( email.value == users[i]["email"] )
         { flagEmail=1 ; break ; }
    }
    if(flagEmail==1) {
        alert('Please Enter the Unique Email Id') ; 
    }else if(email.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 8){
        alert('Password is too small Enter greator than of size 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
            users.push({email: email.value , name : name.value , password: pw.value }) ;
            localStorage.setItem('data', JSON.stringify(users)) ;
        
        alert('Your account has been created');
    }
}



