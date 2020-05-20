import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools.js';

const Test = () => {
  function onChange(newValue) {
    console.log(newValue);
  }
  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="root"
      // onLoad={this.onLoad}
      onChange={onChange}
      fontSize={10}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`test('It should add the number 8 to the array five times', assert => {
        const array = [];
        const result = addNumbers(8, array, 5, addValues);
        assert.equal(array, result);
        assert.deepEqual(array, [8, 8, 8, 8, 8]);
    });
`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        maxLines: 15,
      }}/>
  );
};

export default Test;
