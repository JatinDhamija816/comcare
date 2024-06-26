import User from "../models/UserModel.js"

export const message = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!email || !name || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all details'
            });
        }

        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegx.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        const details = new User({ name, email, message });
        await details.save();

        return res.status(200).json({
            success: true,
            message: 'We will contact you soon',
            details
        });
    } catch (error) {
        console.error('Error ', error);
        return res.status(500).json({
            success: false,
            message: 'Error in Contact',
            error: error.message
        });
    }
}
