function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';
    return depositAmount;
}





document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value; */
    const depositAmount = getInputValue();
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    depositTotal.innerText = parseFloat(depositTotalText) + depositAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

//withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    //show withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + parseFloat(withdrawAmount);
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal - parseFloat(withdrawAmount);
    withdrawInput.value = '';
})