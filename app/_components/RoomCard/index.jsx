import Image from "next/image";
import styles from "./styles.module.css";
import Card from "../Card/Card";

function RoomCard({ room }) {
  return (
    <Card>
      <Card.Thumbnail>
        <Image fill src={`${room.thumbnail || "/placeholder.png"}`} alt="" />
      </Card.Thumbnail>

      <Card.Description className={styles.roomDescription}>
        <h2>{room.name}</h2>

        <p>{room.discription}</p>
      </Card.Description>
    </Card>
  );
}

export default RoomCard;
