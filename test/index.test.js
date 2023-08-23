/* eslint-disable no-undef */
const {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  advancedRemoveExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
} = require('../src/index');

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('WORLD')).toBe('WORLD');
});

test('allCaps', () => {
  expect(allCaps('hello')).toBe('HELLO');
  expect(allCaps('hi folks')).toBe('HI FOLKS');
  expect(allCaps('My name is Alexa')).toBe('MY NAME IS ALEXA');
});

test('capitalizeWords', () => {
  expect(capitalizeWords('avocado toast')).toBe('Avocado Toast');
  expect(capitalizeWords('HELLO WORLD')).toBe('HELLO WORLD');
  expect(capitalizeWords('My name is Alexa')).toBe('My Name Is Alexa');
});

test('capitalizeHeadline', () => {
  expect(capitalizeHeadline('hello world')).toBe('Hello World');
  expect(capitalizeHeadline('HELLO WORLD')).toBe('HELLO WORLD');
  expect(capitalizeHeadline('the cat and the dog sat by the window in order to watch the rain fall')).toBe('The Cat and the Dog Sat by the Window in Order To Watch the Rain Fall');
  expect(capitalizeHeadline('the quick brown fox jumps over the lazy dog')).toBe('The Quick Brown Fox Jumps Over the Lazy Dog');
});

test('removeExtraSpaces', () => {
  expect(removeExtraSpaces('  hello   world  ')).toBe('hello world');
  expect(removeExtraSpaces('   Too   many   spaces    ')).toBe('Too many spaces');
  expect(removeExtraSpaces(' My     name is     Alexa     Whitney  ')).toBe('My name is Alexa Whitney');
});

test('advancedRemoveExtraSpaces', () => {
  expect(advancedRemoveExtraSpaces('   hello \n\t world  ')).toBe('hello world');
  expect(advancedRemoveExtraSpaces('Tabs\t\tare\t\tspaces\ttoo.')).toBe('Tabs are spaces too.');
  expect(advancedRemoveExtraSpaces('Newlines\n\nalso.')).toBe('Newlines also.');
  expect(advancedRemoveExtraSpaces('\t Mix of spaces and tabs.  \t')).toBe('Mix of spaces and tabs.');
});

test('kebobCase', () => {
  expect(kebobCase('Make Me Kebob')).toBe('make-me-kebob');
  expect(kebobCase('Chicken kebobs sound amazing')).toBe('chicken-kebobs-sound-amazing');
  expect(kebobCase('Mixed CASES and 123')).toBe('mixed-cases-and-123');
});

test('snakeCase', () => {
  expect(snakeCase('Make Me Snake')).toBe('make_me_snake');
  expect(snakeCase('Sneaky like a snake')).toBe('sneaky_like_a_snake');
  expect(snakeCase('Mixed CASES for 500 Snakes')).toBe('mixed_cases_for_500_snakes');
});

test('camelCase', () => {
  expect(camelCase('make me camel')).toBe('makeMeCamel');
  expect(camelCase('how many humps does A CAMEL HAVE')).toBe('howManyHumpsDoesACAMELHAVE');
});

test('shift', () => {
  expect(shift('kebob', 1)).toBe('ebobk');
  expect(shift('snake', 2)).toBe('akesn');
  expect(shift('camel', 3)).toBe('elcam');
});

test('makeHashTag', () => {
  expect(makeHashTag('apple banana cherry')).toEqual(['#Apple', '#Banana', '#Cherry']);
  expect(makeHashTag('fruit')).toEqual(['#Fruit']);
  expect(makeHashTag('orange mango watermelon pineapple blueberry')).toEqual(['#Watermelon', '#Pineapple', '#Blueberry']);
});

test('isEmpty', () => {
  expect(isEmpty('                            ')).toBe(true); // Only spaces
  expect(isEmpty('a                            ')).toBe(false); // Starting with non-space character
  expect(isEmpty('                            a')).toBe(false); // Ending with non-space character
  expect(isEmpty('\n\t\r')).toBe(true); // Only newlines, tabs, and carriage returns (for uncovered lines 122-124)
  expect(isEmpty('\n\t\ra')).toBe(false); // Ends with non-space character
  expect(isEmpty('a\n\t\r')).toBe(false); // Starts with non-space character
  expect(isEmpty('\n\n\t\r\t')).toBe(true); // Mixed characters but all are whitespace or special chars
  expect(isEmpty('Abc de             f              ')).toBe(false);
  expect(isEmpty('\r')).toBe(true);
  expect(isEmpty('\r\r\r')).toBe(true);
  expect(isEmpty('a\r')).toBe(false);
  expect(isEmpty(' a ')).toBe(false); // Spaces on both sides
});

test('isEmpty - special characters', () => {
  expect(isEmpty('\n\t\r')).toBe(true); // Only newlines, tabs, and carriage returns
});
