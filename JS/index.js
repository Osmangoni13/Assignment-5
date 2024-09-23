
const mainBlance = parseFloat(document.getElementById('main-balance').innerText);
console.log("main balance", mainBlance)
const inputDonate1 = document.getElementById('input-donate1').value;
document.getElementById('btn-donate1').addEventListener('click', function () {
    const inputDonate1 = parseFloat(document.getElementById('input-donate1').value);
    console.log(inputDonate1)
    const amount1 = parseFloat(document.getElementById('amount1').innerText);
    console.log(amount1)
    const inputDonateNow1 = inputDonate1 + amount1;
    document.getElementById('amount1').innerText = inputDonateNow1;
    document.getElementById('input-donate1').value = '';

    // main blance update
    remainTarget = mainBlance - inputDonate1;
    document.getElementById('main-balance').innerText = remainTarget;




})
