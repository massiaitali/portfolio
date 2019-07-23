import React from 'react';

const download = () => {
  var anchor=document.createElement('a');
  anchor.setAttribute('href','https://drive.google.com/uc?export=download&id=173l3GHhwdu-h08ezO1XBWlmpUvNpxo3x');
  anchor.setAttribute('download','');
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
};

const DownloadButton = () => {
  return (
    <a href="#resume" onClick={download}>Resume</a>
  );
};

export default DownloadButton;

