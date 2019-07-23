import React from 'react';

const DownloadButton = ({data}) => {
  const {label, url} = data;

  const download = () => {
    var anchor=document.createElement('a');
    anchor.setAttribute('href',url);
    anchor.setAttribute('download','');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  };


  return (
    <a href="#resume" onClick={download}>{label}</a>
  );
};

export default DownloadButton;

