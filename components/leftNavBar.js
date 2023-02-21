import React from "react";
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import logo from '../public/Images/logo.png';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faGauge, faKhanda } from '@fortawesome/free-solid-svg-icons'


function LeftNavbar(){
    return(
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
                <Link href="/userList">
                    <Image src={logo} className={styles.logopic}/>
                </Link>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGauge} className={styles.dashicon}/>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendar} className={styles.calendaricon}/>
                        <a href="#">Calendar</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faKhanda} className={styles.boardicon} />
                        <a href="#">Boards</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNavbar;