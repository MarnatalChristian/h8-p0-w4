function getShoppers (item, shoppers){
    let pembeli = []
    let stok = item[2]
    let namaBarang = item[0]
    for(let i = 0; i < shoppers.length; i++){
        if(shoppers[i].product == namaBarang){
            if(stok >= shoppers[i].amount){
                stok -= shoppers[i].amount
            pembeli.push(shoppers[i].name);
            }
        }
    }
    return pembeli
}

function getTotalProfit(stock, sisa, harga){

let hasil = (stock - sisa)*harga
return hasil

}
function getLeftover(item, shoppers){
    let stok = item[2]
    // let price = item[1]
    let namaBarang = item[0]
    for(let i = 0; i < shoppers.length; i++){
        if(shoppers[i].product == namaBarang ){
            if(stok >= shoppers[i].amount){
                stok -= shoppers[i].amount
            }
        }
    }
    return stok
}



function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    let temp = []
    let hasil = [{
        product:listBarang[0][0],
        shoppers:getShoppers(listBarang[0], shoppers),
        leftOver:getLeftover(listBarang[0], shoppers),
        totalProfit:getTotalProfit(listBarang[0][2], getLeftover(listBarang[0], shoppers), listBarang[0][1])
    },{
        product:listBarang[1][0],
        shoppers:getShoppers(listBarang[1], shoppers),
        leftOver:getLeftover(listBarang[1], shoppers),
        totalProfit:getTotalProfit(listBarang[1][2], getLeftover(listBarang[1], shoppers), listBarang[1][1])
    },{
        product:listBarang[2][0],
        shoppers:getShoppers(listBarang[2], shoppers),
        leftOver:getLeftover(listBarang[2], shoppers),
        totalProfit:getTotalProfit(listBarang[2][2], getLeftover(listBarang[2], shoppers), listBarang[2][1])
    
  }]
return hasil
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]