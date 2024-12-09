const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
	try {
		const { email } = req.body;
		if (!email) {
			return res.status(400).json({
				success: false,
				message: "Email is required.",
			});
		}

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: `This Email: ${email} is not registered with us. Enter a valid email.`,
			});
		}

		const token = crypto.randomBytes(20).toString("hex");

		const updatedDetails = await User.findOneAndUpdate(
			{ email },
			{
				token,
				resetPasswordExpires: Date.now() + 3600000, // 1 hour
			},
			{ new: true }
		);

		// const url = `https://study-notion-lake.vercel.app/update-password/${token}`;
		const url = `http://localhost:3000/update-password/${token}`;

		await mailSender(
			email,
			"Password Reset",
			`Your link for password reset is ${url}. Please click this url to reset your password.`
		);

		res.json({
			success: true,
			message: "Email sent successfully. Please check your email to continue further.",
		});
	} catch (error) {
		console.error("Error sending reset password email:", error);
		return res.status(500).json({
			success: false,
			message: "An error occurred while sending the reset message.",
		});
	}
};

exports.resetPassword = async (req, res) => {
	try {
		const { password, confirmPassword, token } = req.body;

		if (!password || !confirmPassword || !token) {
			return res.status(400).json({
				success: false,
				message: "Password, confirm password, and token are required.",
			});
		}

		if (password !== confirmPassword) {
			return res.json({
				success: false,
				message: "Password and confirm password do not match.",
			});
		}

		const userDetails = await User.findOne({ token });
		if (!userDetails) {
			return res.status(404).json({
				success: false,
				message: "Token is invalid.",
			});
		}

		if (userDetails.resetPasswordExpires < Date.now()) {
			return res.status(403).json({
				success: false,
				message: "Token is expired. Please regenerate your token.",
			});
		}

		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ token },
			{
				password: encryptedPassword,
				token: null, // Clear the token after successful password reset
				resetPasswordExpires: null,
			},
			{ new: true }
		);

		res.json({
			success: true,
			message: "Password reset successful.",
		});
	} catch (error) {
		console.error("Error updating password:", error);
		return res.status(500).json({
			success: false,
			message: "An error occurred while updating the password.",
		});
	}
};
