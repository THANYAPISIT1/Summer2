
// Validator for admin

export const validateEmail = (email) => {
    return email.includes('@')
}

export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/

    // Check if the username length is within the specified range
    if (username.length < 4) {
        return "Username must be at least 4 characters long."
    }
    if (username.length > 20) {
        return "Username cannot exceed 20 characters."
    }

    // Check if the username matches the regex pattern
    if (!usernameRegex.test(username)) {
        return "Username can only contain letters and numbers."
    }

    return true
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/

    // Check if the password length is within the specified range
    if (password.length < 8) {
        return "Password must be at least 8 characters long."
    }
    if (password.length > 20) {
        return "Password cannot exceed 20 characters."
    }

    // Check if the password contains at least one lowercase letter
    if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase letter."
    }

    // Check if the password contains at least one uppercase letter
    if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase letter."
    }

    // Check if the password contains at least one digit
    if (!/(?=.*\d)/.test(password)) {
        return "Password must contain at least one digit."
    }

    // Check if the password contains at least one special character
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*)."
    }

    // Check if the password matches the regex pattern
    if (!passwordRegex.test(password)) {
        return "Password can only contain letters, numbers, and special characters (!@#$%^&*)."
    }

    return true
}
