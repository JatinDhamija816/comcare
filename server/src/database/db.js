import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DB connected ')
    } catch (error) {
        console.error('Error in DB ', error)
    }
}

export default ConnectDB