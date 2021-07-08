
function deletedUsers() {
    return JSON.parse(localStorage.getItem('deletedData')) || [] ;
}


const delUsers = deletedUsers() ;


for(let i=0;i<delUsers.length;i++) {
   
   let tname=delUsers[i]["name"] ;
   let temail=delUsers[i]["email"] ;
   let treason=delUsers[i]["reason"] ;
   let trating=delUsers[i]["rating"] ;
   
   var x = document.createElement("TBODY");
   
   var y = document.createElement("TR");
   
   var z0 = document.createElement("TD");
   z0.innerHTML = i+1 ;
   y.appendChild(z0) ;

   var z1 = document.createElement("TD");
   z1.innerHTML = tname ;
   y.appendChild(z1) ;

   var z2 = document.createElement("TD");
   z2.innerHTML = temail ;
   y.appendChild(z2) ;

   var z3 = document.createElement("TD");
   z3.innerHTML = treason ;
   y.appendChild(z3) ;
   
   var z4 = document.createElement("TD");
   z4.innerHTML = trating ;
   y.appendChild(z4) ;

   
   x.appendChild(y);
   document.getElementById("tableList").appendChild(x);

 }