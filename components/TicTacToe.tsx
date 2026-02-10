"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Trophy, User, Bot, BrainCircuit } from "lucide-react";

type Player = "X" | "O" | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isHumanNext, setIsHumanNext] = useState<boolean>(true);
  const [gameStatus, setGameStatus] = useState<"idle" | "playing" | "finished">("idle");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);
  const [humanPlayer, setHumanPlayer] = useState<"X" | "O">("X");

  const checkWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (squares: Player[], depth: number, isMaximizing: boolean, botSymbol: "X" | "O", humanSymbol: "X" | "O"): number => {
    const result = checkWinner(squares);
    if (result === botSymbol) return 10 - depth;
    if (result === humanSymbol) return depth - 10;
    if (!squares.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = botSymbol;
          const score = minimax(squares, depth + 1, false, botSymbol, humanSymbol);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = humanSymbol;
          const score = minimax(squares, depth + 1, true, botSymbol, humanSymbol);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const makeBotMove = useCallback(() => {
    if (winner || gameStatus !== "playing") return;

    const botSymbol = humanPlayer === "X" ? "O" : "X";
    let bestScore = -Infinity;
    let move = -1;

    const emptySpots = board.filter((s) => s === null).length;
    if (emptySpots === 9) {
      move = 4;
    } else {
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          const newBoard = [...board];
          newBoard[i] = botSymbol;
          const score = minimax(newBoard, 0, false, botSymbol, humanPlayer);
          if (score > bestScore) {
            bestScore = score;
            move = i;
          }
        }
      }
    }

    if (move !== -1) {
      const newBoard = [...board];
      newBoard[move] = botSymbol;
      setBoard(newBoard);
      
      const win = checkWinner(newBoard);
      if (win) {
        setWinner(win);
        setGameStatus("finished");
      } else if (!newBoard.includes(null)) {
        setWinner("Draw");
        setGameStatus("finished");
      } else {
        setIsHumanNext(true);
      }
    }
  }, [board, gameStatus, humanPlayer, winner]);

  useEffect(() => {
    if (!isHumanNext && gameStatus === "playing" && !winner) {
      const timer = setTimeout(() => {
        makeBotMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHumanNext, gameStatus, winner, makeBotMove]);

  const handleHumanClick = (index: number) => {
    if (board[index] || winner || !isHumanNext || gameStatus !== "playing") return;

    const newBoard = [...board];
    newBoard[index] = humanPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      setGameStatus("finished");
    } else if (!newBoard.includes(null)) {
      setWinner("Draw");
      setGameStatus("finished");
    } else {
      setIsHumanNext(false);
    }
  };

  const startGame = (whoStarts: "human" | "bot") => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setGameStatus("playing");
    
    if (whoStarts === "human") {
      setHumanPlayer("X");
      setIsHumanNext(true);
    } else {
      setHumanPlayer("O");
      setIsHumanNext(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setGameStatus("idle");
  };

  return (
    <div className="relative w-full max-w-sm mx-auto p-6 glass-effect rounded-3xl border border-slate-800 min-h-[400px] flex flex-col justify-center">
      
      <AnimatePresence mode="wait">
        {gameStatus === "idle" && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-6"
          >
            <div className="p-4 bg-blue-500/10 rounded-full w-fit mx-auto text-blue-400 mb-2">
              <BrainCircuit size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white">Unbeatable AI</h3>
            <p className="text-slate-400 text-sm px-4">
              Tantang AI yang tidak mungkin dikalahkan. Berani coba? Pilih siapa jalan duluan.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <button 
                onClick={() => startGame("human")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
              >
                <User size={18} />
                Saya Jalan Duluan
              </button>
              <button 
                onClick={() => startGame("bot")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-700 hover:border-red-500 hover:bg-red-500/10 text-white font-semibold transition-all"
              >
                <Bot size={18} />
                Bot Jalan Duluan
              </button>
            </div>
          </motion.div>
        )}

        {gameStatus !== "idle" && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-center h-12 flex flex-col justify-center">
              {winner ? (
                <div className="flex items-center gap-2 text-xl font-bold text-white animate-bounce">
                  {winner === "Draw" ? "Seri! (Nice try)" : (winner === humanPlayer ? "Kamu Menang! (Mustahil)" : "AI Menang!")}
                  {winner !== "Draw" && <Trophy className="text-yellow-400" size={20} />}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full">
                  {isHumanNext ? <User size={14} className="text-blue-400"/> : <Bot size={14} className="text-red-400"/>}
                  {isHumanNext ? "Giliranmu" : "AI sedang berpikir..."}
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {board.map((value, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: !value && !winner ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleHumanClick(index)}
                  disabled={!!value || !!winner || !isHumanNext}
                  className={`w-20 h-20 rounded-xl text-4xl font-bold flex items-center justify-center transition-all shadow-lg
                    ${value === humanPlayer ? "bg-blue-500/20 text-blue-400 border-blue-500/50" : ""}
                    ${value && value !== humanPlayer ? "bg-red-500/20 text-red-400 border-red-500/50" : ""}
                    ${!value ? "bg-slate-800/50 border-slate-700" : ""}
                    ${!value && !winner && isHumanNext ? "hover:bg-slate-700/80 cursor-pointer" : ""}
                    border
                  `}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-5 py-2 text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all mt-2"
            >
              <RotateCcw size={16} />
              {winner ? "Main Lagi" : "Menyerah / Reset"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}