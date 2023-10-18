import { useState, useCallback } from 'react';
import TextArea from './components/TextArea';
import Katex from './components/Katex';

function App() {
  const [textValue, setTextValue] = useState('涉及到多个富文本输入框时，使用React的ref会更合适。以下是使用ref来获取textarea元素的示例代码：');

  const handleTextChange = useCallback((value) => {
    setTextValue(value);
  }, []);

  return (
    <div>
      <TextArea value={textValue} onValueChange={handleTextChange} />
      <Katex value={textValue} />
    </div>
  );
}

export default App;