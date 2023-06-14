import React from 'react';

const AdminDashboard = ({ clients, storageUsed, storageAvailable, totalFiles, filesToday, filesByClient }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      {/* <h3>Clients:</h3>
      {clients.map((client) => (
        <div key={client.id}>
          <p>{client.name}</p>
        </div>
      ))}
      
      <h3>Storage:</h3>
      <p>Used: {storageUsed} GB</p>
      <p>Available: {storageAvailable} GB</p>
      
      <h3>File Statistics:</h3>
      <p>Total Files: {totalFiles}</p>
      <p>Files Today: {filesToday}</p>
      
      <h3>Files by Client:</h3>
      {Object.entries(filesByClient).map(([clientId, fileCount]) => (
        <div key={clientId}>
          <p>Client ID: {clientId}</p>
          <p>File Count: {fileCount}</p>
        </div>
      ))} */}
    </div>
  );
};

export default AdminDashboard;
