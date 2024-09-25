// common function start
function getInputById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function idSelect(id) {
    const selectID = document.getElementById(id);
    return selectID;
}

function showId(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('donate-history').classList.add('py-4', 'px-8', 'rounded-lg', 'mr-4', 'hover:border-indigo-300', 'bg-[#B4F461]');
}

function showId2(id2) {
    document.getElementById(id2).classList.add('hidden');
}
//common function end
let mainBalance = getTextValueById('main-balance');

// flood at nowakhali part
document.getElementById('btn-donate1').addEventListener('click', function () {
    const inputDonate1 = getInputById('input-donate1');
    const amount1 = getTextValueById('amount1');
    if (isNaN(inputDonate1) || inputDonate1 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_1').close();
        return;
    } else {
        const inputDonateNow1 = inputDonate1 + amount1;
        getTextValueById('amount1').innerText = inputDonateNow1;
        const remainTarget1 = mainBalance - inputDonate1;
        document.getElementById('main-balance').innerText = remainTarget1;
        document.getElementById('input-donate1').value = '';
        document.getElementById('my_modal_1').showModal();

        // add history
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-5 rounded-xl border border-gray-200 mb-6 ';
        historyItem.innerHTML = `
            <h3 class="text-xl text-black mb-2">${inputDonate1.toFixed(2)} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
            <p class="text-gray-500">Date: ${new Date()}</p>
            <br>
        `;
        const historyContainer = idSelect('history');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});

//Flood Relief in Feni part
document.getElementById('btn-donate2').addEventListener('click', function () {
    const inputDonate2 = getInputById('input-donate2');
    const amount2 = getTextValueById('amount2');
    if (isNaN(inputDonate2) || inputDonate2 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_1').close();
        return;
    } else {
        const inputDonateNow2 = inputDonate2 + amount2;
        getTextValueById('amount2').innerText = inputDonateNow2;
        const remainTarget2 = mainBalance - inputDonate2;
        document.getElementById('main-balance').innerText = remainTarget2;
        document.getElementById('input-donate2').value = '';
        document.getElementById('my_modal_2').showModal();

        // add history
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-5 rounded-xl border border-gray-200 mb-6 ';
        historyItem.innerHTML = `
            <h3 class="text-xl text-black mb-2">${inputDonate2.toFixed(2)} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
            <p class="text-gray-500">Date: ${new Date()}</p>
            <br>
        `;
        const historyContainer = idSelect('history');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});

// Injured in the Quota Movement part
document.getElementById('btn-donate3').addEventListener('click', function () {
    const inputDonate3 = getInputById('input-donate3');
    const amount3 = getTextValueById('amount3');
    if (isNaN(inputDonate3) || inputDonate3 <= 0) {
        alert('Invalid input! Please enter a positive number.');
        document.getElementById('my_modal_3').close();
        return;
    } else {
        const inputDonateNow3 = inputDonate3 + amount3;
        getTextValueById('amount3').innerText = inputDonateNow3;
        const remainTarget3 = mainBalance - inputDonate3;
        document.getElementById('main-balance').innerText = remainTarget3;
        document.getElementById('input-donate3').value = '';
        document.getElementById('my_modal_3').showModal();

        // add history
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-5 rounded-xl border border-gray-200 mb-6 ';
        historyItem.innerHTML = `
            <h3 class="text-xl text-black mb-2">${inputDonate3.toFixed(2)} Taka is Aid for Injured in the Quota Movement</h3>
            <p class="text-gray-500">Date: ${new Date()}</p>
            <br>
        `;
        const historyContainer = idSelect('history');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});

// Donate and History Button
document.getElementById('donate-history').addEventListener('click', function () {
    showId2('main');
    showId('history');
    document.getElementById('donate-history').classList.add('py-4', 'px-8', 'rounded-lg', 'mr-4', 'hover:border-indigo-300', 'bg-[#B4F461]');
    document.getElementById('donate-money').classList.remove('bg-[#B4F461]');
});

document.getElementById('donate-money').addEventListener('click', function () {
    showId('main');
    showId2('history')
    document.getElementById('donate-money').classList.add('py-4', 'px-8', 'rounded-lg', 'mr-4', 'bg-[#B4F461]');
    document.getElementById('donate-history').classList.remove('bg-[#B4F461]');
});