const validateBName = (BName) => {

    if (!BName.trim()) {
        return "Broadcast's name is required."
    }

    if (BName.length < 4) {
        return "Broadcast's name must be at least 4 characters long."
    }
    if (BName.length > 20) {
        return "Broadcast's name cannot exceed 20 characters."
    }

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/
    if (!alphanumericRegex.test(BName)) {
        return "Broadcast's name can only contain letters and numbers."
    }

    return true
}

module.exports = {
    validateBName,
}