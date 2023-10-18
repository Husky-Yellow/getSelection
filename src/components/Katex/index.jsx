import katex from 'katex';
import 'katex/dist/katex.css';

// eslint-disable-next-line react/prop-types
const Katex = ({ value }) => {
    const renderKatex = (rawString) => {
        if (!rawString) return { __html: '' }
        // eslint-disable-next-line no-useless-escape
        const html = rawString.replace(/\$([^\$]*)\$/gm, (match, tex) => {
            let katexStr = '';
            try {
              katexStr = katex.renderToString(tex, { displayMode: false });
            } catch (e) { /* empty */ }
            return katexStr;
          })
          .replace(/(probimg|explimg)/gm, 'img');
        return { __html: html };
      }
    return (
        <div dangerouslySetInnerHTML={renderKatex(value)} />
      )
}
  export default Katex;