import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class StatusBar extends React.Component {
    render() {
        return (
            <div>Next player O</div>
        )
    }
}

class Square extends React.Component {
    render() {
        return (
            <div className="box-item">
                {this.props.value}
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }
    render() {
        return (
            <div className="box-wrapper">
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
                <Square value={}/>
            </div>
        )
    }
}


class Game extends React.Component {
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <StatusBar/>
                </div>
            </div>
        )
    }
}




// ========================================
//获取根元素
const root = ReactDOM.createRoot(document.getElementById("app"));
//挂载DOM
root.render(<Game />);
