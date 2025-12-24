"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DayPicker } from "react-day-picker";
import DatePicker, { DateObject, Calendar } from "react-multi-date-picker";
import { Box, Typography, Button } from "@mui/material";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-day-picker/style.css";
import styles from "./styles.module.css";
import { getReservationByID, getRoomReservations } from "@/app/_lib/supabase/reservations";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loader from "@/app/_ui/Loader";

function FormDayPicker({ handleDateSelection, start, end }) {
  const [disableddDays, setDisabledDays] = useState([]);
  const datePickerRef = useRef();
  const customLocale = {
    ...persian_fa,
    weekDays: [
      ["ش", "ش"],
      ["ی", "یک"],
      ["د", "دو"],
      ["س", "سه"],
      ["چ", "چهار‌"],
      ["پ", "پنج‌"],
      ["ج", "ج"],
    ],
  };

  const [isLoading, setIsLoading] = useState(false);
  const { room_slug, id } = useParams();
  const calendarRangeRef = useRef({ start: new Date(2024, 0), end: new Date(2027, 11) });

  useEffect(() => {
    if (!room_slug && !id) return;
    async function getBusyDays() {
      setIsLoading(true);
      let reservations = [];
      let busy_days = [];

      // if (id) {
      //   const reservation_target = await getReservationByID(id);

      //   reservations = await getRoomReservations(reservation_target.room_id);
      //   busy_days = reservations.filter((item) => (id != item.id ? { before: item.end_date, after: item.start_date } : false));
      // } else {
      //   reservations = await getRoomReservations(room_slug);
      //   busy_days = reservations.map((item) => ({ before: item.end_date, after: item.start_date }));
      // }

      // console.log("BLOCKED");
      // console.log(reservations.map((item) => ({ before: item.end_date, after: item.start_date })));
      setDisabledDays(busy_days);
      setIsLoading(false);
    }

    getBusyDays();
  }, []);

  if (isLoading) {
    console.log("LoadingLoadingLoadingLoadingLoadingLoading");
    return (
      <div className={"section-loader"}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.datepicker}>
      <div>
        <Calendar
          locale={customLocale}
          calendar={persian}
          // disabled={disabled} // Use the disabled prop here
          // readOnly={disabled} // Also set readOnly
          range={true}
          // mapDays={mapDaysHandler}
          sort
          format="YYYY/MM/DD"
          calendarPosition="bottom-end"
          numberOfMonths={2}
          portal={false}
          buttons={true}
          showOtherDays={false}
          style={{
            borderRadius: 12,
            boxShadow: "0 6px 20px rgba(25, 118, 210, 0.2)",
            transition: "box-shadow 0.3s ease",
            width: "100%",
            // maxWidth: 360,
            // opacity: disabled ? 0.6 : 1, // Add visual indication
            // pointerEvents: disabled ? "none" : "auto", // Disable interactions
          }}
          // value={valueJalali}
          // onChange={handleFirst}
        />
      </div>
      {/* <div>
        <DayPicker
          captionLayout="dropdown"
          min={0}
          calendar={persian}
          locale={persian_fa}
          // onMonthChange={(month) => {
          //   calendarRangeRef.current.start = month;
          //   calendarRangeRef.current.end = new Date(month.getFullYear(), month.getMonth() + 1);
          // }}
          onSelect={(range) => handleDateSelection(range)}
          mode="range"
          selected={start && end ? { from: start, to: end } : null}
          startMonth={calendarRangeRef.current.start}
          endMonth={calendarRangeRef.current.end}
          weekStartsOn={1}
          numberOfMonths={2}
          disabled={[{ before: new Date() }, ...disableddDays]}
          footer={
            <p>
              <span className={styles.footerIcon}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <span>Please Pick a Range</span>
            </p>
          }
          classNames={{
            today: styles.datepickerToday,
            selected: styles.datepickerSelected,
            range_start: styles.datepickerRangeControlStart,
            range_end: styles.datepickerRangeControlEnd,
            range_middle: styles.datepickerRangeMiddle,
            chevron: styles.chevron,
            footer: styles.datepickerFooter,
          }}
        />
      </div> */}
    </div>
  );
}

export default FormDayPicker;
