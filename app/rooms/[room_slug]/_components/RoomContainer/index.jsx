// import styles from "./styles.module.css";

// import Heading from "@/app/_ui/Heading";
// import Features from "../Features";
// import RoomSlider from "../RoomSlider";
// import RoomBookingForm from "../RoomBookingForm";
// import RoomDescription from "../RoomDescription";
// import Facilities from "../Facilities";
// import BookingPolicy from "../BookingPolicy";
// import { getRoomById, getRoomImages } from "@/app/_lib/supabase/rooms";
// import { notFound, redirect } from "next/navigation";
// import { bookingSchema } from "@/app/_lib/zodSchemas";
// import { cookies } from "next/headers";

// async function RoomContainer({ params }) {
//   const room_slug = params?.room_slug;

//   if (!room_slug || !/^-?\d+$/.test(room_slug)) notFound();

//   const room = await getRoomById(room_slug);

//   const room_images = await getRoomImages(room_slug ?? []);

//   const images = room_images.map((item) => `${item.img_path}`);

//   if (!room) notFound();

//   async function bookingAction(prevState, formData) {
//     "use server";

//     prevState = { ...prevState, isBooking: true };
//     const start_date = formData.get("start_date");
//     const end_date = formData.get("end_date");
//     const guests_count = parseInt(formData.get("guests_count"));
//     const room_id = formData.get("room_id");

//     // FORM VALIDATION
//     let isValid = true;
//     try {
//       bookingSchema.parse({ start_date, end_date, guests_count });
//     } catch (err) {
//       isValid = false;
//       err.errors.forEach((element) => {
//         prevState[element?.path[0] ?? "unknown"] = element.message;
//       });

//       return { ...prevState, isBooking: false };
//     } finally {
//       prevState = { ...prevState, isBooking: false };
//     }

//     if (isValid) {
//       const reservation_cookies = cookies();
//       reservation_cookies.set("pending_reservation", JSON.stringify({ start_date, end_date, guests_count, room_id }), {
//         maxAge: 60 * 60 * 2,
//         httpOnly: true,
//       });

//       redirect(`/reservations/checkout`);
//     }
//   }

//   return (
//     <>
//       <Heading className={styles.heading}>{room.name}</Heading>
//       <Features room={room} />
//       <RoomSlider images={images} />
//       <RoomBookingForm bookingAction={bookingAction} room={room} />
//       <RoomDescription />
//       <Facilities />
//       <BookingPolicy />
//     </>
//   );
// }

// export default RoomContainer;

import styles from "./styles.module.css";
import { getRoomById, getRoomImages } from "@/app/_lib/supabase/rooms";

import Heading from "@/app/_ui/Heading";
import Features from "../Features";
import RoomSlider from "../RoomSlider";
import RoomBookingForm from "../RoomBookingForm";
import RoomDescription from "../RoomDescription";
import Facilities from "../Facilities";
import BookingPolicy from "../BookingPolicy";
import { notFound, redirect } from "next/navigation";
import { bookingSchema } from "@/app/_lib/zodSchemas";
import { cookies } from "next/headers";

/* ===============================
   INITIAL (STATIC) DATA
================================ */

const initialRoom = {
  id: 1,
  name: "اجاره آپارتمان لوکس در سیدخندان",
  price_per_night: 2500000,
  max_guests: 4,
  bedrooms: 2,
  bathrooms: 1,
  area: 120,
};

const initialImages = ["http://127.0.0.1:7000/media/rooms/thumbnails/download.jpg", "http://127.0.0.1:7000/media/rooms/thumbnails/download_1.jpg", "http://127.0.0.1:7000/media/rooms/thumbnails/download_2.jpg"];

async function RoomContainer({ params }) {
  const room_slug = params?.room_slug;

  if (!room_slug || !/^-?\d+$/.test(room_slug)) notFound();

  /* ===============================
     USE INITIAL DATA (NO FETCH)
  ================================ */
  const images = initialImages;
  const room = await getRoomById(room_slug);
  // const room = initialRoom;

  async function bookingAction(prevState, formData) {
    "use server";

    prevState = { ...prevState, isBooking: true };

    const start_date = formData.get("start_date");
    const end_date = formData.get("end_date");
    const guests_count = parseInt(formData.get("guests_count"));
    const room_id = formData.get("room_id");

    try {
      bookingSchema.parse({ start_date, end_date, guests_count });
    } catch (err) {
      err.errors.forEach((e) => {
        prevState[e.path[0]] = e.message;
      });
      return { ...prevState, isBooking: false };
    }

    const reservation_cookies = cookies();
    reservation_cookies.set("pending_reservation", JSON.stringify({ start_date, end_date, guests_count, room_id }), {
      maxAge: 60 * 60 * 2,
      httpOnly: true,
    });

    redirect("/reservations/checkout");
  }

  return (
    <>
      <Heading className={styles.heading}>{room.name}</Heading>
      <Features room={room} />
      <RoomSlider images={images} />
      <RoomBookingForm bookingAction={bookingAction} room={room} />
      <RoomDescription />
      <Facilities />
      <BookingPolicy />
    </>
  );
}

export default RoomContainer;
