import { Input, Menu } from 'antd';
import useTextArea from '../../hook/useTextArea'

// eslint-disable-next-line react/prop-types
function TextArea({ value, onValueChange }) {

  const onChange = (e) => {
    onValueChange(e.target.value);
  };

  const {
    textareaRef,
    menuVisible,
    menuPosition,
    handleMouseUp,
    handleMenuClick,
  } = useTextArea(onValueChange)

  return (
    <div>
      <Input.TextArea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onMouseUp={handleMouseUp}
      />
      {menuVisible && (
        <Menu
          style={{
            position: 'fixed',
            zIndex: 99,
            top: menuPosition.top,
            left: menuPosition.left,
          }}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1">在选中文本前后添加$符号</Menu.Item>
          <Menu.Item key="2">在选中文本前后添加着重号</Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default TextArea;
