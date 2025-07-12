import './GameOver.css';

export function GameOver({ score }) {
  return (
    <div className="score-display">
      <span className="score-label">Score:</span>
      <span className="score-value">{score}</span>
    </div>
  );
}