import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Image from "next/image";
function Blog() {
  return (
    <section className={styles.blogSection} style={{ direction: "rtl" }}>
      <div className="container">
        <Heading className={styles.heading}>وبلاگ اقامتگاه</Heading>
        <p className={styles.description}>تجربه سفرهای دلنشین و آرامش‌بخش با اقامتگاه‌های ویژه ما</p>

        <div className={styles.blogGrid}>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="اتاق لوکس" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>اتاق لوکس کوهستانی</h2>
              <p className={styles.blogLabel}>با چشم‌انداز بی‌نظیر</p>
              <p className={styles.blogDescription}>تجربه‌ای متفاوت در دل طبیعت با اتاق‌هایی مجهز و راحت. از هوای تازه کوهستان لذت ببرید و روزی آرامش‌بخش را تجربه کنید.</p>
            </Card.Description>
          </Card>

          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="سوئیت ساحلی" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>سوئیت ساحلی رویایی</h2>
              <p className={styles.blogLabel}>با دسترسی مستقیم به ساحل</p>
              <p className={styles.blogDescription}>صبح خود را با صدای موج‌ها آغاز کنید و شب را در سکوت ساحل به پایان برسانید. اقامتی رمانتیک و بی‌نظیر برای دو نفر یا خانواده‌ها.</p>
            </Card.Description>
          </Card>

          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="ویلای جنگلی" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>ویلای جنگلی آرام</h2>
              <p className={styles.blogLabel}>دور از هیاهوی شهر</p>
              <p className={styles.blogDescription}>ویلایی مجهز در دل جنگل برای کسانی که به دنبال آرامش و نزدیکی به طبیعت هستند. مناسب برای سفرهای خانوادگی و دوستانه.</p>
            </Card.Description>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Blog;
