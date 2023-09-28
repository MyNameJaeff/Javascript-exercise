console.log("\nAllergies Code:\n");
const allergens = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1,
};
const allergicTo = (score) => {
  let allergies = [];
  let egg = false; // TEMP OR PERMA ????
  if (score > 255) {
    score -= 256 * Math.round(score / 256);
  }
  if (score % 2 != 0) {
    egg = true;
    allergies.push(getKeyByValue(allergens, 1));
    score--;
  }
  Object.keys(allergens).forEach((key) => {
    if (score % 2 == 0) {
      if (score != 0) {
        if (score - allergens[key] >= 0) {
          score -= allergens[key];
          allergies.push(getKeyByValue(allergens, allergens[key]));
        }
      }
    }
  });
  if (egg) { // If not code exists egg goes to bad spot in arr
    allergies.push(allergies.shift());
  }
  return allergies.reverse();
};
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
console.log(allergicTo(34));
console.log(allergicTo(19));
console.log(allergicTo(262));
console.log(allergicTo(35));
console.log(allergicTo(515));