// const express = require("express");
// const router = express.Router();
// const cors = require("cors");

exports.handler = function(event, context, callback) {

    const nodemailer = require("nodemailer");
    const requestBody = JSON.parse(event.body);
    const emailBody =

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    contactEmail.verify((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    const mail = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html:  `<p>First name: ${req.body.firstName}</p>
                <p>Last name: ${req.body.lastName}</p>
                <p>Email: ${req.body.email}</p>
                <p>Phone: ${req.body.phone}</p>
                <p>Message: ${req.body.message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log("error: ", error);
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message,
                })
            };
            callback(null, response);
        } else {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: `Message Sent`
                }),
            };
            callback(null, response);
        }
    });
}
