import { useState, useEffect } from 'react';
import Editor from './components/Editor';
import DocumentList from './components/DocumentList';
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({ id: null, content: '', title: '' });

  useEffect(() => {
    const savedDocs = JSON.parse(localStorage.getItem('documents')) || [];
    setDocuments(savedDocs);
  }, []);

  const saveDocument = () => {
    if (!currentDoc.title) return;
    
    const newDocuments = documents.filter(doc => doc.id !== currentDoc.id);
    const updatedDocuments = [...newDocuments, currentDoc];
    
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setDocuments(updatedDocuments);
  };

  return (
    <div className="app">
      <DocumentList 
        documents={documents}
        setCurrentDoc={setCurrentDoc}
        saveDocument={saveDocument}
      />
      <Editor 
        currentDoc={currentDoc}
        setCurrentDoc={setCurrentDoc}
        saveDocument={saveDocument}
      />
    </div>
  );
}

export default App;