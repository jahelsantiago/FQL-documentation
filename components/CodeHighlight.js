import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const CodeHighlights = ({codeString}) => {
	return (
		<div className={"overflow-hidden max-w-[400px]"}>
			<SyntaxHighlighter language="javascript" style={docco}>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeHighlights