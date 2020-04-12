function shoppingTime(memberId, money) {
    var produk = {
        sepatu_Stacattu : 1500000,
        Baju_Zoro : 500000,
        Baju_HN : 250000,
        Sweater_Uniklooh : 175000,
        Casing_Handphone : 50000
    };
    var sisa = money;
    var item = [];
    var obj = {};

    if(memberId == '' || memberId === undefined) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }
    else if(money < 50000) {
        return `Mohon maaf, uang tidak cukup`
    }
    else {
        if(sisa >= produk.sepatu_Stacattu) {
            sisa -= produk.sepatu_Stacattu;
            item.push(`Sepatu Stacattu`);
        }
        if(sisa >= produk.Baju_Zoro) {
            sisa -= produk.Baju_Zoro;
            item.push(`Baju Zoro`);
        }
        if(sisa >= produk.Baju_HN) {
            sisa -= produk.Baju_HN;
            item.push(`Baju H&N`);
        }
        if(sisa >= produk.Sweater_Uniklooh) {
            sisa -= produk.Sweater_Uniklooh;
            item.push(`Sweater Uniklooh`);
        }
        if(sisa >= produk.Casing_Handphone) {
            sisa -= produk.Casing_Handphone;
            item.push(`Cassing Handphone`);
        }
        obj.memberId = memberId;
        obj.money = money;
        obj.listPurchased = item;
        obj.changeMoney = sisa;
        return obj;
    }
    return obj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja