// Add money to the account

// step1: add event handler to the 'Add Money' btn
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent browser reload
        event.preventDefault();

        // get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // get the pin number provided
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);
})