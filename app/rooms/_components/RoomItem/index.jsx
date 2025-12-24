// RoomItem.jsx
"use client"; // Add this at the top

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

function RoomItem({ id, imgPath, price, link, title }) {
  const imageSrc = imgPath;

  return (
    <div className={styles.roomItem}>
      <div className={styles.imgOverlay}>
        <Image
          fill
          src={imageSrc}
          alt={title || "Room image"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          onError={(e) => {
            console.error(`Failed to load image for room ${id}:`, imageSrc);
            e.target.style.display = "none";
          }}
          onLoad={() => console.log(`Image loaded for room ${id}`)}
        />
      </div>
      <div className={styles.roomDescription}>
        <div>
          <h2 className={styles.roomTitle}>{title}</h2>
          <Link href={`rooms/${id}`}>قیمت از {price} ریال</Link>
        </div>
      </div>
    </div>
  );
}

export default RoomItem;
