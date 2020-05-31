//https://csx.codesmith.io/units/callbacks/challenge-intersection

/* 
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
*/
function intersection(arrayOfArrays) {
    return arrayOfArrays.reduce((accum,cv) => 
            accum.filter(filteredEl => 
                cv.includes(filteredEl)));
}
  
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20]; // j
  const arr2 = [15, 88, 1, 5, 7]; // i
  const arr3 = [1, 10, 15, 5, 20]; // i
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


  let food = ['burger','pizza','ice cream', 'soda'];
  let special = ['pizza'];


  console.log(special.indexOf('pizza'));
  console.log(food.indexOf('pizza'))



  let coffeCup = 'empty';
  let teaCup = coffeCup;
  console.log('Coffe cup is', coffeCup);
  console.log('Tea cup is still', teaCup);

  teaCup = 'full';
  console.log('Tea cup is now', teaCup);
  console.log('')