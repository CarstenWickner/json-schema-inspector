import React from 'react';
import SchemaInput from './SchemaInput';
import Alert from 'react-bootstrap/Alert';
import { Inspector } from 'react-jsonschema-inspector';

import logo from './logo.svg';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawSchema: "",
            parsedSchema: false,
            parseError: null
        };
        this.onChangeEnteredSchema = this.onChangeEnteredSchema.bind(this);
    }

    onChangeEnteredSchema(value) {
        this.setState((prevState) => {
            const newState = {
                rawSchema: value
            };
            try {
                newState.parsedSchema = value ? JSON.parse(value) : false;
                newState.parseError = null;
            } catch (error) {
                newState.parsedSchema = prevState.parsedSchema;
                newState.parseError = error.toString();
            }
            return newState;
        });
    }

    render() {
        const { rawSchema, parsedSchema, parseError } = this.state;
        return (
            <div id="content" className="bg-light">
                <SchemaInput
                    rawSchema={rawSchema}
                    onRawSchemaChange={this.onChangeEnteredSchema}
                />
                <Alert variant={parseError ? "warning" : (parsedSchema ? "success" : "info")}>
                    {(parseError && `Invalid JSON: ${parseError}`)
                            || (parsedSchema
                                    ? "Entered JSON Schema available for inspection below."
                                    : "Enter (or paste) a JSON Schema above.")}
                </Alert>
                <Inspector
                    schemas={{ "Your Schema": parsedSchema}}
                    renderEmptyDetails={() => (
                        <div style={{ padding: "4em 1em 0" }}>
                            <p>
                                Click on the schema title on the left side in order to traverse the nested properties.
                            </p>
                            <a
                                href="https://github.com/CarstenWickner/react-jsonschema-inspector"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="React JSON Schema Inspector (GitHub)"
                            >
                                <img
                                    src={logo}
                                    alt="JSON Schema Inspector Logo"
                                    style={{ width: "70%", margin: "0 15%" }}
                                />
                            </a>
                        </div>
                    )}
                />
            </div>
        );
    }
}
