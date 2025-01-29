import React from 'react';
import './DocumentList.css';

const DocumentList = ({ documents, setCurrentDoc, saveDocument }) => {
  const createNewDocument = () => {
    setCurrentDoc({
      id: Date.now(),
      title: '',
      content: ''
    });
    saveDocument();
  };

  return (
    <div className="document-list">
      <button onClick={createNewDocument}>New Document</button>
      <h3>Saved Documents</h3>
      <ul>
        {documents.map(doc => (
          <li key={doc.id} onClick={() => setCurrentDoc(doc)}>
            {doc.title || 'Untitled Document'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;