
// Helper JASON Functions
function getUsers() {
    return JSON.parse(localStorage.getItem('data')) || [] ;
}


function loggedUser() {
    return JSON.parse(localStorage.getItem('loginInfo')) || [] ;
}

function final() {
    return JSON.parse(localStorage.getItem('totalData')) || [] ;
}

function deletedUsers() {
    return JSON.parse(localStorage.getItem('deletedData')) || [] ;
}


// Identifying Details of Logged In user
const profileUser = loggedUser() ;
const allUsers = final() ;
const users = getUsers() ;
let userID ;
let userID1 ;

for(let i=0;i<allUsers.length;i++) {
    if( profileUser[0]["email"] == allUsers[i]["email"] ) {
        userID = i ; break ;
    }
}
for(let i=0;i<users.length;i++) {
    if( profileUser[0]["email"] == users[i]["email"] ) {
        userID1 = i ; break ;
    }
}




// Update Details from form
let uname = document.getElementById("update-name") ;
let uemail = document.getElementById("update-email") ;
let uaddress = document.getElementById("update-address") ;
let ubio = document.getElementById("update-bio") ;
let ugender = document.getElementById("update-gender") ;
let unumber = document.getElementById("update-number") ;
let uskill = document.getElementById("update-skill") ;
let ucollege = document.getElementById("update-college") ;
let udob = document.getElementById("update-dob") ;

// Checking for valid contact number
let auth=0 ;
if( unumber.value.length!=0 ) {
   if( unumber.value.length!=10 )
          auth=1 ;  
}

// Checking for different email id that to be set 
let auth1=0 ;
for(let i=0;i<allUsers.length;i++) {
     if( uemail==allUsers[i]["email"] && i!=userID) {
        auth1=1 ; break ;
     } 
}

function updateNow() {
     
     if(auth==1) {
        alert('Please Enter the valid 10 digit contact number..') ;
     }     
     else if(auth1==1) {
        alert('Try with some different Email Id, it is already linked with some user...') ;
     }
     else {

     if(uname.value.length != 0) {  
        profileUser[0].name = uname.value ;
        users[userID1].name = uname.value ;
        allUsers[userID].name = uname.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;
        localStorage.setItem('loginInfo', JSON.stringify(profileUser)) ;
        localStorage.setItem('data', JSON.stringify(users)) ;   
     }

     if(uemail.value.length != 0) {
        profileUser[0].email = uemail.value ;
        users[userID1].email = uemail.value ;
        allUsers[userID].email = uemail.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;
        localStorage.setItem('loginInfo', JSON.stringify(profileUser)) ;
        localStorage.setItem('data', JSON.stringify(users)) ;   
     }
     
     if(uaddress.value.length != 0) {
        allUsers[userID]["address"] = uaddress.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(ubio.value.length != 0) {
        allUsers[userID]["bio"] = ubio.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(ugender.value.length != 0) {
        allUsers[userID]["gender"] = ugender.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(unumber.value.length != 0) {
        allUsers[userID]["contact"] = unumber.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(uskill.value.length != 0) {
        allUsers[userID]["skill"] = uskill.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(ucollege.value.length != 0) {
        allUsers[userID]["college"] = ucollege.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
     if(udob.value.length != 0) {
        allUsers[userID]["dob"] = udob.value ;
        localStorage.setItem('totalData', JSON.stringify(allUsers)) ;  
     }
   } 
     

     window.open('profile.html') ;
     window.close() ;
     
}
