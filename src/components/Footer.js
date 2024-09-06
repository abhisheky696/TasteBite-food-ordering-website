const currYear = new Date().getFullYear();
const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-5 mt-5">
            <p className="pb-3 lg:ml-[10rem]">
                Copyright &copy; {currYear}, Made by <b>Abhishek Yadav</b>
            </p>
            <div className="flex flex-wrap bg-black lg:justify-around justify-left items-start gap-10">
                <div className="flex flex-col gap-3 cursor-pointer">
                    <p className="text-xl font-bold">About Us</p>
                    <p>Who we are</p>
                    <p>work with us</p>
                    <p>Blog</p>
                    <p>Investor Relations</p>
                    <p>Report Fraud</p>
                    <p>Press Kit</p>
                    <p>constact us</p>
                </div>
                <div className="flex flex-col gap-3 cursor-pointer">
                    <p className="text-xl font-bold">Constact Us</p>
                    <p>Help & Support</p>
                    <p>Ride With Us</p>
                    <p>Partner With Us</p>
                </div>
                <div className="flex flex-col gap-3 cursor-pointer">
                    <p className="text-xl font-bold">Legal</p>
                    <p>Terms and Condition</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
