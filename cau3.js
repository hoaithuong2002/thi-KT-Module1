function isfibonaci(number) {
    let fibonaci0 = 0;
    let fibonaci1 = 1;
    let fibonaciTemp = 0;
    let flag = false;
    while (fibonaciTemp <= number) {
        if (fibonaciTemp == number) {
            flag = true;
            break;
        } else {
            fibonaciTemp = fibonaci0 + fibonaci1;
            fibonaci0 = fibonaci1;
            fibonaci1 = fibonaciTemp;
        }
    }
    return flag;
}
function displayisfibonaci() {
    let a =+ document.getElementById('number').value;
    let result = isfibonaci(a);
    document.getElementById('notif' ).innerHTML = result;
}