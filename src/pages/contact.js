import "../components/styles/contact.css"

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center pt-10">
                <h1 className="text-3xl">Contact Me</h1>
                <div className="w-24 h-1 bg-Line rounded-sm mt-1"></div>
            </div>
            <div className="contact-cont flex place-content-center">
                <div className=" form flex flex-col items-center pt-10">
                    <form action="https://formspree.io/f/xpzgprqr" method="POST">
                        <div className="input-box">
                            <input type="text" name="name" id="name" required="required" placeholder="Name"/>
                            <label htmlFor="name">Name<span>*</span></label>
                        </div>
                        <div className="input-box">
                            <input type="email" name="_replyto" id="email" required="required" placeholder="Email here"/>
                            <label htmlFor="email">Email<span>*</span></label>
                        </div>
                        <div className="input-box">
                            <textarea type="textbox" name="message" id="message" required="required" placeholder="Your message" spellCheck="false"/>
                            <label className="msg-label" htmlFor="message">Message<span>*</span></label>
                        </div>
                        <button className="btn" value="send">
                            <span className="italic font-medium">Send Email</span>
                        </button>
                    </form>
                </div>
                <div className="social-cont w-32 pt-10 place-content-center ">
                    <p className="pt-1 text-center">Discover my socials here!</p>
                    <div className="icon-cont flex place-content-center pt-4">
                        <ul className="grid gap-5 text-4xl">
                            <li className="socials">
                                <a href="https://github.com/Meaetin" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"></i>
                                </a>
                            </li>
                            <li className="socials text-3xl">
                                <a href="https://codepen.io/Meaetin" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-codepen"></i>
                                </a>
                            </li>
                            <li className="socials">
                                <a href="https://www.instagram.com/meaetiin/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="socials">
                                <a href="https://www.linkedin.com/in/martin-teo" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square"></i>
                                </a>
                            </li>
                            <li className="socials">
                                <a href="https://www.facebook.com/meaetin/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li className="socials text-3xl">
                                <a href="mailto:martinteoyz@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    );
}
 
export default Contact;