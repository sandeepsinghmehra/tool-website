'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function FormSection() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/convert', {
      method: 'POST',
      body: formData,
    });

    const blob = await response.blob();
    console.log("blob: ", blob);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.docx';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}
