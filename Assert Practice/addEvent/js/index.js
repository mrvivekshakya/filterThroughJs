
// var a = document.getElementById('first').value;
// var b = document.getElementById('second').value;

const add = (a, b) => {
    console.log("hello")
    let c = a + b;
    document.getElementsByClassName('myDiv').innerHTML = c;
};

var button = document.getElementById('submitBtn');
button.addEventListener('click', function () {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    add(a, b);
});
