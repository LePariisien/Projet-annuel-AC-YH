import React, { useState } from 'react';
import FileList from '../ClientStorage/sousComposant/FileList';
import FileUploader from '../ClientStorage/sousComposant/FileUploader';

const ClientStorage = () => {
  const [files, setFiles] = useState([]);

  const handleAddClient = () => {
    const newClient = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      // Autres données du client à ajouter
    };

    addClient(newClient)
      .then((response) => {
        // Traitement réussi, par exemple, afficher un message de succès ou actualiser la liste des clients
        console.log('Client added successfully:', response);
      })
      .catch((error) => {
        // Gestion des erreurs, par exemple, afficher un message d'erreur ou effectuer une action de secours
        console.error('Error adding client:', error);
      });
  };

  const handleFileUpload = (uploadedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleFileDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileToDelete.id));
  };

  return (
    <div>
      <h2>Client Storage</h2>
      <FileUploader onFileUpload={handleFileUpload} />
      <button onClick={handleAddClient}>Add Client</button>
      <FileList files={files} onDeleteFile={handleFileDelete} />
    </div>
  );
};

export default ClientStorage;
