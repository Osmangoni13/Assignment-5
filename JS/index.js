

const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

document.getElementById('btn-donate1').addEventListener('click', function () {
    const inputDonate1 = parseFloat(document.getElementById('input-donate1').value); // Get value from input first
    const amount1 = parseFloat(document.getElementById('amount1').innerText);
    // Check if input is not a number or less than 0
    if (isNaN(inputDonate1) || inputDonate1 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_1').close();
        return; // Exit if invalid input
    } else {
        const inputDonateNow1 = inputDonate1 + amount1;
        document.getElementById('amount1').innerText = inputDonateNow1;

        // Update main balance
        const remainTarget1 = mainBalance - inputDonate1;
        document.getElementById('main-balance').innerText = remainTarget1;

        // Clear input field
        document.getElementById('input-donate1').value = '';
        document.getElementById('my_modal_1').showModal();
    }
});


document.getElementById('btn-donate2').addEventListener('click', function () {
    const inputDonate2 = parseFloat(document.getElementById('input-donate2').value);
    const amount2 = parseFloat(document.getElementById('amount2').innerText);

    if (isNaN(inputDonate2) || inputDonate2 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_2').close();
        return; // Exit if invalid input
    } else {
        const inputDonateNow2 = inputDonate2 + amount2;
        document.getElementById('amount2').innerText = inputDonateNow2;
        // main blance update
        remainTarget2 = mainBalance - inputDonate2;
        document.getElementById('main-balance').innerText = remainTarget2;

        document.getElementById('input-donate2').value = '';
        document.getElementById('my_modal_2').showModal();
    }
});

document.getElementById('btn-donate3').addEventListener('click', function () {
    const inputDonate3 = parseFloat(document.getElementById('input-donate3').value);

    if (isNaN(inputDonate3) || inputDonate3 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_3').close();
        return; // Exit if invalid input
    } else {

        const amount3 = parseFloat(document.getElementById('amount3').innerText);
        const inputDonateNow3 = inputDonate3 + amount3;
        document.getElementById('amount3').innerText = inputDonateNow3;
        // main blance update
        remainTarget3 = mainBalance - inputDonate3;
        document.getElementById('main-balance').innerText = remainTarget3;

        document.getElementById('my_modal_3').showModal();
        document.getElementById('input-donate3').value = '';
    }
});

// Donate and History Button
document.getElementById('donate-history').addEventListener('click', function () {
    document.getElementById('main').classList.add("hidden");
})

document.getElementById('donate-money').addEventListener('click', function () {
    document.getElementById('main').classList.remove("hidden");
})