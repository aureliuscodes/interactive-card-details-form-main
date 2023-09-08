document.addEventListener('DOMContentLoaded', function () {
    // Attach a submit event listener to the form
    const cardForm = document.getElementById('card-form'); 
  
    cardForm.addEventListener('submit', function (event) {
      updateCardDetails();
      // Check for empty fields when the form is submitted
      if (isAnyFieldEmpty()) {
        event.preventDefault(); // Prevent form submission if any field is empty
      } 

      if (cardNumberFormat()) {
        event.preventDefault();
        return;
      }
      cardForm.className = 'hidden';
    });

});   

  
  function isAnyFieldEmpty() {
    let inputElements = document.querySelectorAll('input');
    let blankMessage = document.getElementsByClassName('blank-msg');
  
    let isEmpty = false; // Initialize a variable to track if any field is empty
  
    for (let i = 0; i < inputElements.length; i++) {
      const inputValue = inputElements[i].value.trim(); // Trim to remove leading and trailing spaces
  
      if (inputValue === '') {

        if (inputElements[i] === inputElements[3]) {
            blankMessage[i-1].textContent = 'Can\'t be blank';
        } else {
            blankMessage[i].textContent = 'Can\'t be blank';
        }
        inputElements[i].style.borderColor = 'hsl(0, 100%, 66%)';
        isEmpty = true; // Set isEmpty to true if any field is empty
      } else {
        blankMessage[i].textContent = ''; // Reset the error message if the field is not empty
        inputElements[i].style.borderColor = '';
      }
    }

    return isEmpty;
  }
  
function cardNumberFormat() {
    let cardInput = document.getElementById('card-number-input');
    let formatMsg = document.querySelector('.format-msg');
    let numberRegex = /^[0-9\s]+$/
    if (cardInput.value.trim() !== '') {
        if (numberRegex.test(cardInput.value)) {
            formatMsg.textContent = '';
            cardInput.style.borderColor = '';
            return true;
        } else {
            formatMsg.textContent = 'Wrong format, numbers only';
            cardInput.style.borderColor = 'hsl(0, 100%, 66%)';
            return false;
        }
    }
}

function updateCardDetails() {
    let inputElements = document.querySelectorAll('input');
    let cardNumber = document.querySelector('.bg-card-number');
    let cardName = document.querySelector('.bg-card-name');
    let cardDate = document.querySelector('.bg-card-date');
    let cardCvc = document.querySelector('.bg-cvc-digits');

   
    if (inputElements[0].value.trim() !== '') {
        cardName.textContent = inputElements[0].value;
    }
    if (inputElements[1].value.trim() !== '') {
        cardNumber.textContent = inputElements[1].value;
    }
    if (inputElements[2].value.trim() !== '' && inputElements[3].value.trim() !== '') {
        cardDate.textContent = inputElements[2].value + '/' + inputElements[3].value;
    }
    if (inputElements[4].value.trim() !== '') {
        cardCvc.textContent = inputElements[4].value;
    }
    
}