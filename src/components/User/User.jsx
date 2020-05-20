import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools.js';

const User = () => {
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
      value={`export const addValues = (arr, value) => {
        arr.push(value);
    };
    
    export const addNumbers = (num, arr, times, callback) => {
        for(let i = 0; i < times; i++) {
            callback(arr, num);
        }
        return arr;
    };
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

export default User;
