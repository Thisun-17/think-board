import ratelimit from "../config/upstash.js";  


const ratelimiter = async (req, res, next) => {
    try {
        // Check if the request is allowed
        const { success } = await ratelimit.limit("my-limit-key");
        
        if (!success) {

            return res.status(429).json({
                message: 'Too many requests, please try again later.'
            });     
        }
        next();
    } catch (error) {
        console.error('Rate limiter error:', error);
        next(error);
    }
 };

export default ratelimiter;