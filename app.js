const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const cancelBtn = document.getElementById('button-cancel');
const confirmBtn = document.getElementById('button-confirm');
const expensesList = document.getElementById('expenses-list');
const totalExpensesOutput = document.getElementById('total-expenses');

let totalExpenses = 0;

confirmBtn.addEventListener('click', () => {

    // Get user data
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    // Validate entered data
    if (enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0) {
        console.log('Wrong values!')
        return;
    }

    // Add new expense in UI
    const newItem = document.createElement('ion-item');
    newItem.textContent = `${enteredReason}: $${enteredAmount}`;
    expensesList.appendChild(newItem);

    totalExpenses += parseInt(enteredAmount);
    totalExpensesOutput.textContent = totalExpenses;

    // Clear inputs
    clearInputs();

    // Logger
    console.log('New expense has been added!');

});

cancelBtn.addEventListener('click', () => {
    clearInputs();

    // Logger
    console.log('Inputs are cleared!');
});

function clearInputs () {
    // Clear inputs
    reasonInput.value = '';
    amountInput.value = '';
}