import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('construct')
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('unmount')
    }


    state = {
        count: 0,
    };

    add = () => {
        this.setState(prev => ({count: prev.count + 1}))
    }

    minus = () => {
        this.setState(prev => ({count: prev.count - 1}))
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
    );
    }
}

export default App;
