export const decimalToRomanConverter = (decimal) => {
    let roman = '';
    let sum = decimal;
    while (parseInt(sum) > 0) {
        let length = sum.length;
        if (length > 5) {
            alert('Invalid symbol !!!')
        }
        else if (length === 4) {
            roman += 'M';
            if (parseInt(sum) > 4999) {
                alert('Invalid symbol !!!')
            } else {
                sum = (parseInt(sum) - 1000).toString();
            }
        } else if (length === 3) {
            if (parseInt(sum) >= 900) {
                roman += 'CM'
                sum = (parseInt(sum) - 900).toString();
            } else if (parseInt(sum) < 900 && parseInt(sum) >= 500) {
                roman += 'D';
                sum = (parseInt(sum) - 500).toString();
            } else if (parseInt(sum) >= 400 && parseInt(sum) < 500) {
                roman += 'CD';
                sum = (parseInt(sum) - 400).toString();
            } else if (parseInt(sum) < 500 && parseInt(sum) >= 100) {
                roman += 'C';
                sum = (parseInt(sum) - 100).toString();
            } else { }
        } else if (length === 2) {
            if (parseInt(sum) >= 90) {
                roman += 'XC';
                sum = (parseInt(sum) - 90).toString();
            } else if (parseInt(sum) < 90 && parseInt(sum) >= 50) {
                roman += 'L';
                sum = (parseInt(sum) - 50).toString();
            } else if (parseInt(sum) >= 40 && parseInt(sum) < 50) {
                roman += 'XL';
                sum = (parseInt(sum) - 40).toString();
            }
            else if (parseInt(sum) >= 10 && parseInt(sum) < 40) {
                roman += 'X';
                sum = (parseInt(sum) - 10).toString();
            } else {
            }
        } else if (length === 1) {
            if (parseInt(sum) === 9) {
                roman += 'IX';
                sum = (parseInt(sum) - 9).toString();
            } else if (parseInt(sum) >= 5 && parseInt(sum) < 9) {
                roman += 'V';
                sum = (parseInt(sum) - 5).toString();
            } else if (parseInt(sum) === 4) {
                console.log('IV');
                roman += 'IV';
                sum = (parseInt(sum) - 4).toString();
            } else if (parseInt(sum) >= 1 && parseInt(sum) < 4) {
                roman += 'I';
                sum = (parseInt(sum) - 1).toString();
            } else {
            }
        }
    }
    return roman;
}
