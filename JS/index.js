
const mainBlance = parseFloat(document.getElementById('main-balance').innerText);


document.getElementById('btn-donate1').addEventListener('click', function () {
    const inputDonate1 = parseFloat(document.getElementById('input-donate1').value);
    const amount1 = parseFloat(document.getElementById('amount1').innerText);
    const inputDonateNow1 = inputDonate1 + amount1;
    document.getElementById('amount1').innerText = inputDonateNow1;
    // main blance update
    remainTarget1 = mainBlance - inputDonate1;
    document.getElementById('main-balance').innerText = remainTarget1;
    document.getElementById('input-donate1').value = '';

});

document.getElementById('btn-donate2').addEventListener('click', function () {
    const inputDonate2 = parseFloat(document.getElementById('input-donate2').value);

    const amount2 = parseFloat(document.getElementById('amount2').innerText);
    const inputDonateNow2 = inputDonate2 + amount2;
    document.getElementById('amount2').innerText = inputDonateNow2;
    // main blance update
    remainTarget2 = mainBlance - inputDonate2;
    document.getElementById('main-balance').innerText = remainTarget2;
    document.getElementById('input-donate2').value = '';

});

document.getElementById('btn-donate3').addEventListener('click', function () {
    const inputDonate3 = parseFloat(document.getElementById('input-donate3').value);
    const amount3 = parseFloat(document.getElementById('amount3').innerText);
    const inputDonateNow3 = inputDonate3 + amount3;
    document.getElementById('amount3').innerText = inputDonateNow3;
    // main blance update
    remainTarget3 = mainBlance - inputDonate3;
    document.getElementById('main-balance').innerText = remainTarget3;
    document.getElementById('input-donate3').value = '';

});

document.getElementById('donate-history').addEventListener('click', function () {
    document.getElementById('main').classList.add("hidden");
})

document.getElementById('donate-money').addEventListener('click', function () {
    document.getElementById('main').classList.remove("hidden");
})