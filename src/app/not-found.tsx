import React from "react";
import styles from "./not-found.module.css";

const NotFoundPage = () => {
  return (
    <section className={`${styles.page_40} text-black h-max`}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center">404</h1>
              </div>
              <div className={styles.contant_box_404}>
                <h3 className="text-5xl">Look like you are lost</h3>
                <a href="/" className={styles.link_404}>
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
