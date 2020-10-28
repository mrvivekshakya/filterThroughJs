
function readFile(cb) {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../test_data.json", true);
    oXHR.send();
    function reportStatus() {
        if (oXHR.readyState == 4) {
            cb(this.responseText);
        } else {
            cb(null);
        }
    }
}
function allData() {
    readFile(function (data) {
        var employee = JSON.parse(data);
        document.getElementById('table').innerHTML = ` <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>Department</th><th>Salary</th></tr>`;
        for (let i = 0; i < employee.length; i++) {
            var myTable = document.getElementById("table");
            var tbl = document.createElement("tr");
            tbl.innerHTML = "<td>" + employee[i].id + "</td><td>" + employee[i].first_name + "</td><td>" + employee[i].last_name + "</td><td>" + employee[i].email + "</td><td>" + employee[i].gender + "</td><td>" + employee[i].department + "</td><td>" + employee[i].salary + "</td>";
            myTable.appendChild(tbl);
        }
    });
}
function filterRecords() {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    readFile(function (data) {

        var employee = JSON.parse(data);
        var filtered = employee.filter(function (s) {
            return (s.salary < b) && (s.salary > a);
        });
        if (filtered[0] == undefined) {
            alert("Record not found at given condition");
        } else {
            document.getElementById('table').innerHTML = ` <tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>Department</th><th>Salary</th></tr>`;
            for (let i = 0; i < filtered.length; i++) {
                var myTable = document.getElementById("table");
                var tbl = document.createElement("tr");
                tbl.innerHTML = "<td>" + filtered[i].id + "</td><td>" + filtered[i].first_name + "</td><td>" + filtered[i].last_name + "</td><td>" + filtered[i].email + "</td><td>" + filtered[i].gender + "</td><td>" + filtered[i].department + "</td><td>" + filtered[i].salary + "</td>";
                myTable.appendChild(tbl);
            }
        }
    })
}

document.getElementById('btn').addEventListener('click', filterRecords);