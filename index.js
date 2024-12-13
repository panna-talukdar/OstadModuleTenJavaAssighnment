//1
function calculateDifference(a,b){
    return a-b;
}
console.log("The Difference Between Two number is:",calculateDifference(50,43));

//2
function isOdd(number){
   
    return number % 2!==0;

}
console.log("Is 8 odd?:", isOdd(8)); 

//3
function findMin(array){
    return Math.min(array);
}
console.log("Smallest number from the array is :",findMin([4,6,2,9]));

//4
function filterEvenNumbers(array){
    return array.filter(number => number%2===0);
}
console.log("Even numbers:", filterEvenNumbers([1, 2, 3,5,6,7])); 

//5
function sortArrayDescending(array){
    return [array].sort((a,b) => b-a);
}
console.log("Sorted in Descending orders:",sortArrayDescending([3,5,7,2,8,9]));

//6
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased first letter:", lowercaseFirstLetter("Ostad"));

//7
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log("Average:", findAverage([5, 3, 9, 1, 4])); 

//8
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?:", isLeapYear(2024));



