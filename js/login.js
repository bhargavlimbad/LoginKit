
// JSON Helper functions 

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


// Checking for Existing Account 
function check(){
    const users = getUsers() ;

    let userName = document.getElementById('email');
    let userPw = document.getElementById('userPw');
    
    let flag=0 ;
    for(var i=0;i<users.length;i++)
    { if( userName.value==users[i]["email"] && userPw.value==users[i]["password"] ) {
          flag=1 ;
          
          // Opening profile page with function
          const profileUser = loggedUser() ;
          profileUser.push({email: users[i]["email"] , name : users[i]["name"] , password: users[i]["password"] }) ;
          localStorage.setItem('loginInfo', JSON.stringify(profileUser)) ;
          
          window.open('profile.html') ;
          break ;
      }
    }   
    if(flag==0) {
        alert("You not have account with us, Please try to Register with Us.....") ;
    }
    
}

