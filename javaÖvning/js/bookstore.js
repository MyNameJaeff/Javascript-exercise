console.log("\nBookstore Code:");
const discounts = {
    "1": 0,
    "2": 0.05,
    "3": 0.10,
    "4": 0.20,
    "5": 0.25,
}
const cost = (books) => {
    let cost = 0;
    const extraArr1 = [];
    while(books.length>0){
        const extraArr = [];
        for(let i = 0; i < books.length; i++){
            const book = books[i];
            if(!extraArr.includes(book)){
                extraArr.push(book);
                books.splice(i, 1);
                i--;
            }
        }
        extraArr1.push(extraArr);
    }
    for (let j = 0; j < extraArr1.length; j++) {
        for (let k = j + 1; k < extraArr1.length; k++) {
            if (extraArr1[j].length === 5 && extraArr1[k].length === 3) {
                extraArr1[k].push(extraArr1[j].pop());
            }
        }
    }
    extraArr1.forEach(extraArr => {
        cost += extraArr.length * (800 - (800 * discounts[extraArr.length]));
    });
    return cost + " cents";
};
console.log(cost(["A", "A", "B" ,"B", "C", "C", "D", "E"]));