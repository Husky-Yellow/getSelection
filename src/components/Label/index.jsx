import { useState, useRef } from 'react';
import { Input, Button } from 'antd';
import Katex from '../Katex';

function Label() {
  const textareaRef = useRef(null);
  const [value, setValue] = useState('涉及到多个富文本输入框时，使用React的ref会更合适。以下是使用ref来获取textarea元素的示例代码：');

  const handleMenuClick = ({ key }) => {
    const textarea = textareaRef.current.resizableTextArea.textArea;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const textareaValue = textarea.value;
    const nowSelect = value.substring(start, end)
    let newValue = '', selectedTargetText = '';
    switch (key) {
      case '1':
        selectedTargetText = nowSelect.replace(/\$/g, "")
        newValue = textareaValue.substring(0, start) + '$' + nowSelect + '$' + textareaValue.substring(end);
        setValue(newValue)
        requestAnimationFrame(() => {
          textarea.focus();
          textarea.setSelectionRange(start, end + 2);
        });
        break;
    }
  }

  return (
    <div>
      <div className='position-relative'>
        <Button onClick={(e) => {
          handleMenuClick({ key: '1' })
        }}>B</Button>

      </div>
      <Input.TextArea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Katex value={value} />
    </div>
  );
}

export default Label;
