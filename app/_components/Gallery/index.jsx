import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";
import { getAllRooms } from "@/app/_lib/supabase/rooms";
async function Gallery() {
  const rooms = await getAllRooms();
  rooms.length = 8;
  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <Heading className="text-center">Gallery</Heading>
        <div className={styles.galleryGrid}>
          {rooms.map((item) => (
            <div key={item.id} className={styles.thumbnail}>
              <Image fill src={`${item.thumbnail || "/placeholder.png"}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
