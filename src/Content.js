import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Inspector } from 'react-jsonschema-inspector';

import SchemaInput from './SchemaInput';

import logo from './logo.svg';

const breadcrumbsOptions = {
    // avoid leading separator (in addition to default ignoring of "[0]")
    skipSeparator: (fieldName, _column, index) => fieldName === "[0]" || index === 1,
    // returning a falsy value skips the breadcrumbs item (here: for the root selection)
    mutateName: (fieldName, _column, index) => index > 0 && fieldName
};

const initialState = {
    rawSchema: "",
    parsedSchema: false,
    parseError: null
};

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
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

    renderEmptyDetails() {
        return (
            <div style={{ padding: "4em 1em 0" }}>
                <p>
                    Click on the schema title on the left side in order to traverse the nested properties.
                </p>
                <img
                    src={logo}
                    alt="JSON Schema Inspector Logo"
                    style={{ width: "70%", margin: "1em 15% 0" }}
                />
            </div>
        );
    }

    render() {
        const { rawSchema, parsedSchema, parseError } = this.state;
        return (
            <div id="content" className="bg-light">
                <Container>
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
                </Container>
                <Inspector
                    schemas={{ "Your Schema": parsedSchema}}
                    defaultSelectedItems={["Your Schema"]}
                    breadcrumbs={breadcrumbsOptions}
                    renderEmptyDetails={this.renderEmptyDetails}
                />
            </div>
        );
    }
}
