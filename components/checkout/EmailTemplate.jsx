
const EmailTemplate = ({ user }) => {
    return (
        <div className="text-xl">
            <p>Hi <span className="font-bold">{`${user?.name}`}</span>,</p> 
            <p>Thank you for choosing Organic Store for your organic needs! We’re thrilled to have you as a valued customer, and we appreciate your trust in our products.</p>

            <p>Your order  has been successfully processed and will be on its way to you shortly. We’re committed to delivering the highest quality, sustainably sourced products right to your doorstep.</p> 

            <p>If you have any questions or need assistance, feel free to reach out to our support team at organicstoreteam@gmail.com.
                Thank you for supporting our commitment to a healthier, greener world!</p>  
            <p>Warm regards,<br /> Organic Store Team.</p>
        </div>
    );
};

export default EmailTemplate;