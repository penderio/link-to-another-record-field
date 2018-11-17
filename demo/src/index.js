import React, {Component} from 'react'
import {render} from 'react-dom'
import sample from 'lodash/sample'
import {css, injectGlobal} from 'emotion'
import LinkToAnotherRecordField from '../../src'

import CheckboxField from '@cmds/checkbox-field'
import AttachmentField from '@cmds/attachment-field'
import LongTextField from '@cmds/long-text-field'
import SingleLineTextField from '@cmds/single-line-text-field'
import SingleSelectField from '@cmds/single-select-field'
import MultipleSelectField from '@cmds/multiple-select-field'
import NumberField from '@cmds/number-field'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

const generateAttachment = (i) => {

    const cat = sample(['wanderlust', 'water', 'canada', 'mountain', 'beach'])

    return {
        id: `att${i}`,
        type: 'image/jpeg',
        filename: `${cat} ${i}`,
        thumbnails: {
            small: {
                url: `https://source.unsplash.com/random/400x360?${cat}`
            },
            medium: {
                url: `https://source.unsplash.com/random/400x360?${cat}`
            },
            large: {
                url: `https://source.unsplash.com/random/400x360?${cat}`
            },
        },
        url: `https://source.unsplash.com/random/400x360?${cat}`
    }
}

const FIELDS = [{
    id: 'fld1',
    name: 'Name',
    typeId: 'singleLineText'
}, {
    id: 'fld2',
    name: 'Published',
    typeId: 'checkbox'
}, {
    id: 'fld3',
    name: 'Attachments',
    typeId: 'attachment'
}, {
    id: 'fld4',
    name: 'Revenue',
    typeId: 'number',
    options: {
        numberFormatId: 'decimal',
        allowNegativeNumbers: false,
        precisionId: '2'
    }
}, {
    id: 'fld5',
    name: 'Squad',
    typeId: 'linkToAnotherRecord'
}, {
    id: 'fld6',
    name: 'Colors',
    typeId: 'multipleSelect',
    options: {
        coloredOptions: true,
        optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        options: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }
}, {
    id: 'fld7',
    name: 'Color',
    typeId: 'singleSelect',
    options: {
        coloredOptions: true,
        optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        options: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }
}, {
    id: 'fld8',
    name: 'Notes',
    typeId: 'longText'
}, {
    id: 'fld9',
    name: 'Description',
    typeId: 'singleLineText'
}, {
    id: 'fld10',
    name: 'Attachments',
    typeId: 'attachment'
}]

