document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('Account-number').value;
        const pin = document.getElementById('pin').value;
        // console.log(accountNumber, pin)
        const convertedPin = parseInt(pin)
        if (accountNumber.length === 11) {
           
            if (convertedPin === 1234) {
                window.location.href="main.html"
            }
            else {
                alert("Pin thik ney")
            }
        }
        else {
            alert("need valid account number")
        }
    })