export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");

    if(arr.length == 5){
        // Trillions 
        return arr[0] + "." + arr[1].slice(0, 2) + "T";

    }else if (arr.length == 4){
        // Billions
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if(arr.length == 3){
        // Millions
        return arr[0] + "." + arr[1].slice(0, 2) + "M";

    }else if(arr.length == 2){
        // thousands
        return arr[0] + "." + arr[1].slice(0,2) + "K";
    }else{
        // Humdreds
        return number.toLocaleString();
    }
};


// 1,001,000 billion
// ["1" , "000"] K 
// arr.length = 2