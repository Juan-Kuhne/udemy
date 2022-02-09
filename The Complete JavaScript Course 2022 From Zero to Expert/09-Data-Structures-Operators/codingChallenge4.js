'use strict';

// Test Data
/* 
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');
const txt = document.querySelector('textarea');
txt.value = `underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure`;
btn.textContent = 'Camel Case';
const capitalizeName = function (name) {
   return name.toLowerCase().replace(name[0], name[0].toUpperCase());
};

btn.addEventListener('click', function () {
   const strList = txt.value.split('\n');
   console.log(strList);
   for (let [i, name] of strList.entries()) {
      const nameList = name.trim().toLowerCase().split('_');
      nameList[1] = capitalizeName(nameList[1]);
      const camel = nameList.join('');
      console.log(camel.padEnd(20) + '✅'.repeat(i + 1));
   }
});

btn.click();
