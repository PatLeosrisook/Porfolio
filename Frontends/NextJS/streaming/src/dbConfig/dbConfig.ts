import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!) 
        const connection = mongoose.connection;

        connection.on('conected', () => {
            console.log("Mongoose connected")
        })
        connection.on('error' , error => {
            console.log("Mongoose Error:" , error )
            process.exit(1);
        })
    } catch (error) {
        console.log("Connection gone wrong", error)
    }
}