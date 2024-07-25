import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store';

const AddScorePopup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(true); // Track whether the popup is visible
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10); // Delay to allow the animation to start

    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!time) {
      newErrors.time = 'Time is required';
    } else if (!/^\d{2}:\d{2}:\d{3}$/.test(time)) {
      newErrors.time = 'Time must be in MM:SS:MSS format.Make sure digits are separated by \':\'';
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(addScore({ username, time }));
    setShow(false); // Trigger the closing animation
    setTimeout(closePopup, 300); // Delay closing the popup to allow the animation to complete
  };

  return (
    <div className="modal-container">

      <div className={`popup ${show ? 'show' : 'hide'}`}>
        <span><b>"Your score could awaken the darkness"</b> <br/><br/>Will you risk it, or remain silent forever?<br/><br/></span>
        <input
          type="text"
          placeholder="Phantom Identity"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors((prev) => ({ ...prev, username: '' }));
          }}
        />
        {errors.username && <div className="error">{errors.username}</div>}
        <input
          type="text"
          placeholder="Dark Period(MM:SS:MSS)."
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setErrors((prev) => ({ ...prev, time: '' }));
          }}
        />
        {errors.time && <div className="error">{errors.time}</div>}
        <button onClick={handleSubmit}>Dive In</button>
        <button onClick={() => { setShow(false); setTimeout(closePopup, 300); }}>Escape</button>
      </div>
    </div>
  );
};

export default AddScorePopup;
