import React from 'react';
import { DEFAULT_TEXT } from '../../config';

class Textbox extends React.Component {
    static propTypes = {
        stringInput: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        stringInput: DEFAULT_TEXT
    };

    constructor(props) {
        super(props);
        this.state = {text: this.getStringList(props.stringInput)};
    }

    renderSingleString(str, i) {
        return(<div className='textbox__inner' key={'str' + i}>{str}</div>)
    }

    getStringLength(srcLength) {
        const length = Math.ceil(Math.sqrt(srcLength));
        return length < 1 ? 1 : length;
    }

    fillLastString(list, stringLength) {
        const lastElementIndex = list.length - 1;
        const lastElementLength = list[lastElementIndex].length;

        if (lastElementLength !== stringLength) {
            const ellipses = '.'.repeat(stringLength - lastElementLength);
            list[lastElementIndex] += ellipses;
        }

        return list;
    }

    fillMissingLines(list, stringLength) {
        const listLength = list.length;

        if (listLength !== stringLength) {
            const missingLine = '.'.repeat(stringLength);
            let missingLineList = new Array(stringLength - listLength);
            missingLineList = missingLineList.fill(missingLine);
            return list.concat(missingLineList);
        }

        return list;
    }

    getStringList(src) {
        if (src.length > 0) {
            const stringLength = this.getStringLength(src.length);
            let list = src.match(new RegExp('.{1,' + stringLength + '}', 'g')) || [];
            list = this.fillLastString(list, stringLength);
            list = this.fillMissingLines(list, stringLength);

            return list;
        }

        return [];
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.state.text)
        this.setState({text: this.getStringList(nextProps.stringInput)});
    }

    render() {
        return <div className='textbox'>
            {this.state.text ? this.state.text.map(this.renderSingleString) : null || null}
        </div>;
    }
}

export default Textbox;