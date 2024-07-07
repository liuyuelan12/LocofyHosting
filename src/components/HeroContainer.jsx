import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PropTypes from "prop-types";
import "./HeroContainer.css";

const HeroContainer = ({ className = "" }) => {
  const [dateGuestInputsValue, setDateGuestInputsValue] = useState(null);
  const [dateGuestInputs1Value, setDateGuestInputs1Value] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`hero-container ${className}`}>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="find-a-host-for-every-journey-parent">
              <b className="find-a-host-container">
                <span>{`Find a `}</span>
                <span className="host">host</span>
                <span> for every journey</span>
              </b>
              <h3 className="discover-the-best">
                Discover the best local rental properties that fits your every
                travel needs
              </h3>
            </div>
            <div className="form2">
              <TextField
                className="autocompletebasic"
                placeholder="Accommodation"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="25px" height="25px" src="/iconhome.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "59px",
                    backgroundColor: "#fff",
                    paddingRight: "12px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="grouped">
                <div className="date-guest-inputs">
                  <DatePicker
                    value={dateGuestInputsValue}
                    onChange={(newValue) => {
                      setDateGuestInputsValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-in",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="date-guest-inputs1">
                  <DatePicker
                    value={dateGuestInputs1Value}
                    onChange={(newValue) => {
                      setDateGuestInputs1Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-out",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled-1.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="guest-input"
                  placeholder="Guest"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="25px" height="25px" src="/iconuser.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "59px",
                      backgroundColor: "#fff",
                      paddingRight: "12px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.85)" },
                  }}
                />
              </div>
              <Button
                className="search-button"
                startIcon={
                  <img width="19px" height="19px" src="/iconsearch.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00c29f",
                  borderRadius: "4px",
                  "&:hover": { background: "#00c29f" },
                  width: 142,
                  height: 56,
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
