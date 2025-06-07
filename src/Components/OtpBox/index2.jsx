import React from "react";
import OtpBox from ".";

const OtpVerification = () => {
  const handleOtpComplete = (otp) => {
    console.log("OTP Entered:", otp);
    // Here you can verify OTP using API
    alert(`OTP Submitted: ${otp}`);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "20vh",
      width:"60vh",
      background: "#f0f4f8",
    }}>
      <h2 style={{ marginBottom: "20px" }}>Enter the 6-digit OTP</h2>
      <OtpBox length={6} onComplete={handleOtpComplete} />
    </div>
  );
};

export default OtpVerification;
