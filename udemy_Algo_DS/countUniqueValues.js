function countUniqueValues(array){
  // add whatever parameters you deem necessary - good luck!
//   let result = {};

//   for (let i = 0; i<array.length; i++) {
//       if(result[array[i]] === undefined) {
//         result[array[i]] = 'exist';
//       }
//   }

//   return Object.keys(result).length;
    if (array.length === 0 ) {
        return 0;
    }
    let i = 0;

    for(let j = 0; j < array.length; j++ ) {
        if(array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    }

    return (i + 1);
}