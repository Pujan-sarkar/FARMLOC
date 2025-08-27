const nodemailer = require('nodemailer')
const { render } = require('@react-email/components');
const OwnerEmail = require('../../loaded/templates/ownerform.js').default;
const UserEmail = require('../../loaded/templates/userform.js').default;

const SendEmail = async (req ,res)=>{
    const {name , email , message} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // your email
                pass: process.env.EMAIL_PASS, // your email password or app password
            },
        });

        // Verify the connection configuration
        await transporter.verify();

        // Render the email templates with the form data
        const ownerEmailHtml = await render(OwnerEmail({ name, email, message }));
        const userEmailHtml = await render(UserEmail({ name }));

        // Send email to the site owner
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: process.env.OWNER_EMAIL, // list of receivers
            subject: `New Contact Form Submission`, // Subject line
            html: ownerEmailHtml, // html body
        });

        // Send confirmation email to the user
        await transporter.sendMail({
            from: `"FarmLoc" <${process.env.EMAIL_USER}>`, // sender address
            to: email, // user's email
            subject: 'Thank you for contacting FarmLoc', // Subject line
            html: userEmailHtml, // html body
        });

        res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ success: false, message: 'Failed to send emails' });
    }
}

module.exports = {SendEmail}