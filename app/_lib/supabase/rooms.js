import supabase from "./db";

export async function getAllRooms() {
  const url = "reservations/";
  const response = await fetch(`http://127.0.0.1:7000/api/reservations/rooms/`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2NTkwMTU0LCJpYXQiOjE3NjY1NjAxNTQsImp0aSI6ImNiYjg0N2IxMGZiNjRlMmU4ZWI5NjYwMDdmNDkxNThlIiwidXNlcl9pZCI6OTR9.D39V7jtlSp12Ky4DRnZcIZKVyGuRBkOKBQcr3beaj1s`,
    },
  });

  let rooms = await response.json();

  return rooms;
}

export async function getRoomById(id) {
  // let { data: rooms, error } = await supabase.from("rooms").select("*").eq("id", id);
  const response = await fetch(`http://127.0.0.1:7000/api/reservations/rooms/?single=${id}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2NTkwMTU0LCJpYXQiOjE3NjY1NjAxNTQsImp0aSI6ImNiYjg0N2IxMGZiNjRlMmU4ZWI5NjYwMDdmNDkxNThlIiwidXNlcl9pZCI6OTR9.D39V7jtlSp12Ky4DRnZcIZKVyGuRBkOKBQcr3beaj1s`,
    },
  });

  let rooms = await response.json();
  return rooms;
  // return rooms?.at(0);
}

export async function getRoomImages(id) {
  // let { data: room_images, error } = await supabase.from("room_images").select("*").eq("room_id", id);
  const response = await fetch(`http://127.0.0.1:7000/api/reservations/rooms/`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2NTkwMTU0LCJpYXQiOjE3NjY1NjAxNTQsImp0aSI6ImNiYjg0N2IxMGZiNjRlMmU4ZWI5NjYwMDdmNDkxNThlIiwidXNlcl9pZCI6OTR9.D39V7jtlSp12Ky4DRnZcIZKVyGuRBkOKBQcr3beaj1s`,
    },
  });

  let room_images = await response.json();
  return room_images;
}

export async function filterRoomsByDate(start = "2024-09-21", end = "2024-09-27") {
  let { data: reservations, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("status", "confirmed")
    .or(`and(start_date.gte.${start},start_date.lte.${end}),and(end_date.gte.${start},end_date.lte.${end}),and(start_date.lte.${start}, end_date.gte.${end})`);

  if (error) {
    console.log(error);
  }

  const reservations_ids = reservations?.map((item) => item.room_id) ?? [];

  let { data: rooms, rooms_error } = await supabase
    .from("rooms")
    .select("*")
    .not("id", "in", `(${reservations_ids.join(",")})`);

  return rooms;
}
