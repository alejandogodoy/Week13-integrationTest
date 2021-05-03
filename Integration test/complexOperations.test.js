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

  describe('sumGreaterThan function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it('function isNumber is false', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
      expect(complexOperations.sumGratherThan(0, 0, 0)).toBe(
        'The params should be numbers'
      )
    })
    it('return of sum is 13  and then is greater than 10', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue('13')
      expect(complexOperations.sumGratherThan(0, 0, 10)).toBe(
        '13 is grather than 10'
      )
    })
    it('return of sum is 9 and then is less than 16', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue('9')
      expect(complexOperations.sumGratherThan(0, 0, 16)).toBe('9 is less than 16')
    })
  })
  
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
    it('email should be a string', () => {
      expect(complexOperations.checkEmail()).toMatch('The email should be an string')
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
    it('Using a string as first number', () => {
      expect(complexOperations.calculateArea('rectangle','notANumber',30)).toBe('number1 and number2 should be numbers')
    });
    it('Using a string as second number', () => {
      expect(complexOperations.calculateArea('square',15,'notANumber')).toBe('number1 and number2 should be numbers')
    });
    it('calculate area of circle with 3 of radius not equal to 18', () => {
      expect(complexOperations.calculateArea('circle', 3)).not.toEqual(18)
    });
  });

  describe('sumGreaterThan', () => {
    it('Function missing parameters', () => {
      expect(complexOperations.sumGratherThan()).toMatch('The params should be numbers')
    });
    it('Missing a number in parameters', () => {
      expect(complexOperations.sumGratherThan(13, 8)).toBe('The params should be numbers')
    });
    it('Using strings instead of numbers', () => {
      expect(complexOperations.sumGratherThan(9, 8, 'A')).toBe('The params should be numbers')
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
        .toBe('Some elements in the array does not have the city property')
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
    it('Using an array with strings within', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['one', 2, 'three', 4, 'five'])).toBe('The array should have only numbers')
    });
  });
}); 