import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                x={i / 3}
                y={i % 3}
            />
        );
    }

    renderRow(start, end) {
        const length = end - start + 1;
        const array = Array.from({ length }, (_, i) => start + i);

        return array.map((elem) => this.renderSquare(elem));
    }

    renderBoard() {
        return [0, 1, 2].map((value) => {
            return (
                <div
                    className="board-row"
                    key={value}
                >
                    {this.renderRow(value * 3, value * 3 + 2)}
                </div>
            )}
        );
    }

    render() {
        return (
            <div>
                {this.renderBoard()}
            </div>
        );
    }
}