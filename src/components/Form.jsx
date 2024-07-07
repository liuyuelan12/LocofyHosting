import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={`form3 ${className}`}>
      <div className="login-form-content">
        <h2 className="sign-in">Sign in</h2>
        <div className="form4">
          <form className="form5">
            <div className="form-fields1">
              <TextField
                className="email1"
                placeholder="Email address"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconaccount.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.8px",
                  },
                  "& .MuiInputBase-input": { color: "#787878" },
                }}
              />
              <TextField
                className="password1"
                placeholder="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconpassword.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.8px",
                  },
                  "& .MuiInputBase-input": { color: "#787878" },
                }}
              />
            </div>
            <Button
              className="search-flights-button3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
                width: 160,
                height: 52,
              }}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
      <div className="form-child" />
      <FrameComponent
        orSignUpWith="Or sign in with"
        googleIcon="/google-icon1@2x.png"
        facebookIcon="/facebook-icon1@2x.png"
        appleIcon="/apple-icon1@2x.png"
      />
      <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className="sign-up">Sign up</span>
      </div>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
