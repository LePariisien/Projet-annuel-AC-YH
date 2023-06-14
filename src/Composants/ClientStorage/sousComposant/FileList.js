import React from "react";
import FileItem from "./FileItem";

const FileList = ({ files, onDeleteFile }) => {
  return (
    <div>
      <h3>Files:</h3>
      {Array.isArray(files) &&
        files.map((file) => (
          <FileItem key={file.id} file={file} onDelete={onDeleteFile} />
        ))}
    </div>
  );
};

export default FileList;
