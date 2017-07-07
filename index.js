let errorCodes = require('./errorcodes/errorcodes.json'),
    decimalToHex = (number) => {
        if (number < 0) number = 0xFFFFFFFF + number + 1;
        return number.toString(16).toUpperCase();
    },
    hexToDecimal = (number) => {
        return parseInt((number - 0xFFFFFFFF) - 1);
    };

exports.esriErrorCodes = () => {
    return {
        search: (code) => {
            if (!code) return null;

            let value, result = [];

            if (code.startsWith('0x')) value = hexToDecimal(code);
            else value = decimalToHex(code);

            for (let category in errorCodes) {
                let errors = errorCodes[category];
                errors.forEach((element) => {
                    if (element.value === value) {
                        result.push(element);
                    }
                });
            }

            return result;
        }
    };
};