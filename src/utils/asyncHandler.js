const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

//can also write as try-catch block

/*
asyncHandler is a higher-order function (a function that returns another function).
It wraps an asynchronous route/controller function and automatically catches any errors,
passing them to Express's error handling middleware via next(err).

*/