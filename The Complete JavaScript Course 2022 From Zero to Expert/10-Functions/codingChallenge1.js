'use strict';

const poll = {
   question: 'What is your favourite programming language?',
   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
   // This generates [0, 0, 0, 0]. More in the next section
   answers: new Array(4).fill(0),
   registerNewAnswer() {
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
      if (answer >= 0 && answer <= 3) {
         this.answers[answer]++;
      } else {
         alert('Invalid number...');
      }
      // console.log('answers array:', this.answers);
      this.displayResults('string');
   },
   displayResults(type = 'array') {
      if (type === 'array') {
         console.log(this.answers);
      } else {
         console.log(`Poll results are ${this.answers.join(', ')}`);
      }
   },
};

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

const arr1 = [5, 2, 3];
const arr2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: arr1 });
poll.displayResults.call({ answers: arr2 });
poll.displayResults.call({ answers: arr2 }, 'string');
