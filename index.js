let errorCodes = require('./errorcodes/errorcodes.json'),
    decimalToHex = (number) => {
        if (number < 0) number = 0xFFFFFFFF + number + 1;
        return number.toString(16).toUpperCase();
    },
    hexToDecimal = (number) => {
        return parseInt((number - 0xFFFFFFFF) - 1);
    };

module.exports = {
    search: (code) => {
        if (!code) return null;

        let value, result = [];

        if (code.startsWith('0x')) value = hexToDecimal(Number(code));
        else value = Number(code);

        for (let category in errorCodes) {
            let errors = errorCodes[category];

            for (let i = 0; i < errors.length; i++) {
                if (Number(errors[i].value) === value) result.push(errors[i]);
            }
        }

        return result;
    }
};