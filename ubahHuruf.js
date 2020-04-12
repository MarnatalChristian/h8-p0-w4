function ubahHuruf(kata) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for(let i = 0; i < kata.length; i ++) {
        for(let j = 0; j < alpha.length; j++) {
            if(kata[i] == alpha[j]) {
                if(j == alpha.length - 1){
                    result += alpha[0];
                }
                else {
                    result += alpha[j + 1]
                }
                
            }
        }
    }
    return result

}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu