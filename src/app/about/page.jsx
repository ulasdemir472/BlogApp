import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutImgContainer}>
        <Image
          src="/apps.jpg"
          width={1200}
          height={200}
          alt="about image"
          className={styles.imgAbout}
        />
        <div className={styles.imageText}>
          <h1>Digital Storytellers</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className={styles.textAbout}>
        <div className={styles.aboutItem}>
          <h1 className={styles.aboutTitle}>Who are we?</h1>
          <p className={styles.aboutDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            velit consequuntur. Impedit, ex voluptas accusamus facere numquam
            placeat reiciendis porro doloremque ea dolorem expedita dicta nemo
            temporibus obcaecati aut?
            <br />
            <br />
            Eius doloribus laborum voluptatem beatae sapiente repellat porro,
            quisquam, impedit perferendis, esse tempora. Earum nam iste voluptas
            saepe qui magnam itaque. Sunt assumenda eaque sequi explicabo?
            Dolore ipsam modi eos hic praesentium quis minus iure architecto,
            fuga quos suscipit eaque dolorum debitis doloribus esse amet
            quibusdam incidunt dolor similique. Voluptas excepturi rem.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <h1 className={styles.aboutTitle}>What we do?</h1>
          <p className={styles.aboutDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            sunt repellat blanditiis labore eius iure id nulla quaerat nostrum.
            Totam inventore esse deleniti ratione aut necessitatibus deserunt
            voluptas a est perferendis magni, nobis praesentium quidem iure,
            beatae placeat.
            <br />
            <br />
            Quisquam, vitae debitis! Voluptatum nemo quibusdam sit expedita
            consectetur, animi, accusamus labore adipisci laboriosam illo
            maiores perferendis consequatur architecto voluptate, assumenda
            vitae error.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
