function tukarBesarKecil(kalimat) {
    var arr = [];
    

    for(let i = 0; i < kalimat.length; i++) {
        arr.push(kalimat[i]);
    }
    var result = '';
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] == arr[j].toUpperCase()) {
            result += arr[j].toLowerCase();
        }
        else {
            result += arr[j].toUpperCase();
        }
    }
    return result
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"