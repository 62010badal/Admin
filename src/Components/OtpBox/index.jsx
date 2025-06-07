
import React, { useState, useRef } from "react";

const OtpBox = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only numbers or empty

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // If all boxes are filled, trigger callback
    if (newOtp.every(v => v !== "") && onComplete) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          maxLength="1"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            textAlign: "center",
            border: "2px solid #ccc",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
};

export default OtpBox;
