import React from 'react';

/**
 * Component process and represent string as a square
 * @param {string} stringInput - The string to represent
 * @example <TextBox stringInput={yourString} />
 */

class TextBox extends React.Component {
    static propTypes = {
        stringInput: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {text: this.getStringList(props.stringInput)};
    }

    renderSingleString(str, i) {
        /**
         * Component represent value as a string in <div>
         * @param {string} str - the string to represent
         * @param {number} i - index to set as a key
         * @return {html} formatted string
         */

        return(<div className='textbox__inner' key={'str' + i}>{str}</div>)
    }

    getSquareSide (srcLength) {
        /**
         * Get length of the square side
         * @param {number} srcLength - length of income the string
         * @return {number} square side length
         */

        const length = Math.ceil(Math.sqrt(srcLength));
        return length < 1 ? 1 : length;
    }

    fillLastString(list, stringLength) {
        /**
         * Check and fill last string with '.' if it's uncompleted
         * @param {array} list - current list
         * @return {number} stringLength - current list length
         */

        const lastElementIndex = list.length - 1;
        const lastElementLength = list[lastElementIndex].length;

        if (lastElementLength !== stringLength) {
            list[lastElementIndex] += '.'.repeat(stringLength - lastElementLength);
        }

        return list;
    }

    fillMissingLines(list, stringLength) {
        /**
         * Check and fill rest of the array with '.'-strings if it's uncompleted
         * @param {array} list - current list
         * @return {number} stringLength - current list length
         */
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
        /**
         * Convert string to square array of strings
         * @param {string} src - string to convert
         * @return {array} square array of strings o r empty array
         */

        if (src.length > 0) {
            const stringLength = this.getSquareSide (src.length);
            let list = src.match(new RegExp('.{1,' + stringLength + '}', 'g')) || [];
            list = this.fillLastString(list, stringLength);
            list = this.fillMissingLines(list, stringLength);

            return list;
        }

        return [];
    }

    componentWillReceiveProps(nextProps) {
         // If string is new - set it to state

        if(nextProps !== this.state.text)
        this.setState({text: this.getStringList(nextProps.stringInput)});
    }

    render() {
        return <div className='textbox'>
            {this.state.text ? this.state.text.map(this.renderSingleString) : null || null}
        </div>;
    }
}

export default TextBox;