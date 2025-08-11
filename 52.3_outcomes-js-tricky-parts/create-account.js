function createAccount(pin, amount) {
    let currentPin = pin;
    let balance = amount || 0;

    function checkPin(inputPin) {
        return inputPin === currentPin;
    }

    return {
        checkBalance(inputPin) {
            if (!checkPin(inputPin)) return "Invalid PIN.";
            return `$${balance}`;
        },
        deposit(inputPin, depositAmount) {
            if (!checkPin(inputPin)) return "Invalid PIN.";
            balance += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
        },
        withdraw(inputPin, withdrawAmount) {
            if (!checkPin(inputPin)) return "Invalid PIN.";
            if (withdrawAmount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
        },
        changePin(oldPin, newPin) {
            if (!checkPin(oldPin)) return "Invalid PIN.";
            currentPin = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
