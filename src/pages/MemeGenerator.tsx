import React, { useState, useEffect } from "react";
import "@/scss/memeGenerator.scss";

const MemeGenerator = () => {
  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    currentMeme: 0,
  });

  const [allMemes, setAllMemes] = useState([]);

  const [isMemesLoaded, setIsMemesLoaded] = useState(false);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
      setIsMemesLoaded(true);
    }
    getMemes();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * allMemes.length);
  }
  function getRandomMeme() {
    let randomNumber = getRandomNumber();
    while (randomNumber === memeData.currentMeme) {
      randomNumber = getRandomNumber();
    }
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      currentMeme: randomNumber,
    }));
  }

  return (
    <main className="main">
      <form className="main__form">
        <label htmlFor="topText"></label>
        <input
          id="topText"
          type="text"
          className="text-input"
          value={memeData.topText}
          name="topText"
          onChange={handleChange}
          placeholder="Enter Top Text"
        />
        <label htmlFor="topText"></label>
        <input
          id="topText"
          type="text"
          className="text-input"
          value={memeData.bottomText}
          name="bottomText"
          onChange={handleChange}
          placeholder="Enter Bottom Text"
        />
      </form>
      <button className="main__button" onClick={getRandomMeme}>
        Get a new meme image 🖼️
      </button>
      {isMemesLoaded && (
        <div className="main__meme">
          <img
            src={allMemes[memeData.currentMeme]["url"]}
            alt="Template Meme"
            className="main__meme__image"
          />
          <h2 className="main__meme__text top">{memeData.topText}</h2>
          <h2 className="main__meme__text bottom">{memeData.bottomText}</h2>
        </div>
      )}
    </main>
  );
};

export default MemeGenerator;