const CELLS = {
    'fld1': {
        text: 'Luke Skywalker'
    },
    'fld2': {
        checked: true
    },
    'fld3': {
        attachments: [
            generateAttachment(1),
            generateAttachment(2),
            generateAttachment(3),
            generateAttachment(4),
            generateAttachment(5),
        ]
    },
    'fld4': {
        number: 32.25
    },
    'fld5': {
        records: [{
            id: 'rec1',
            name: 'Luke Skywalker'
        }, {
            id: 'rec2',
            name: 'Leia Organa'
        }, {
            id: 'rec3',
            name: 'Han Solo'
        }, {
            id: 'rec4',
            name: 'Jar Jar Binks'
        }]
    },
    'fld6': {
        optionIds: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']
    },
    'fld7': {
        optionId: 'opt5'
    },
    'fld8': {
        longText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    'fld9': {
        text: 'Greatest Jedi the galaxy has ever known.'
    },
    'fld10': {
        attachments: [
            generateAttachment(1),
            generateAttachment(2),
            generateAttachment(3),
            generateAttachment(4),
            generateAttachment(5),
        ]
    }
}

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const fieldRenderer = ({recordId, field, props}) => {

    const renderers = {
        singleLineText: ({props, cell}) => (
            <SingleLineTextField
                {...props}
                text={cell.text}
            />
        ),
        longText: ({props, cell}) => (
            <LongTextField
                {...props}
                longText={cell.longText}
            />
        ),
        checkbox: ({props, cell}) => (
            <CheckboxField
                {...props}
                checked={cell.checked}
            />
        ),
        attachment: ({props, cell}) => (
            <AttachmentField
                {...props}
                attachments={cell.attachments}
            />
        ),
        linkToAnotherRecord: ({props, cell}) => (
            <LinkToAnotherRecordField
                {...props}
                records={cell.records}
            />
        ),
        multipleSelect: ({props, field, cell}) => (
            <MultipleSelectField
                {...props}
                optionIds={cell.optionIds}
                options={field.options.options}
                optionOrder={field.options.optionOrder}
                coloredOptions={field.options.coloredOptions}
            />
        ),
        singleSelect: ({props, field, cell}) => (
            <SingleSelectField
                {...props}
                optionId={cell.optionId}
                options={field.options.options}
                optionOrder={field.options.optionOrder}
                coloredOptions={field.options.coloredOptions}
            />
        ),
        number: ({props, field, cell}) => (
            <NumberField
                {...props}
                number={cell.number}
                allowNegativeNumbers={field.options.allowNegativeNumbers}
                numberFormatId={field.options.numberFormatId}
                precisionId={field.options.precisionId}
            />
        )
    }

    const renderer = renderers[field.typeId]

    if (!renderer) {
        throw new Error(`Renderer for typeId '${field.typeId}' not found`)
    }

    const cell = CELLS[field.id]

    return renderer({
        recordId,
        field,
        props,
        cell
    })
}

class Demo extends Component {
    render() {
        return <div>
            <h1>LinkToAnotherRecord Demo</h1>
            <p>Used for linking to a foreign record.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying linked records in a record detail.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With fields
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 460px;
                        background-color: #fff;
                    `}
                >
                    <LinkToAnotherRecordField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        visibleFieldOrder={['fld1', 'fld2', 'fld3', 'fld4']}
                        fields={FIELDS}
                        fieldRenderer={fieldRenderer}
                        records={[{
                            id: 'rec1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'rec2',
                            name: 'Leia Organa'
                        }, {
                            id: 'rec3',
                            name: 'Han Solo'
                        }, {
                            id: 'rec4',
                            name: 'Jar Jar Binks'
                        }]}
                    />
                </div>
            </Viewport>
            <h5>
                With no fields
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 460px;
                        background-color: #fff;
                    `}
                >
                    <LinkToAnotherRecordField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        records={[{
                            id: 'rec1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'rec2',
                            name: 'Leia Organa'
                        }, {
                            id: 'rec3',
                            name: 'Han Solo'
                        }, {
                            id: 'rec4',
                            name: 'Jar Jar Binks'
                        }]}
                    />
                </div>
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying linked records in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <LinkToAnotherRecordField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        visibleFieldOrder={['fld1', 'fld2', 'fld3', 'fld4']}
                        fields={FIELDS}
                        fieldRenderer={fieldRenderer}
                        records={[{
                            id: 'rec1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'rec2',
                            name: 'Leia Organa'
                        }, {
                            id: 'rec3',
                            name: 'Han Solo'
                        }, {
                            id: 'rec4',
                            name: 'Jar Jar Binks'
                        }]}
                    />
                </div>
            </Viewport>
            <h3>
                RecordListItem context
            </h3>
            <p>Used for displaying linked records in a record list item.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <LinkToAnotherRecordField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        visibleFieldOrder={['fld1', 'fld2', 'fld3', 'fld4']}
                        fields={FIELDS}
                        fieldRenderer={fieldRenderer}
                        records={[{
                            id: 'rec1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'rec2',
                            name: 'Leia Organa'
                        }, {
                            id: 'rec3',
                            name: 'Han Solo'
                        }, {
                            id: 'rec4',
                            name: 'Jar Jar Binks'
                        }]}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
