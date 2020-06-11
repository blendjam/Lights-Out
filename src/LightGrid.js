import React, { Component } from 'react'
import LightBox from './LightBox';

export default class LightGrid extends Component {
    static defaultProps = {
        rows: 5,
        cols: 5
    }

    state = {
        isON: this.createBoard(),
        isWinner: false
    }

    createBoard() {
        let board = [];

        for (let i = 0; i < this.props.rows; i++) {
            let rows = [];
            for (let j = 0; j < this.props.cols; j++) {
                rows.push(Math.floor(Math.random() * 2));
            }
            board.push(rows);
        }

        return board;
    }

    changeColor = (indexValue) => {
        let { rows, cols } = this.props;
        let board = this.state.isON;
        let { i, j } = indexValue;

        function flipCell(i, j) {
            if (i >= 0 && i < rows && j >= 0 && j < cols)
                board[i][j] = !board[i][j];
        }

        flipCell(i, j);
        flipCell(i, j - 1);
        flipCell(i, j + 1);
        flipCell(i + 1, j);
        flipCell(i - 1, j);

        let hasWon = board.every(row => row.every(e => !e));

        this.setState({ isON: board, isWinner: hasWon })

    }

    handleClick = (e) => {
        let indexValue = e.target.id.split("-");
        indexValue = {
            i: parseInt(indexValue[0]),
            j: parseInt(indexValue[1]),
        }

        this.changeColor(indexValue);
    }

    render() {
        let board = this.state.isON.map((rows, i) => (
            rows.map((e, j) => (
                <LightBox
                    isON={e}
                    id={`${i}-${j}`}
                    key={`${i}-${j}`}
                    onClick={this.handleClick}
                />
            ))
        ))
        return (
            <div>
                {
                    this.state.isWinner
                        ? <h1> Winner </h1>
                        : <div className="LightsGrid"> 
                            {board}
                        </div>
                }

            </div>
        )
    }
}
