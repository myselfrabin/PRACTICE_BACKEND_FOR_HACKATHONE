class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode; 
        this.data = data; 
        this.message = message; 
        this.success = statusCode < 400; 
    }
}


export {ApiResponse}; // now atlesat our api response is standarized 
                      // now we need to do about the error response