export const numeroPrimo = (num: number) => {
    let div = 2;
    while(num%div != 0) {
        div++;
    }
    if(num == div) {
        console.log("Número Primo!");
        return true;
    } else {
        console.log("Número NÃO primo!");
        return false;
    }
}