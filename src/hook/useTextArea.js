import { useState, useRef } from 'react';

function useTextArea(setTextareaValue) {
    const textareaRef = useRef(null);
    const [selectedText, setSelectedText] = useState('');
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

    const handleMouseUp = (event) => {
      const selected = window.getSelection().toString();
      if (selected) {
        setSelectedText(selected);
        const position = { top: event.pageY + 10, left: event.pageX };
        setMenuPosition(position);
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    const handleMenuClick = ({ key }) => {
      const textarea = textareaRef.current.resizableTextArea.textArea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const textareaValue = textarea.value;
      let newValue = '', selectedTargetText = '';
      console.log(selectedText);
      switch (key) {
        case '1':
          selectedTargetText = selectedText.replace(/\$/g, "")
          newValue = textareaValue.substring(0, start) + '$' + selectedTargetText + '$' + textareaValue.substring(end);
          break;

        case '2':
          selectedTargetText = selectedText.replace(/<dot>|<\/dot>/g, '')
          newValue = textareaValue.substring(0, start) + '<dot>' + selectedTargetText + '</dot>' + textareaValue.substring(end);
          break;

        default:
          break;
      }
      setTextareaValue(newValue);
      setSelectedText(null);
      setMenuVisible(false);
    };

    return { textareaRef, selectedText, menuVisible, menuPosition, setMenuVisible, handleMouseUp, handleMenuClick };
  }

  export default useTextArea;