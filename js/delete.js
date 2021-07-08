
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
                password: profileUser[0]["password"] , contact: "9988773322" , address : "New Delhi, India." , dob : "01-01-2001" , 
                bio : "Web Developer"  , gender : "Male" , college : "ABC University" ,
                skill : "Management" } ) ;
    localStorage.setItem('totalData', JSON.stringify(allUsers)) ; 

}

for(let i=0;i<users.length;i++) {
    if( profileUser[0]["email"] == users[i]["email"] ) {
        userID1 = i ; break ;
    }
}



function deleteNow() {
    const delUsers = deletedUsers() ;

    let dname = profileUser[0]["name"] ;
    let demail = profileUser[0]["email"] ;
    let dreason = document.getElementById("reason") ;
    let rating = document.getElementById("rating") ;
    
    delUsers.push({email: demail , name : dname , reason: dreason.value , rating: rating.value }) ;
    localStorage.setItem('deletedData', JSON.stringify(delUsers)) ;
    
    let temp = allUsers[userID] ;
    if( temp.email == demail ) {
          allUsers.splice( userID , 1 ) ;
    }
    localStorage.setItem('totalData',JSON.stringify(allUsers)) ;
    
    let temp1 = users[userID1] ;
    if( temp1.email == demail ) {
          users.splice( userID1 , 1 ) ;
    }
    localStorage.setItem('data',JSON.stringify(users)) ;
     
    localStorage.removeItem('loginInfo') ;
    
    window.open('index.html') ;
    window.close() ;
}