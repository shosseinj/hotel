import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer} style={{ direction: "rtl" }}>
      <nav className={`${styles.footerMenu} container`}>
        <div>
          <h3>تماس با ما</h3>
          <ul>
            <li>email@gmail.com</li>
            <li>+۹۸ ۹۱۲ ۳۴۵ ۶۷۸۹</li>
            <li>خیابان ایکس، تهران</li>
            <li className={styles.icons}></li>
          </ul>
        </div>

        <div>
          <h3>منوی لینک‌ها</h3>
          <ul>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/rooms">اتاق‌ها</Link>
            </li>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link href="/signin">منطقه مهمان</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>عضویت در خبرنامه</h3>
          <li className={styles.newsletter}>
            <input type="text" placeholder="example@mail.com" />
            <button>ارسال</button>
          </li>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
