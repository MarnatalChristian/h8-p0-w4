function digitPerkalianMinimum(angka) {
    var times;
    var result =0;
    var lenTimes = [];
    for(let i = 0; i <= angka; i++) {
      for(let j = angka; j >= i; j--) {
        if(i * j === angka) {
          times = `${i}${j}`;
          lenTimes.push(times.length)
        }

      }
    }
    for(let i = 0; i < lenTimes.length; i++) {
      for(let j = 0; j < lenTimes.length; j++) {
        if(lenTimes[i] < lenTimes[j] || lenTimes[i] == lenTimes[j]) {
          result = lenTimes[i]
        }
      }
    }
    return result
  }

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2