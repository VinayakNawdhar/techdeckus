import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ajithnadar007@gmail.com",
    pass: 'cfkpngnspjxnxyyw',
  },
});
export default async function handler(req, res) {
  if (req.method == "POST") {
    const request = req.body
    console.log(request)
    try {
      await transporter.sendMail({
        from: "ajithnadar007@gmail.com",
        to: "info@techdeckus.com",
        subject: "TechDeck US Contact Us",
        html : `
            <h3> Name :</h3> <h4>${request.name}</h4>
            <h3> Email :</h3> <h4>${request.email}</h4>
            <h3> Message :</h3> <h4>${request.message}</h4>
        `
      });
        res.json({ message: "success" });
    } catch (error) {
      console.log(error);
       res.json({ message: "failure" });
    }
  }
}
