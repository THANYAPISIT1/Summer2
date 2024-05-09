const validateCusName = (customerName) => {

    if (!customerName.trim()) {
        return "Customer's name is required."
    }

    if (customerName.length < 4) {
        return "Customer's name must be at least 4 characters long."
    }
    if (customerName.length > 50) {
        return "Customer's name cannot exceed 50 characters."
    }

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/
    if (!alphanumericRegex.test(customerName)) {
        return "Customer's name can only contain letters and numbers."
    }

    return true
}

const validateCusEmail = (customerEmail) => {
    return customerEmail.includes('@')
}

module.exports = {
    validateCusName,
    validateCusEmail

}