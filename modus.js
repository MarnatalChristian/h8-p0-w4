function cariModus(arr) {
    var obj = {};
    var maxFreq = 0;

    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;  
        if(obj[arr[i]] > maxFreq) {
            maxFreq = obj[arr[i]];
        }
    }
    // console.log(maxFreq)
    // console.log(obj)

    if(arr.length === maxFreq || maxFreq <= 1) {
        return -1
    }   
    for(let i = 0; i < arr.length; i++) {
        for(let key in obj) {
            // console.log(arr[i])
            // console.log(key)
            // console.log(obj[key])
            if(arr[i] === parseInt(key) && obj[key] === maxFreq) {
                arr = arr[i]
                break;
            }
        }
    }
    
    return arr
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1