
function final() {
    return JSON.parse(localStorage.getItem('totalData')) || [] ;
}

const allUsers = final() ;


 for(let i=0;i<allUsers.length;i++) {
   
   let tname=allUsers[i]["name"] ;
   let temail=allUsers[i]["email"] ;
   let tgender=allUsers[i]["gender"] ;
   let tdob=allUsers[i]["dob"] ;
   let tcontact=allUsers[i]["contact"] ;

   var x = document.createElement("tbody");
   
   var y = document.createElement("tr");
   
   var z0 = document.createElement("td");
   z0.innerHTML = i+1 ;
   y.appendChild(z0) ;

   var z1 = document.createElement("td");
   z1.innerHTML = tname ;
   y.appendChild(z1) ;

   var z2 = document.createElement("td");
   z2.innerHTML = temail ;
   y.appendChild(z2) ;

   var z3 = document.createElement("td");
   z3.innerHTML = tgender ;
   y.appendChild(z3) ;

   var z4 = document.createElement("td");
   z4.innerHTML = tdob ;
   y.appendChild(z4) ;
   
   var z5 = document.createElement("td");
   z5.innerHTML = tcontact ;
   y.appendChild(z5) ;
   

   x.appendChild(y);
   document.getElementById("tableList").appendChild(x);

 }


// For Searching particular item

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableList tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// For Filtering

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tableList");
  switching = true;  //Set the sorting direction to ascending:
  dir = "asc";  /*Make a loop that will continue until no switching has been done:*/
  
  while (switching) {
    
    switching = false ; //start by saying: no switching is done: 
    rows = table.rows  ;  /*Loop through all table rows (except the first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false; //start by saying there should be no switching:
      
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[n] ;
      y = rows[i + 1].getElementsByTagName("td")[n] ;
      
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }

  }
}
















