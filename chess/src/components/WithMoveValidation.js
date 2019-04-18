import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess from "chess.js"; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor

import Chessboard from "chessboardjsx";
import Navbar from './Navbar'
import Gauge from './Gauge'

import axios from 'axios'

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "start",
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: "",
    // currently clicked square
    square: "",
    // array of past game moves
    history: [],
    degrees: null
  };

  componentDidMount() {
    this.game = new Chess();
  }

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    this.setState(({ pieceSquare, history }) => ({
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, #fffc00 36%, transparent 40%)",
              borderRadius: "50%"
            }
          },
          ...squareStyling({
            history: this.state.history,
            pieceSquare: this.state.pieceSquare
          })
        };
      },
      {}
    );

    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles }
    }));
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(({ history, pieceSquare }) => ({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  onMouseOverSquare = square => {
    // get list of possible moves for this square
    let moves = this.game.moves({
      square: square,
      verbose: true
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    this.highlightSquare(square, squaresToHighlight);
  };

  onMouseOutSquare = square => this.removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  onDragOverSquare = square => {
    this.setState({
      dropSquareStyle:
        square === "e4" || square === "d4" || square === "e5" || square === "d5"
          ? { backgroundColor: "cornFlowerBlue" }
          : { boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)" }
    });
  };

  onSquareClick = square => {
    this.setState(({ history }) => ({
      squareStyles: squareStyling({ pieceSquare: square, history }),
      pieceSquare: square
    }));

    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      pieceSquare: ""
    });
  };

  onSquareRightClick = square =>
    this.setState({
      squareStyles: { [square]: { backgroundColor: "deepPink" } }
    });

    handleChanges = e => {
        e.preventDefault()
        this.setState ({
            fen: e.target.value
        })
    }

   passChange = (e, string) => {
       e.preventDefault()
       this.setState({
           ...this.state,
           fen: string
       })

        axios 
          .post ( 'https://over9000be2.herokuapp.com/api/games', {fen: this.state.fen})
          .then (res => {
              console.log(res)
              this.setState({
                degrees: res.data.dummyOutlook
              })
          })
          .catch(err => console.log(err))
        
   }

  render() {
    const { fen, dropSquareStyle, squareStyles, degrees} = this.state;

    return this.props.children({
        degrees,
        squareStyles,
        position: fen,
        onMouseOverSquare: this.onMouseOverSquare,
        onMouseOutSquare: this.onMouseOutSquare,
        onDrop: this.onDrop,
        dropSquareStyle,
        onDragOverSquare: this.onDragOverSquare,
        onSquareClick: this.onSquareClick,
        onSquareRightClick: this.onSquareRightClick,
        passChange: this.passChange
        })        
  }
}

export default function WithMoveValidation(props) {

  return (
      <div>
        <div>
        <HumanVsHuman >
            {({
            degrees,
            position,
            onDrop,
            onMouseOverSquare,
            onMouseOutSquare,
            squareStyles,
            dropSquareStyle,
            onDragOverSquare,
            onSquareClick,
            onSquareRightClick,
            passChange
            }) => (
            <div className="board-wrapper">
            <Chessboard
                id="humanVsHuman"
                width={520}
                position={position}
                onDrop={onDrop}
                onMouseOverSquare={onMouseOverSquare}
                onMouseOutSquare={onMouseOutSquare}
                boardStyle={{
                borderRadius: "5px",
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
                }}
                squareStyles={squareStyles}
                dropSquareStyle={dropSquareStyle}
                onDragOverSquare={onDragOverSquare}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
            />
            <Sidebar passChange={passChange} degrees={degrees} />
            </div>

            )}
        </HumanVsHuman>
        </div>
    </div>
  );
}

const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)"
      }
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)"
      }
    })
  };
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
console.log(props.degrees)
        this.state = {
            fen: '',
            degrees: null
        }
    }

    // componentWillReceiveProps() {
    //   this.setState({
    //     degrees:this.props.degrees
    //   })
    // }


    handleChanges = e => {
        this.setState ({
            fen: e.target.value
        })
    }



    render() {

        return (
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <div className="side-bar-top">
              <Gauge degrees={this.props.degrees}/>
            </div>
            <form onSubmit={e => this.props.passChange(e, this.state.fen)}>
                <h3 className="white-text">Paste a FEN score here to set your board:</h3>
                <input name="fen" placeholder="" onChange={this.handleChanges} value={this.state.fen} className="fen-input"></input>
                <button type="submit" className="fen-btn" >Set Board</button>
            </form>
            <h2 className="white-text">{this.props.degrees}</h2>
          </div>
        </div>
        )
    }
}