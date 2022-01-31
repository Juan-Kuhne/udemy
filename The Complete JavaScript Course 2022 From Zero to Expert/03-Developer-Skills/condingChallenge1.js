'use strict';

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = dataList => {
  let res = '';
  for (var i = 0; i < dataList.length; i++) {
    res += `${dataList[i]}ºC in ${i + 1} days.\n`;
  }
  return res;
};

console.log('Test Data 1:\n' + printForecast(testData1));
console.log('Test Data 2:\n' + printForecast(testData2));
