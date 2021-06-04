const romanToDecimal = r => {
    if (r === 'I')
        return 1;
    if (r === 'V')
        return 5;
    if (r === 'X')
        return 10;
    if (r === 'L')
        return 50;
    if (r === 'C')
        return 100;
    if (r === 'D')
        return 500;
    if (r === 'M')
        return 1000;
}

export const romanToDecimalConvert = (roman) => {
    let decimal = 0;
    let prev = roman[0];
    let counter = 0;

    for (let i in roman) {
        if (prev === roman[i]) {
            counter++;
        } else {
            prev = roman[i];
            counter = 1;
        }
        if (i > 0) {
            console.log(prev);
            console.log(counter);
            if (roman[i] === 'I') {
                console.log(counter);
                if (prev === 'I' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    decimal += 1;
                }
            } else if (roman[i] === 'V') {
                if (prev === 'V' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 5;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 4) {
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 4) {
                            decimal += 3;
                        } else {
                            decimal += 5;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }

            } else if (roman[i] === 'X') {
                if (prev === 'X' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 10;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 9) {
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 9) {
                            decimal += 8;
                        } else {
                            decimal += 10;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }

            } else if (roman[i] === 'L') {
                if (prev === 'L' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 50;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 50) {
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 40) {
                            decimal += 30;
                        } else {
                            decimal += 50;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }
            } else if (roman[i] === 'C') {
                if (prev === 'C' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 100;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 90) {
                        console.log(1);
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 90) {
                            console.log(2);
                            decimal += 80;
                        } else {
                            console.log(3);
                            decimal += 100;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }

            } else if (roman[i] === 'D') {
                if (prev === 'D' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 500;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 400) {
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 400) {
                            decimal += 300;
                        } else {
                            decimal += 500;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }

            } else if (roman[i] === 'M') {

                if (prev === 'M' && counter > 3) {
                    alert('Invalid symbol !!!');
                    break;
                } else {
                    if (romanToDecimal(roman[i - 1]) >= romanToDecimal(roman[i])) {
                        decimal += 1000;
                    } else if ((romanToDecimal(roman[i]) - decimal) === 900) {
                        if ((romanToDecimal(roman[i]) - romanToDecimal(roman[i - 1])) === 900) {
                            decimal += 800;
                        } else {
                            decimal += 1000;
                        }
                    } else {
                        alert('Invalid symbol !!!');
                        break;
                    }
                }
            } else {

            }
        } else {
            decimal += romanToDecimal(roman[i]);
        }
    }

    return decimal;
};