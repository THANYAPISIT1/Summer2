const validateTName = (templateName) => {

    if (!templateName.trim()) {
        return "Template's name is required."
    }

    if (templateName.length < 4) {
        return "Template's name must be at least 4 characters long."
    }
    if (templateName.length > 20) {
        return "Template's name cannot exceed 20 characters."
    }

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/
    if (!alphanumericRegex.test(templateName)) {
        return "Template's name can only contain letters and numbers."
    }

    return true
}

module.exports = validateTName