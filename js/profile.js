
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

let found=0 ;
for(let i=0;i<allUsers.length;i++) {
    if( profileUser[0]["email"] == allUsers[i]["email"] ) {
        userID = i ; found=1 ; break ;
    }
}

if(found==0) {
    userID = allUsers.length ;
    allUsers.push( {email: profileUser[0]["email"] , name : profileUser[0]["name"] ,
                password: profileUser[0]["password"] , contact: "9988773322" , address : "New Delhi, India." , dob : "2001-01-01" , 
                bio : "Web Developer"  , gender : "Male" , college : "ABC University" ,
                skill : "Management" } ) ;
    localStorage.setItem('totalData', JSON.stringify(allUsers)) ; 

}

for(let i=0;i<users.length;i++) {
    if( profileUser[0]["email"] == users[i]["email"] ) {
        userID1 = i ; break ;
    }
}


// Users Detils
let profileName = document.getElementById("display-name").innerHTML = allUsers[userID]["name"] ;
let profileEmail = document.getElementById("display-email").innerHTML = allUsers[userID]["email"] ;
let profilePassword = document.getElementById("display-name").innerHTML = allUsers[userID]["password"] ;
let profileContact = document.getElementById("display-name").innerHTML = allUsers[userID]["contact"] ;
let profileAddress = document.getElementById("display-name").innerHTML = allUsers[userID]["address"] ;
let profileDOB = document.getElementById("display-name").innerHTML = allUsers[userID]["dob"] ;
let profileBio = document.getElementById("display-name").innerHTML = allUsers[userID]["bio"] ;
let profileGender = document.getElementById("display-gender").innerHTML = allUsers[userID]["gender"] ;
let profileCollege = document.getElementById("display-college").innerHTML = allUsers[userID]["college"] ;
let profileSkill = document.getElementById("display-skill").innerHTML = allUsers[userID]["skill"] ;

document.getElementById("display-name").innerHTML = profileName ;
document.getElementById("display-email").innerHTML = profileEmail ;
document.getElementById("display-bio").innerHTML = profileBio ;
document.getElementById("display-gender").innerHTML = profileGender ;
document.getElementById("display-contact").innerHTML = profileContact ;
document.getElementById("display-address").innerHTML = profileAddress ;
document.getElementById("display-dob").innerHTML = profileDOB ;
document.getElementById("display-college").innerHTML = profileCollege ;
document.getElementById("display-skill").innerHTML = profileSkill ;

// Buttons Functions
function logout() {
     localStorage.removeItem('loginInfo') ;
     window.open('index.html') ;
     window.close() ;

}

function resetPassword() {
    window.open('reset.html') ;
    window.close() ;
}

function updateDetails() {
    window.open('update.html') ;
    window.close() ;    
}

function userListing() {
    window.open('users.html') ;    
}

function deleteAccount() {
    window.open('delete.html') ;
    window.close() ;
}

function deletedList() {
    window.open('deletedusers.html') ; 
}