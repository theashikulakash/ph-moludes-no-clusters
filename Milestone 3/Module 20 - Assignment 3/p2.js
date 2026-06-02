function validOtp(otp) {
    if (typeof otp !== 'string') // challenge - invalid if not a string value
        {
        return "Invalid";
    }
    const isLengthValid = otp.length === 8; // Validation must be 8
    const hasCorrectPrefix = otp.startsWith("ph-"); // Validation otp must star with ph-

    if (isLengthValid && hasCorrectPrefix) // both the conditions are ok then true else print false
        {
        return true;
    } else {
        return false;
    }
}

// console.log(validOtp("ph-12345"))
// console.log(validOtp("abc-12345"))
// console.log(validOtp(["ph-10985"]))