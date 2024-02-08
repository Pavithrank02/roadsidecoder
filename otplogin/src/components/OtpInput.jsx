import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length, onOtpSubmit }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""))
  const inputRefs = useRef([])

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
  })

  const handleChange=(i, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[i] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && i < length - 1 && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1].focus();
    }
  };
  const handleClick= (i) => {
    inputRefs.current[i].setSelectionRange(1, 1);

    // optional
    if (i > 0 && !otp[i - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  }
  const handleKeyDown= (i,e) => {
    if (
      e.key === "Backspace" &&
      !otp[i] &&
      i > 0 &&
      inputRefs.current[i - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[i - 1].focus();
    }
  }
  return (
    <div>
      {otp.map((val, i) => {
        return (
          <input
            key={i}
            type='text'
            ref={(input) => inputRefs.current[i] = input}
            value={val}
            onChange={(e) => handleChange(i, e)}
            onClick={(e) => handleClick(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className='otpInput'
          />
        )
      })}
    </div>
  )
}

export default OtpInput