function changeMe(arr) {
    var no = 0;
    var obj = {}

    if(arr.length == 0) {
        console.log(`""`)
    }
    else {
        for(let i = 0; i < arr.length; i++) {
            // console.log(arr[i][1])
            console.log(++no+'.'+' '+arr[i][0] + " " +arr[i][1]+':');
            obj = {
                firstName : arr[i][0],
                lastName : arr[i][1],
                gender : arr[i][2],
                age : 2020 - arr[i][3]
            }
            if(arr[i][3] > 2020 || arr[i][3] != Number(arr[i][0])) {
                obj.age = 'Invalid Birth Year'
            }
            console.log(obj) 
        }
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""