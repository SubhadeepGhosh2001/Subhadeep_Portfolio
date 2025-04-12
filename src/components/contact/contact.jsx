import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:subhadeepghosh1270@gmail.com">subhadeepghosh1270@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="www.linkedin.com/in/subhadeep-ghosh-a068a0250">www.linkedin.com/in/subhadeep-ghosh-a068a0250</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/SubhadeepGhosh2001">https://github.com/SubhadeepGhosh2001</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("resume/resume.png")} alt="Resume icon" />
                    <a href="/assets/resume/Subhadeep_Resume.pdf" download>
                        Download Resume
                    </a>
                </li>

            </ul>
        </footer>
    );
};