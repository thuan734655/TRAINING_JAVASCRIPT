let loop = (array, check) => {
    for(let i = 0; i < array.length; i++) {
        if(!check(array[i])) {
            return false;
        }
    }
    return true;
}

let some = (array, check) => {
    return !array.some(value => !check(value));
}