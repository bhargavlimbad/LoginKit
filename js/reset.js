
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
let oldPass = document.getElementById("old-pass") ;
let newPass = document.getElementById("new-pass") ;
let newPassConf = document.getElementById("new-pass-conf") ;

function updatePassNow() {
     if( oldPass.value == profileUser[0]["password"] ) {
          
        if( newPass.value == newPassConf.value ) {
            profileUser[0].password = newPass.value ;
            users[userID1].password = newPass.value ;
            allUsers[userID].password = newPass.value ;     

        } else {
           alert('Your New Password is not same during condimation.') ; 
        }

     } else {
         alert('Your Old Password is wrong, Please enter the correct Password.') ;
     }
    
     localStorage.setItem('totalData', JSON.stringify(allUsers)) ;
     localStorage.setItem('loginInfo', JSON.stringify(profileUser)) ;
     localStorage.setItem('data', JSON.stringify(users)) ;
     
     window.open('profile.html') ;
     window.close() ;
     
}
