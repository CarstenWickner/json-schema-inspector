import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow';

const standardProps = {
    mode: "json",
    theme: "tomorrow",
    name: "schemaInput",
    placeholder: "Enter JSON Schema",
    fontSize: 12,
    minLines: 8,
    maxLines: 8,
    highlightActiveLine: true,
    setOptions: {
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        showPrintMargin: false,
        tabSize: 2,
    }
};

const SchemaInput = ({ rawSchema, onRawSchemaChange }) => (
    <AceEditor
        {...standardProps}
        value={rawSchema}
        onChange={onRawSchemaChange}
    />
);

export default SchemaInput;
