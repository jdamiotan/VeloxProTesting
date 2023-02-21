import React from "react";
import styles from "../styles/Home.module.css";
import { Line } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';


const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

function Content(){
    return(
        <>
            <div className={styles.contentcontainer}>
                <div className={styles.contentwrapper}>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Companies</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Department</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Task</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Profile</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.charts}>
                    <div className={styles.charts}>
                        <h2>Sales</h2>
                        <Line data={data}/>
                    </div>
                    <div className={styles.charts}>
                        <h2>Customers Arrived</h2>
                        <Line data={data}/>
                    </div>
                </div>
            </div>
            

        </>
    );
}




export default Content;