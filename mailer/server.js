const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

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

router.post("/contact", (req, res) => {
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
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent"});
        }
    });
});
