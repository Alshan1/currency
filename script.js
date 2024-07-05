var selectedValue = ''; 

function exchange() {
    var dollar = parseFloat(document.getElementById("dollar").value);
    var rupees = parseFloat(document.getElementById("rupees").value);
    var rateInrToSar = 22.26;
    var rateInrToUsd = 83.50;
    var rateInrToGbp = 99.61; // Updated GBP to INR conversion rate
    var rateInrToAed = 19.00;
    var rateInrToMyr = 18.11; // Updated MYR to INR conversion rate

    if (isNaN(dollar) || dollar === 0) {
        switch (selectedValue) {
            case 'SAR':
                rupees = rupees / rateInrToSar;
                break;
            case 'GBP':
                rupees = rupees / rateInrToGbp;
                break;
            case 'AED':
                rupees = rupees / rateInrToAed;
                break;
            case 'MYR':
                rupees = rupees / rateInrToMyr;
                break;
            default:
                rupees = rupees / rateInrToUsd;
                break;
        }
        document.getElementById("dollar").value = rupees.toFixed(2);
    } else {
        switch (selectedValue) {
            case 'SAR':
                rupees = dollar * rateInrToSar;
                break;
            case 'GBP':
                rupees = dollar * rateInrToGbp;
                break;
            case 'AED':
                rupees = dollar * rateInrToAed;
                break;
            case 'MYR':
                rupees = dollar * rateInrToMyr;
                break;
            default:
                rupees = dollar * rateInrToUsd;
                break;
        }
        document.getElementById("rupees").value = rupees.toFixed(2);
    }
}

function clearFields() {
    document.getElementById('dollar').value = '';
    document.getElementById('rupees').value = '';
}

function onSelectcurrency() {
    selectedValue = document.getElementById("currencySelect").value;
    console.log(selectedValue, "Selected currency");
}
