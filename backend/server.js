const express = require('express');
const asyncHandler = require('express-async-handler');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

const app = express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// console.log('SMTP_HOST:', process.env.SMTP_HOST); 
// console.log('SMTP_PORT:', process.env.SMTP_PORT);
// console.log('SMTP_MAIL:', process.env.SMTP_MAIL);
// console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD);

const generateOTP = ()=> {
    let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    return otp;
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
    

});

app.post('/', asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const { email } = req.body;

        if (!email) {
            return res.status(400).send("Email is required");
        }

        const OTP = generateOTP();
        const emailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: "OTP Code for email verifiaction",
            text: `Your OTP Code for email verification is: ${OTP}`,
        };

        transporter.sendMail(emailOptions, function (error, info) {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).send("Error sending email");
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).send("Email sent successfully");
            }
        });
    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).send("Internal Server Error");
    }
}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// module.exports = { sendEmail }
