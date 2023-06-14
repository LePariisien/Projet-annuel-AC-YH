import React, { useState } from 'react';

const FileUploader = ({ onFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = () => {
    // Simulate file upload process
    // You can replace this with your actual upload logic using APIs

    // Here, we're just logging the selected files for demonstration purposes
    console.log('Uploading files:', selectedFiles);

    // Call the callback function with the selected files
    onFileUpload(selectedFiles);

    // Clear the selected files
    setSelectedFiles([]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
