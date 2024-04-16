import React, { FC } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

type DATETYPE = {
  name: string;
  control: any;
};

const DataField: FC<DATETYPE> = ({ name, control }) => {
    const today = dayjs()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            defaultValue={today}
            disablePast
              format="DD-MM-YYYY"
              value={value}
              onChange={(date) => {
                onChange(date);
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default DataField;
