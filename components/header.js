import React from "react";
import styles from "../styles/Home.module.css";
import USER from "../public/images/user.png";
import Image from 'next/image'

function Header(){
    return(
        <>
            <div className={styles.headcontainer}>
                <div className={styles.headwrapper}>
                    <div className={styles.title}>
                        <h2>
                            Hello, <span>SessionUser</span>
                        </h2>
                        <p>Welcome to VeloxPro</p>
                    </div>
                </div> 
                <div className={styles.profile}>
                    <Image src={USER} className={styles.image}/>
                </div>
            </div>
        </>
    );
}

export default Header;