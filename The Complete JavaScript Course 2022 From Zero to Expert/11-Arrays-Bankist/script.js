'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
   owner: 'Jonas Schmedtmann',
   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
   interestRate: 1.2, // %
   pin: 1111,
};

const account2 = {
   owner: 'Jessica Davis',
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
   interestRate: 1.5,
   pin: 2222,
};

const account3 = {
   owner: 'Steven Thomas Williams',
   movements: [200, -200, 340, -300, -20, 50, 400, -460],
   interestRate: 0.7,
   pin: 3333,
};

const account4 = {
   owner: 'Sarah Smith',
   movements: [430, 1000, 700, 50, 90],
   interestRate: 1,
   pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
   containerMovements.innerHTML = '';

   movements.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

      containerMovements.insertAdjacentHTML('afterBegin', html);
   });
};

const calcDisplayBalance = function (acc) {
   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
   labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
   const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov);
   labelSumIn.textContent = `${incomes}€`;

   const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
   labelSumOut.textContent = `${Math.abs(out)}€`;

   const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter(int => int >= 1)
      .reduce((acc, int) => acc + int);
   labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = accs => {
   accs.forEach(acc => {
      acc.username = acc.owner
         .toLowerCase()
         .split(' ')
         .map(name => name[0])
         .join('');
   });
};

createUsernames(accounts);

const updateUI = function (acc) {
   // Display movements
   displayMovements(acc.movements);

   // Display balance
   calcDisplayBalance(acc);

   // Display summary
   calcDisplaySummary(acc);
};

// Evente handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
   // Prevent form from submitting
   e.preventDefault();

   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
   console.log(currentAccount);

   if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      // Clear the input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

      updateUI(currentAccount);
   }
});

btnTransfer.addEventListener('click', function (e) {
   e.preventDefault();
   const amount = Number(inputTransferAmount.value);
   const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
   inputTransferAmount.value = inputTransferTo.value = '';

   if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      updateUI(currentAccount);
   }
});

btnClose.addEventListener('click', function (e) {
   e.preventDefault();

   if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log(index);

      // Delete account
      accounts.splice(index, 1);

      // Hide UI
      containerApp.style.opacity = 0;
   }
   inputCloseUsername.value = inputClosePin.value = '';
   labelWelcome.textContent = 'Log in to get started';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
   ['USD', 'United States dollar'],
   ['EUR', 'Euro'],
   ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* 
// Simple array methods

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //shalow copy
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); */

/* 
/////////////////////////////////////////////////////
// The at method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1)); */

/* 
//////////////////////////////////////////////////////
// Looping arrays: foreach

console.log('---- FOROF ----');
// for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
      console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
   }
}

console.log('---- FOREACH ----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}); */

/* 
//////////////////////////////////////////////////////
// forEach with maps and sets

// Map
currencies.forEach(function (value, key, map) {
   console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
   console.log(`${_}: ${value}`);
}); */

/* 
//////////////////////////////////////////////////////
// The map method

const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov => {
  //    return mov * eurToUsd;
  // });
  const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsDescriptions = movements.map((mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
console.log(movementsDescriptions); */

/* 
//////////////////////////////////////////////////////
// The filter method

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals); */

/* 
//////////////////////////////////////////////////////
// The reduce method

// accumulator -> SNOWBALL
const accInitialValue = 0;
const balance = movements.reduce(function (acc, mov, i, arr) {
   console.log(`Iteration number ${i}: ${acc}`);
   return acc + mov;
}, accInitialValue);
// const balance = movements.reduce((acc, mov) => acc + mov, 0)

console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => (mov > acc ? mov : acc), movements[0]);

console.log(max); */
/* 
//////////////////////////////////////////////////////
// Chaining methods

const eurToUsd = 1.1;
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); */

/* 
//////////////////////////////////////////////////////
// The find method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); */
