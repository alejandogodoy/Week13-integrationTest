import 'jest';
import * as basicOperations from './basicOperations';
import * as complexOperations from './complexOperations';

// MOCK

describe('complexOperations - Mocked Tests', () => {
  describe('checkEmail mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking a correct email',() =>{
        jest.spyOn(basicOperations, 'validateEmail').mockReturnValue('example@email.com');
        expect(complexOperations.checkEmail('mocked')).toBe('The email is valid')
    });
    it('mocking an undefined email',() =>{
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(undefined);
      expect(complexOperations.checkEmail('mocked')).toBe('The email is invalid')
    });
  });

  describe('calculateArea mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
      });
      it('mocking multip in rectangle',() =>{
          jest.spyOn(basicOperations, 'multip').mockReturnValue(5);
          expect(complexOperations.calculateArea('rectangle', 0, 0)).toBe(5)
      });
      it('mocking division in triangle',() =>{
        jest.spyOn(basicOperations, 'division').mockReturnValue(5.11);
        expect(complexOperations.calculateArea('triangle', 0, 0)).toBeCloseTo(5.11)
      });
      it('mocking exponent in circle',() =>{
        jest.spyOn(basicOperations, 'exponent').mockReturnValue(30);
        expect(complexOperations.calculateArea('circle', 0, 0)).toBeCloseTo(94.24777)
      });
      it('mocking an undefined figure',() =>{
        jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(undefined);
        expect(complexOperations.calculateArea('square', 0, 0)).toBe('square is not supported')
      });
      it('mocking an default figure',() =>{
        jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('default');
        expect(complexOperations.calculateArea('default', 0, 0)).toBe('default is not supported')
      });
  });

  describe('sumGreaterThan mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking sum to be greater than third number',() =>{
        jest.spyOn(basicOperations, 'sum').mockReturnValue('10');
        expect(complexOperations.sumGreaterThan(0, 0, 8)).toBe('10 is greater than 8')
    });
    it('mocking sum to be less than third number',() =>{
      jest.spyOn(basicOperations, 'sum').mockReturnValue('5');
      expect(complexOperations.sumGreaterThan(0, 0, 15)).toBe('5 is less than 15')
    });
    it('mocking isNumber to undefined',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.sumGreaterThan(1, 2, 5)).toBe('The params should be numbers')
    });
  });
  
  describe('intersectionBetweenArrays mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking arrayIntersection to match',() =>{
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([1, 2, 3]);
      expect(complexOperations.intersectionBetweenArrays([0, 0, 0],[1, 1, 1])).toEqual([1, 2, 3])
    });
    it('mocking arrayIntersection with no elements',() =>{
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([0, 0, 0],[1, 1, 1])).toBe('There are not matching elements')
    });
    it('mocking undefined array',() =>{
        jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
        expect(complexOperations.intersectionBetweenArrays([1, 2, 3],[3, 4, 5])).toBe('The params should be arrays')
    });
  });
  
  describe('sortArrayOfObjectsByKey mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking sortArrayByKey to match',() =>{
        jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(
          [{color:'blue'},{color:'red'},{color:'yellow'}],'color');
        expect(complexOperations.sortArrayOfObjectsByKey([{key:1}, {key:2}, {key:3}], 'key'))
        .toEqual([{color:'blue'}, {color:'red'}, {color:'yellow'}])
    });
    it('mocking isArray as undefined',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey([{key:1}, {key:2}, {key:3}], 'key'))
      .toBe('The first param should be an array')
    });
    it('mocking isString as undefined',() =>{
      jest.spyOn(basicOperations, 'isString').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey([{key:1}, {key:2}, {key:3}], 'key'))
      .toBe('The second param should be an string')
    });
    it('mocking arrayElementsAreObjectWithKey as undefined',() =>{
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey([{key:1}, {key:2}, {key:3}], 'key'))
      .toBe('Some elements in the array does not have the key property')
    });
  });
  
  describe('numberOfOddAndEvenNumbers mocked',() =>{
    beforeEach(()=> {
        jest.restoreAllMocks()
    });
    it('mocking getOddNumbersFromArray to have 4 odds',() =>{
        jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1, 3, 5, 7]);
        expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toEqual(
          {odd:4, even:1})
    });
    it('mocking getEvenNumbersFromArray to have 5 even',() =>{
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2, 4, 6, 8, 10]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toEqual(
        {odd:2, even:5})
    });
    it('mocking even and odd',() =>{
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1, 3, 5, 7]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2, 4, 6, 8, 10]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toEqual(
        {odd:4, even:5})
    });
    it('mocking isArray',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toBe('The param should be an array')
    });
    it('mocking isNumber',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toBe('The array should have only numbers')
    });
  });
});


// INTEGRATION

