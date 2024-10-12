const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a className="pl-2" href="https://github.com/FareedNizami1">
                        <img
                            src="/assets/github.svg"
                            alt="github"
                            className="w-4/5 h-4/5"
                        />
                    </a>
                </div>
                <div className="social-icon">
                    <a className="pl-1.5" href="https://www.linkedin.com/in/syed-fareed-alam-nizami/">
                        <img
                            src="/assets/linkedin.svg"
                            alt="LinkedIn"
                            className="w-4/5 h-4/5"
                        />
                    </a>
                </div>
            </div>
            <div className="text-white-500 flex gap-3">
                <p className="text-white-500">© 2024</p>
                <p className="text-white-500">Fareed Nizami</p>
                <p className="text-white-500">All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
