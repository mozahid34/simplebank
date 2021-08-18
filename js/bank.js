//Bank deposit
document.getElementById('deposit-btn').addEventListener('click',function() {
    const depoInput = document.getElementById('deposit-txt');
    const depoPlace = document.getElementById('depo-place');
    const depoValue = parseFloat(depoInput.value);
    depoPlace.innerText = depoValue;
    depoInput.value = "";

    var balance = document.getElementById('balance');
    const currentBal = balance.innerText;
    const bal = parseFloat(currentBal);
    const newBal = bal + depoValue;
    balance.innerText = newBal;
    


})

//with-draw btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-txt');
    const withPlace = document.getElementById('withdraw');
    const withValue = parseFloat(withdrawInput.value);
    withPlace.innerText = withValue;
    withdrawInput.value = "";

    var balance = document.getElementById('balance');
    const currentBal = balance.innerText;
    const bal = parseFloat(currentBal);
    const newBal = bal - withValue;
    balance.innerText = newBal;
    
})
