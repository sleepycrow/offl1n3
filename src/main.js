/*
"Let me not die without fame, without a fight,
But let me do some great deed to be heard by those to come."
 - Homer, The Iliad

if found, please return to sleepycrow
*/

import Game from "./core/game";
import TitleScreenState from "./states/titleScreen";

var game = new Game("game-canvas", 1);
game.stateManager.switchState(new TitleScreenState());