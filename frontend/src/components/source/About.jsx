import classes from "../style/About.module.css";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function About(){
    return (
        <>
            <div className={classes.seperateContent}>
                <div><img src="image/me.png" alt="me" className={classes.mePic} /></div>
                <div className={classes.content}>
                    <div className={classes.greeting}>Hi, I&apos;m Theerapat Honghirun!</div>
                    <div className={classes.profile}>A new graduated student from Information Engineering, KMITL</div>
                    <ul>
                        <li>What is this website</li>
                        <div>This website is use for booking seats in Nightspot that has been registered.I recreated this website from group-project when 
                            I was in university in order to developed my skills and learn about how web-application works. </div>
                        <li>What tools do this website use</li>
                        <div> I use ReactJS to created Frontend section and NodeJS for RestAPI in Backend section. Both are popular famous tools that being 
                            use to create web-application, I was very exited to learn these framwork and decided to develop this project with things I have 
                            learned by myself.</div>
                            <li>How long does it takes to build this website</li>
                            <div>I take half a month to learn essential things about React and NodeJs and other half to created this website. I also have some 
                                experiences I have gained from university so it is not too difficult to learn these tools but I also have many things to discover so I have to keep learning.</div>
                    </ul>
                </div>
            </div>
            <div className={classes.contact}>
                <Link to='https://www.linkedin.com/in/theerapat-honghirun-1412b1218/' target='_blank' className={classes.linkedin}>
                    <BsLinkedin />
                </Link>
                <Link to='mailto:theerapat.hhr@gmail.com' className={classes.mail}>
                    <HiMail />
                </Link>
            </div>
            
        </>
    );
}

export default About;