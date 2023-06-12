const questions = [
  {
    question: 'What replaces the question mark?',
    image: 'rotation/rotation_test.svg',
    answers: [
      'rotation_answer_left',
      'rotation_answer_right',
      'rotation_answer_up',
      'rotation_answer_down',
    ],
    explanation: 'The correct answer is C, from left to right the arrow rotates 90 degrees.',
    dificulty: 1,
  },
  {
    question: 'What replaces the question mark?',
    image: 'sidecount/sidecount_question',
    answers: [
      'answer_a',
      'answer_b',
      'answer_c',
      'answer_d',
    ],
    explanation: `from left to right, the line alternates between vertical and horisontal,
     and on each square the sides on the figures add up to 9.`,
    difficulty: 2,
  },
  {
    question: 'What follows in the sequence?',
    image: 'translation/translation',
    answers: [
      'answer_a',
      'answer_b',
      'answer_c',
      'answer_d_correct',
    ],
    explanation: 'From left to right, the first square moves 2 spaces up, the second 1, the third 3, and the fourth 1.',
    difficulty: 2,
  },
  {
    question: 'what follows in the sequence?',
    image: 'block_rotation/question',
    answers: [
      'answer_b',
      'answer_c',
      'answer_d',
      'answer_a_correct',
    ],
    explanation: 'all square move one space clockwise on each frame',
    difficulty: 1,
  },
  {
    question: 'What follows the sequece?',
    image: 'addition/question',
    answers: [
      'answer_a',
      'answer_b',
      'answer_c',
      'answer_d_correct',
    ],
    explanation: 'On each frame, 2 black squares are added and 1 of them is red outlined.',
    difficulty: 1,
  },
  {
    question: 'A is to B as C is to...',
    image: 'reflection/reflection',
    answers: 'anwswer_...',
    explanation: '1 is the reflection of 2.',
    difficulty: 1,
  },
];
export default questions;
