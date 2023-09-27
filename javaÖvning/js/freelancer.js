console.log("\nFreelancer Code:");
const printOut = what => console.log(what);
const ratePerDay = rate => rate*8;
printOut(ratePerDay(89));

const daysInBudget = (budget, rate) => Math.round(budget/ratePerDay(rate));
printOut(daysInBudget(20000, 89));

const priceWithMonthlyDiscount = (rate, days, discount) => {
    const billableDaysInMonth = 22;
    const dayRate = ratePerDay(rate);
    const dayRateDiscounted = dayRate * discount;
    const remainingDays = days % billableDaysInMonth;
    const remainingDaysPrice = remainingDays * dayRate;
    const discountedDays = days - remainingDays;
    const discountedDaysPrice = discountedDays * (dayRate - dayRateDiscounted);

    return Math.ceil(discountedDaysPrice + remainingDaysPrice);
};
printOut(priceWithMonthlyDiscount(89, 230, 0.42));