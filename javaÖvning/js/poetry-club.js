console.log("\nPoetry club Code:\n");
const frontDoorResponse = string => string.trim()[0];
console.log(frontDoorResponse('Stands so high'));

const frontDoorPassword = string => {
    string = string.toLowerCase();
    var fixedstring = string.charAt(0).toUpperCase() + string.slice(1);
    return fixedstring;
};
console.log(frontDoorPassword('SHIRE'));
console.log(frontDoorPassword('shire'));

const backDoorResponse = string => {
    string = string.trim();
    return string.charAt(string.length-1);
};
console.log(backDoorResponse('Stands so high'));

console.log(backDoorResponse('Stands so high   '));

const backDoorPassword = string => {
    string = frontDoorPassword(string);
    let lowercased = string.toLowerCase();
    if(!lowercased.endsWith("please")){
        string += ", please";
    }
    return string;
}
console.log(backDoorPassword("horse"));