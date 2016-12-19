import React from 'react';

class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {strings: this.getStringList(props.stringInput) || []};
    }

    renderSingleString(str, i) {
        return(<div className='textbox__inner' key={'str' + i}>{str}</div>)
    }

    getStringLength(srcLength) {
        const length = Math.round(Math.sqrt(srcLength));
        return length < 1 ? 1 : length;
    }

    getStringList(src) {
        const length = this.getStringLength(src.length);
        return src.match(new RegExp('.{1,' + length + '}', 'g')) || [];
    }

    componentWillReceiveProps(nextProps) {
        this.setState({strings: this.getStringList(nextProps.stringInput)});
    }

    render() {
        return <div className='textbox'>
            {this.state.strings ? this.state.strings.map(this.renderSingleString) : null || null}
        </div>;
    }
}

export default Textbox;