class ApiError extends Error {
    constructor(
        // jo bhi  constructor ko call karega to ye 4 chize to dena hi hoga agar message khali hai to apna default messag bhej hi diya humne 
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export default ApiError;