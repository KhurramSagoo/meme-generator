import React, { useState } from 'react';
import '../App.scss';
import memesData from './memesData';
import image from '../img/image.svg';
import html2canvas from 'html2canvas';
import './MemeGenerator.scss';

const MemeGenerator = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(e) {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
    e.preventDefault();
  }

  function downloadMeme() {
    const memeContainer = document.querySelector('.meme-container');

    if (memeContainer) {
      html2canvas(memeContainer)
        .then(canvas => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'meme.png';
          link.click();
        })
        .catch(error => {
          console.error('Error generating meme image:', error);
        });
    }
  }

  return (
    <div className='meme-generator'>
      <form className='form'>
        <div className='input-data'>
          <input
            className='input'
            type='text'
            placeholder='Top Text'
            value={meme.topText}
            onChange={e => setMeme({ ...meme, topText: e.target.value })}
          />
          <input
            className='input'
            type='text'
            placeholder='Bottom Text'
            value={meme.bottomText}
            onChange={e => setMeme({ ...meme, bottomText: e.target.value })}
          />
        </div>
        <button className='btn' onClick={getMemeImage}>
          Get a New Meme Image <span><img src={image} alt="" className='image-logo' /></span>
        </button>
        <button className='btn' type="button" onClick={downloadMeme}>
  Download Meme <span><img src={image} alt="" className='image-logo' /></span>
</button>

      </form>
      <div className='meme-container'>
        <img src={meme.randomImage} alt='memephoto' className='meme-image' />
        <div className='top-text'>{meme.topText}</div>
        <div className='bottom-text'>{meme.bottomText}</div>
      </div>
    </div>
  );
}

export default MemeGenerator;
