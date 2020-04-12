function cariMedian(arr) {
  var median = 0;

  //sort arr
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] > arr[i+ 1]) {
  //     let temp = arr[i]
  //     arr[i + 1] = temp
  //   }
  // }

  if(arr.length % 2 === 0) {
    median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }

  else {
    for(let i = 0; i < arr.length; i++) {
      median = arr[i / 2]
    }
  }
  return median

}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5