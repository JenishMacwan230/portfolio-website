import { footer } from "framer-motion/client";

export default function Footer() {

    return (
        <footer>
            <div id="foot">
                <div className="first">
                    <h2>
                        Jenish's Portfolio
                    </h2>
                    <h1>
                        Thank you for visiting. Keep rising, keep progressing.
                    </h1>
                    <div className="ic">
                   
                       <a  target = "_blank" href="https://github.com/JenishMacwan230">  <i class="fa-brands fa-github"></i></a>
                          <a target = "_blank" href="https://www.linkedin.com/in/jenish-macwan-419167327">  <i class="fa-brands fa-linkedin"></i></a>
                        <a  target = "_blank" href="https://www.instagram.com/_jenish230_/"> <i class="fa-brands fa-instagram"></i></a>
                       
                    </div>
                </div>
                <div className="second">
                    <h2>
                        Quick Links
                    </h2>
                    <ul>
                        <li><a href="#home"> > Home</a></li>
                        <li><a href="#about">> About</a></li>
                        <li><a href="#skills">> Skills</a></li>
                        <li><a href="#education">> Education</a></li>
                        <li><a href="#projects">> Projects</a></li>
                        <li><a href="#contact">> Contact</a></li>
                    </ul>

                </div>
                <div className="third">
                    <h2>
                        Info
                    </h2>
                    <ul>
                        <li> <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:jenishmacwan230@gmail.com">jenishmacwan230@gmail.com</a></li>
                        <li> <i class="fa-solid fa-phone"></i>
                        <a href="tel:+919328135511">+91 9328135511</a></li>
                        <li> <i class="fa-solid fa-location-dot"></i>
                        <a target="_blank" href="https://www.google.com/maps/place/Bilimora,+Gujarat/@20.7639126,72.9673591,16z/data=!4m6!3m5!1s0x3be0ee423c0a4b2f:0xe413d0603fe2891c!8m2!3d20.7702311!4d72.9823779!16s%2Fg%2F11fn8pt9hq?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">Bilimora ,Gujarat ,India - 396321</a>
                        </li>
                    </ul>

                </div>
                
            </div>
            <div className="cr">
                <i class="fa-solid fa-copyright"></i>
             2025 Macwan Jenish. All rights reserved.
            </div>
            
        </footer>
    );
}