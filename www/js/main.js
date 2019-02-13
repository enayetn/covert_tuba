
// Placing globals here for now... need to think about how to manage games properly
var play_area = document.getElementById("board");
var play_size = 3;
var game_board;

var start_game_state = new GameState();

function startGame() {
  game_board = new Board(play_area, play_size);
  game_board.render(start_game_state);
  createGame();
}

function updateBoard(state) {
  game_board.render(state);
}

function GameState(board, active, winner) {
  return {
    board: board || new Array(play_size*play_size).fill(null),
    active_player: active || 0,
    winner: winner || null
  };
};