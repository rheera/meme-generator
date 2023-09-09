import React, { useState } from "react";
import "@/scss/memeGenerator.scss";

const MemeGenerator = () => {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <label htmlFor="topText"></label>
        <input
          id="topText"
          type="text"
          className="text-input"
          value={formData.topText}
          name="topText"
          onChange={handleChange}
        />
        <label htmlFor="topText"></label>
        <input
          id="topText"
          type="text"
          className="text-input"
          value={formData.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
      </form>
    </main>
  );
};

export default MemeGenerator;
