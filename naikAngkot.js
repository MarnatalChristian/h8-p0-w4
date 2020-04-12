function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];

    // if (typeof arrPenumpang !== 'object' || typeof arrPenumpang === 'undefined') {
    //     return 'Tolong input value bertipe data array.';
    // }

    for(let i = 0; i < arrPenumpang.length; i++) {
        let obj = {
            penumpang: arrPenumpang[i][0]
        }
        let naik;
        let turun;
        for(let j = 0; j < rute.length; j++){
            if(rute[j] == arrPenumpang[i][1]) {
                obj.naikDari = rute[j];
                naik = j;
            }
            else if(rute[j] == arrPenumpang[i][2]) {
                obj.tujuan = rute[j];
                turun = j;
            }
        }
        obj.bayar = Math.abs(turun - naik) * 2000
        result.push(obj);
        
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]