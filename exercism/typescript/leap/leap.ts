//function isOldLeapYear(inputYear: number): boolean {
//    return inputYear % 4 == 0 && inputYear % 100 != 0 || inputYear % 400 == 0
//}

function isLeapYear(year:number): boolean {
    if (divisibility(year, 400)){
        return true;
    }
    if (divisibility(year,100)){
        return false;
    }
    if (divisibility(year,4)){
        return true;
    }
    return false;
}

function divisibility(numerator:number, divisor:number): boolean{
    return numerator % divisor == 0;
}
export default isLeapYear