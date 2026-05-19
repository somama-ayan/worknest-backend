import jwt from "jsonwebtoken"

export const generateToken = (userId) => {
    // const token = jwt.sign(
    return jwt.sign(
        {
            id: userId
        },
        process.env.JWT_SECRET,
        {
            "expiresIn": "7d"
        }

    )
}