/*function readFile(cb) {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../test_data.json", true); // get json file.
    oXHR.send();
    function reportStatus() {
        if (oXHR.readyState == 4) {
            return cb(this.responseText);
        } else {
            return cb(null);
        }
    }
}
function cb(res){
    //document.getElementById('myDiv').innerHTML = res;
    var ar = JSON.parse(res);
    //document.getElementById('myDiv').innerHTML = ar[0].salary;  
    var table = document.getElementById("table");
    var tbl = document.createElement("tr");
    tbl.innerHTML = "<td>Vivek Shakya</td><td>9027149894</td>";
    table.appendChild(tbl); 
    for(i=0; i<employees.length;i++){
        
        if(employees[i].salary > first){
            tbl += "<tr><td>"+ employees[i].first_name+"</td><td>"+ employees[i].last_name +"</td><td>"+ employees[i].email +"</td><td>"+ employees[i].gender +"</td><td>"+ employees[i].department +"</td><td>"+ employees[i].salary +"</td></tr>"; 
            document.getElementById('table').innerHTML = tbl;   

        }
    }
}
document.getElementById('btn').addEventListener('click',readFile(cb));
//readFile(cb);

*/
function access(){
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../test_data.json", true); // get json file.
    oXHR.send();
    function reportStatus() {
        if (oXHR.readyState == 4) {
            return cb(this.responseText);
        } else {
            return cb(null);
        }
    }

    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;

    
    for(i=0; i<employees.length;i++){
        
        if(employees[i].salary > first){
            tbl += "<tr><td>"+ employees[i].first_name+"</td><td>"+ employees[i].last_name +"</td><td>"+ employees[i].email +"</td><td>"+ employees[i].gender +"</td><td>"+ employees[i].department +"</td><td>"+ employees[i].salary +"</td></tr>"; 
            document.getElementById('table').innerHTML = tbl;   

        }
    }*/

