"use client"

import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      setConvertedFile(compressedFile);
    } catch (error) {
      setError('Error compressing the image');
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;

    const url = URL.createObjectURL(convertedFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = convertedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Image Converter</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <h2>Original Image</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          <img src={URL.createObjectURL(selectedFile)} alt="Original" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      {convertedFile && (
        <div>
          <h2>Converted Image</h2>
          <p>File Name: {convertedFile.name}</p>
          <p>File Size: {(convertedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          <img src={URL.createObjectURL(convertedFile)} alt="Converted" style={{ maxWidth: '100%', height: 'auto' }} />
          <button onClick={handleDownload}>Download Converted Image</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ImageConverter;
