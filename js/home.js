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

        // verify pin number(Wrong way to verify pin number)
        if(pinNumberInput === '1234'){
            console.log('Adding money to your account');

            // get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);

            // step 5: add money with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // step-6: update the balance in UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to add money! Please try again.')
        }
})