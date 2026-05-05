import { useState } from 'react';

type Choice = '石頭' | '剪刀' | '布' | '';

export default function Game() {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<Choice>('');
  const [computerChoice, setComputerChoice] = useState<Choice>('');
  const [resultMsg, setResultMsg] = useState<string>('請選擇出拳！');

  const choices: Choice[] = ['石頭', '剪刀', '布'];

  const playGame = (playerSelection: Choice) => {
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(playerSelection);
    setComputerChoice(computerSelection);

    if (playerSelection === computerSelection) {
      setResultMsg('平手！');
    } else if (
      (playerSelection === '石頭' && computerSelection === '剪刀') ||
      (playerSelection === '剪刀' && computerSelection === '布') ||
      (playerSelection === '布' && computerSelection === '石頭')
    ) {
      setResultMsg('你贏了！🎉');
      setPlayerScore(p => p + 1);
    } else {
      setResultMsg('電腦贏了！😢');
      setComputerScore(p => p + 1);
    }
  };

  return (
    <section id="game" className="section-container">
      <h2>小遊戲：猜拳大對決</h2>
      <div className="scoreboard">
        <span>玩家分數：{playerScore}</span>
        <span> | </span>
        <span>電腦分數：{computerScore}</span>
      </div>
      <div className="card">
        <p>你的選擇：<strong>{playerChoice || '?'}</strong></p>
        <p>電腦的選擇：<strong>{computerChoice || '?'}</strong></p>
        <h3 style={{ color: '#d9534f' }}>{resultMsg}</h3>
      </div>
      <div className="button-group">
        <button onClick={() => playGame('石頭')}>🪨 石頭</button>
        <button onClick={() => playGame('剪刀')}>✂️ 剪刀</button>
        <button onClick={() => playGame('布')}>🖐️ 布</button>
      </div>
      <button 
        style={{ marginTop: '20px', backgroundColor: '#6c757d' }} 
        onClick={() => {
          setPlayerScore(0); setComputerScore(0); setPlayerChoice(''); setComputerChoice(''); setResultMsg('已重新開始！');
        }}>
        🔄 重新開始
      </button>
    </section>
  );
}