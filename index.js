// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     {year: "2014", result: "N/A"},
//     { year: "2013", result: "L"}

// ]

// function superbowlWin(record) {
//     // const finding = record.find( function (record) {
//     //     record.finding === "W"; // 
//     // });

//     // if(!!finding) {
//     //     return finding.year
//     // } else {
//     //     return undefined
//     // }
//     return !!result ? result.year : undefined;

// }


//    superbowlWin(record) {
//     const result = record.find( function (record) {
//          record.result === "W"
//     });
//     return !!result ? result.year : undefined;
//   }

superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
     
    if (result) {
        return result.year
    } else{
        return undefined;
    } 
  }