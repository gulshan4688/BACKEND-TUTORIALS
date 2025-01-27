const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch(err => next(err))
    }
}
export default asyncHandler;


// const asyncHandler =()=>{}    //! normal funtion
// const asyncHandler =(func)=>{()=>{}}  //* higher order funtion
// const asyncHandler =(func)=>{async()=>{}} // & higher order func which is async now

// !this asyncHandler is now a wrapper and fn is the funtion which will be passed into it
// since its a try and cathc block instead of this we will be using .then promisses above 
/*const asyncHandler =(fn)=> async()=>{
    try {
        await fn(req, res, next )
    } catch (error) {
        res.status(error.code ||500).json({
            success:false,
            message:error.message
        })   
    }
}*/