describe('complexOperation - Integration Tests', () => {
  describe('checkEmail', () => {
    it('The Email should be a String', () => {
      expect(complexOperations.checkEmail()).toMatch('The email should be a string')
    });
    it('Email undefined verification', () => {
      expect(complexOperations.checkEmail(undefined)).toBe('The email should be an string')
    });
    it('Using numbers', () => {
      expect(complexOperations.checkEmail(1234567890)).toBe('The email should be an string') 
    });
    it('Using an invalid email address', () => {
      expect(complexOperations.checkEmail('NotValidEmail@asD')).toBe('The email is invalid')
    });
    it('Using a valid email address', () => {
      expect(complexOperations.checkEmail('email@example.com')).toBe('The email is valid')    
    });
  });

  describe('calculateArea', () => {
    it('calculate area of not supported figure', () => {
      expect(complexOperations.calculateArea('polygon',12,3)).toBe('polygon is not supported')
    });
    it('undefined figure', () => {
      expect(complexOperations.calculateArea(undefined,15,4)).toBe('undefined is not supported')
    });
    it('calculate area second number is a string', () => {
      expect(complexOperations.calculateArea('square', 2, 'asd')).toBe('number1 and number2 should be numbers')
    });
    it('function with missing parameters', () => {
      expect(complexOperations.calculateArea()).toMatch('undefined is not supported')
    });
    it('Using float numbers to calculate area', () => {
      expect(complexOperations.calculateArea('rectangle',3.5,10.1)).toBeCloseTo(35.35)
    });
    it('Using negative numbers to calculate area', () => {
      expect(complexOperations.calculateArea('square',-13,-7)).toBe(91)
    });
    it('Triangle with toBeGreaterThan', () => {
      expect(complexOperations.calculateArea('triangle',20,30)).toBeGreaterThan(290)
    });
    it('Using a string as first number', () => {
      expect(complexOperations.calculateArea('rectangle','notANumber',30)).toBe('number1 and number2 should be numbers')
    });
    it('Using a string as second number', () => {
      expect(complexOperations.calculateArea('square',15,'notANumber')).toBe('number1 and number2 should be numbers')
    });
    it('Testing circle area', () => {
      expect(complexOperations.calculateArea('circle',15)).toBeCloseTo(706.858)
    });
  });

  describe('sumGreaterThan', () => {
    it('Function missing parameters', () => {
      expect(complexOperations.sumGreaterThan()).toMatch('The params should be numbers')
    });
    it('Missing a number in parameters', () => {
      expect(complexOperations.sumGreaterThan(13, 8)).toBe('The params should be numbers')
    });
    it('Using strings instead of numbers', () => {
      expect(complexOperations.sumGreaterThan(9, 8, 'A')).toBe('The params should be numbers')
    });
    it('Using float numbers to be greater than third number', () => {
      expect(complexOperations.sumGreaterThan(13.5, 5.11, 10)).toBe('18.61 is greater than 10')
    });
    it('Using float numbers to be less than third number', () => {
      expect(complexOperations.sumGreaterThan(3.5, 2.1, 10)).toBe('5.6 is less than 10')
    });
    it('Using negative numbers', () => {
      expect(complexOperations.sumGreaterThan(-5, -18, 15)).toBe('-23 is less than 15')
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('Function missing parameters', () => {
      expect(complexOperations.intersectionBetweenArrays()).toMatch('The params should be arrays')
    });
    it('using strings as parameters', () => {
      expect(complexOperations.intersectionBetweenArrays('asD',[1, 2, 3])).toBe('The params should be arrays')
    });
    it('Using numbers as parameters', () => {
      expect(complexOperations.intersectionBetweenArrays(13, 15)).toBe('The params should be arrays')
    });
    it('using arrays with not matching elements', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 3, 5],[2, 4, 6])).toBe('There are not matching elements')
    });
    it('Using arrays with a matching element: food', () => {
      expect(complexOperations.intersectionBetweenArrays(['food', 4, 'car'],['dog', 'food', 6])).toContainEqual('food')
    });
    it('Using arrays with more than one matching element', () => {
      expect(complexOperations.intersectionBetweenArrays(['green', 'blue', 'yellow'],['green', 'blue', 'white'])).toEqual(['green', 'blue'])
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Function missing parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toMatch('The first param should be an array')
    });
    it('Undefined Array in parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined,'breed')).toBe('The first param should be an array')
    });
    it('Second parameter is undefined', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{breed: 'stray'},{breed: 'bulldog'},{breed: 'weimaraner'}],undefined))
        .toBe('The second param should be an string')
    });
    it('Using an array within more than one key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{car: 'Mercedes'},{car: 'BMW'},{driver: 'Harrison'}],'car'))
        .toBe('Some elements in the array does not have the car property')
    });
    it('Using a number instead of a string as a second parameter', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{color:'green'}, {color:'white'}, {color:'blue'}], 13))
        .toBe('The second param should be an string')
    });
    it('Key not matching with array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{country: 'Argentina'}, {country: 'Poland'}, {country: 'Germany'}], 'city'))
        .toBe('Some elements in the array does not have the town property')
    });
    it('Using an array with equal elements', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
      [{country: 'Argentina'}, {country: 'Argentina'}, {country: 'Argentina'}], 'country'))
        .toEqual([{country: 'Argentina'}, {country: 'Argentina'}, {country: 'Argentina'}])
    });
    it('Array sorted correctly with key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
      [{country: 'Argentina'}, {country: 'Poland'}, {country: 'Australia'}], 'country'))
        .toEqual([{country: 'Argentina'}, {country: 'Australia'}, {country: 'Poland'}])
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('Function missing parameters', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toMatch('The param should be an array')
    });
    it('Using a string instead of an array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('asdD')).toBe('The param should be an array')
    });
    it('Using an array with float numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1.3, 2.1, 3.6, 4.7, 5.5, 6.8])).toEqual(
        {odd:6, even:0})
    });
    it('Using an array with negative numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([-1, -2, -3, -4, -5])).toEqual(
        {odd:3, even:2})
    });
    it('Using an array with strings within', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['one', 2, 'three', 4, 'five'])).toBe('The array should have only numbers')
    });
    it('Using an array with integers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2, 5, 8, 10, 13, 15, 18, 21])).toEqual(
        {odd:4, even:4})
    });
  });
}); 