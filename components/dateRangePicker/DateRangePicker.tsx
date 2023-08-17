"use client";

import { useState } from "react";
import styles from "./DateRangePicker.module.scss";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "@/redux/types";
import { setRange } from "@/redux/slices/dateRangeSlice";

const DateRangePicker: React.FC = () => {
  const dispatch = useDispatch();

  const { range } = useSelector((store: StoreTypes) => store.dateRange);
  console.log("Range", range);

  return (
    <>
      <div className={styles.dateRangePicker__double}>
        <DateRange
          onChange={(item: any) => dispatch(setRange([item.selection]))}
          editableDateInputs={false}
          moveRangeOnFirstSelection={false}
          rangeColors={["#262626"]}
          ranges={range}
          months={2}
          minDate={new Date()}
          direction="horizontal"
          showDateDisplay={false}
        />
      </div>

      <div className={styles.dateRangePicker__single}>
        <DateRange
          onChange={(item: any) => dispatch(setRange([item.selection]))}
          editableDateInputs={false}
          moveRangeOnFirstSelection={false}
          rangeColors={["#262626"]}
          ranges={range}
          months={1}
          minDate={new Date()}
          direction="horizontal"
          showDateDisplay={false}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
