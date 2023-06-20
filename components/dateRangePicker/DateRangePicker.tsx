"use client";

import { useState } from "react";
import styles from "./DateRangePicker.module.scss";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "@/redux/types";
import { setRange } from "@/redux/slices/dateRangeSlice";

const DateRangePicker = () => {
  const dispatch = useDispatch();

  const { range } = useSelector((store: StoreTypes) => store.dateRange);
  console.log("Range", range);

  return (
    <div className={styles.dateRangePicker}>
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
        // className={}
      />
    </div>
  );
};

export default DateRangePicker;
