'use scrict';
const loginBtn = document.querySelector('#login');
const loginArea = document.querySelector('#login-area');
const transactionArea = document.querySelector('.transaction-area');
const widrawBtn = document.querySelector('.widraw-btn');
const depositBtn = document.querySelector('.deposit-btn');
const widrawInput = document.querySelector('#widraw-amount');
const depositInput = document.querySelector('#deposit-amount');
const balance = document.querySelector('#balance');
const widraw = document.querySelector('#widraw');
const deposit = document.querySelector('#deposit');
let balanceAmount = 1240,
  widrowAmount = 0,
  depositAmount = 0;

loginBtn.addEventListener('click', function () {
  loginArea.classList.add('hidden');
  transactionArea.classList.remove('hidden');
});
function updateBalance(balanceAmount) {
  balance.textContent = balanceAmount;
}
widrawBtn.addEventListener('click', function () {
  let previousAmount = Number(widraw.textContent);
  let Transaction = Number(widrawInput.value);
  widraw.textContent = previousAmount + Transaction;
  widrawInput.value = '';

  balanceAmount = balanceAmount - Transaction;

  updateBalance(balanceAmount);
});
depositBtn.addEventListener('click', function () {
  let previousAmount = Number(deposit.textContent);
  let Transaction = Number(depositInput.value);
  balanceAmount = balanceAmount + Transaction;
  deposit.textContent = previousAmount + Transaction;
  depositInput.value = '';
  updateBalance(balanceAmount);
});
