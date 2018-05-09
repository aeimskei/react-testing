import data from '../../data/courses.json';

// ===================================================
// NUMBERS
// ===================================================
// then use that data to create a variable
// and count the number of items in that array
const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// ===================================================
// STRINGS
// ===================================================
// what we'll pull for this is data and then we will use the first object in the array and fetch the title
const dataTest = data[0].title;

// method for expect the value of title to match JS
test('There is a JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

// this method passes a string and checks if it contains 'React'
test('The title contains React', () => {
  expect(dataTest).toContain('React');
});

// ===================================================
// ARRAYS
// ===================================================

// create a variable that will hold an array
// manually added index value inside expect
const data2 = ['React Native', 'MeteorJS'];

// use toEqual method bc we expect the manually input array to contain what is in data2
// if you want to check an array to contain specific items, use this example
test('The list of course mentions React native and MeteorJS', () => {
  expect(['React Native', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
});

// ===================================================
// OBJECTS
// ===================================================

// here, we're going to use the data we have at the top
// test the first object in the array
// we expect the first data to be of 'title'
test('The first course to have a property of Title', () => {
  expect(data[0]).toHaveProperty('title');
});

// this time, we can pass a 2nd argument into our method
// pass in 'views' with a specific number
test('The first course to have a property of Title', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
});