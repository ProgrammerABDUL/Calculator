function display(v) {
    document.getElementById('result').value += v;
}

function Clearscreen() {
    document.getElementById('result').value = " ";
}

function resultdata() {
    res = document.getElementById('result').value;
    result = eval(res);
    document.getElementById('result').value = result;
}