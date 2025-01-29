import React, { useRef, useEffect, useCallback } from 'react';
import './Editor.css';

const Editor = ({ currentDoc, setCurrentDoc, saveDocument }) => {
  const editorRef = useRef(null);
  const lastHtml = useRef(currentDoc.content);
  const isComposing = useRef(false);

  // Save selection state
  const saveSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && editorRef.current.contains(selection.anchorNode)) {
      return selection.getRangeAt(0);
    }
    return null;
  }, []);

  // Restore selection state
  const restoreSelection = useCallback((range) => {
    if (range && editorRef.current) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, []);

  const handleInput = useCallback(() => {
    if (!editorRef.current || isComposing.current) return;
    
    const newHtml = editorRef.current.innerHTML;
    if (newHtml !== lastHtml.current) {
      lastHtml.current = newHtml;
      setCurrentDoc(prev => ({
        ...prev,
        content: newHtml
      }));
    }
  }, [setCurrentDoc]);

  const handleFormat = (command) => {
    const selection = saveSelection();
    document.execCommand(command, false);
    if (selection) {
      restoreSelection(selection);
      handleInput();
    }
    editorRef.current.focus();
  };

  // Handle external content updates
  useEffect(() => {
    if (currentDoc.content !== lastHtml.current) {
      lastHtml.current = currentDoc.content;
      if (editorRef.current) {
        const selection = saveSelection();
        editorRef.current.innerHTML = currentDoc.content;
        if (selection) restoreSelection(selection);
      }
    }
  }, [currentDoc.content, restoreSelection, saveSelection]);

  // Track composition events for IME input
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    const handleCompositionStart = () => {
      isComposing.current = true;
    };
    
    const handleCompositionEnd = () => {
      isComposing.current = false;
      handleInput();
    };

    editor.addEventListener('compositionstart', handleCompositionStart);
    editor.addEventListener('compositionend', handleCompositionEnd);
    
    return () => {
      editor.removeEventListener('compositionstart', handleCompositionStart);
      editor.removeEventListener('compositionend', handleCompositionEnd);
    };
  }, [handleInput]);

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => handleFormat('bold')}>B</button>
        <button onClick={() => handleFormat('italic')}>I</button>
        <button onClick={() => handleFormat('underline')}>U</button>
        <button onClick={() => handleFormat('justifyLeft')}>←</button>
        <button onClick={() => handleFormat('justifyCenter')}>↔</button>
        <button onClick={() => handleFormat('justifyRight')}>→</button>
        <input
          type="text"
          placeholder="Document title"
          value={currentDoc.title}
          onChange={(e) => setCurrentDoc(prev => ({ ...prev, title: e.target.value }))}
        />
        <button onClick={saveDocument}>Save</button>
      </div>
      <div
        className="editor-content"
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={(e) => e.key === 'Backspace' && handleInput()}
        onBlur={handleInput}
      />
    </div>
  );
};

export default Editor;