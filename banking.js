function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const depositAmountText = inputField.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    inputField.value = '';
    return depositAmount;
}

function updateTotalField(totalFieldId, depositAmount) {
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;

    depositTotal.innerText = parseFloat(depositTotalText) + depositAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    //const previousBalanceText = balanceTotal.innerText;
    //const previousBalanceTotal = parseFloat(previousBalanceText); 
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    /* const inputField = document.getElementById('deposit-input');
    const depositAmount = inputField.value; */

    //get current deposit
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
 
     depositTotal.innerText = parseFloat(depositTotalText) + depositAmount; */

    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true)
    }
});

//withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value; */

    //show withdraw amount
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     const withdrawTotalAmount = parseFloat(withdrawTotalText); */


    /*  withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; */

    //update balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceText);
     balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    /* withdrawInput.value = ''; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
        if (withdrawAmount > currentBalance) {
            console.log('Please check your current Balance and enter the withdraw amount')
        }
    }
})