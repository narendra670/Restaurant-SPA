class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statuszcode = statusCode;
    }
}
export const errorMiddleware = (err, req, res, next) => {
    error.message = error.message || "Internal Server Error";// if we don't get any message from error then we will send this message
    error.statusCode = error.statusCode || 500;
    return res.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
}
export default ErrorHandler;