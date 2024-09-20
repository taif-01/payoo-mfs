// console.log('login form page created')


// Step 1: Set the event handler
document.getElementById('btn-login').addEventListener('click', function(event){

    // Step 2: Set the browsers default behavior (prevent reloading browser)

    event.preventDefault();
    console.log('login btn clicked');

    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // check validity: worst way 
    if(phoneNumber === '0178910' && pinNumber ==='5'){
        console.log('You are allow to login');
        window.location.href = '/home.html';
    } else{
        alert('Not allow-Please check again');
    }
})