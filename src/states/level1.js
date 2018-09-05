import State from "../core/state";
import Tilemap from "../core/tilemap";
import PlayerEntity from "../entities/player";
import EnemyEntity from "../entities/enemy";
import Sprite from "../core/sprite";
import BossFightState from "./bossFight";

const map = {
    "entities": [
        {
            "type": "EntityEnemy",
            "x": 340,
            "y": 460
        },
        {
            "type": "EntityEnemy",
            "x": 52,
            "y": 380
        },
        {
            "type": "EntityEnemy",
            "x": 404,
            "y": 380
        },
        {
            "type": "EntityEnemy",
            "x": 444,
            "y": 300
        },
        {
            "type": "EntityEnemy",
            "x": 192,
            "y": 300
        },
        {
            "type": "EntityEnemy",
            "x": 268,
            "y": 300
        },
        {
            "type": "EntityEnemy",
            "x": 424,
            "y": 300
        },
        {
            "type": "EntityEnemy",
            "x": 368,
            "y": 220
        },
        {
            "type": "EntityEnemy",
            "x": 396,
            "y": 220
        },
        {
            "type": "EntityEnemy",
            "x": 232,
            "y": 380
        },
        {
            "type": "EntityEnemy",
            "x": 80,
            "y": 220
        },
        {
            "type": "EntityEnemy",
            "x": 236,
            "y": 140
        },
        {
            "type": "EntityEnemy",
            "x": 284,
            "y": 140
        },
        {
            "type": "EntityEnemy",
            "x": 192,
            "y": 140
        },
        {
            "type": "EntityEnemy",
            "x": 252,
            "y": 60
        },
        {
            "type": "EntityEnemy",
            "x": 212,
            "y": 60
        },
        {
            "type": "EntityEnemy",
            "x": 232,
            "y": 60
        },
        {
            "type": "EntityEnemy",
            "x": 400,
            "y": 140
        },
        {
            "type": "EntityEnemy",
            "x": 344,
            "y": 140
        }
    ],
    "map": [
        [4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [0,0,0,2,0,0,0,2,0,0,0,2,0,7,0,2,0,0,0,2,0,7,7,2,0,0,0,2,0,0,0,4],
        [3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,0,0,0,4],
        [4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4],
        [4,0,0,2,0,0,0,2,7,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,7,7,0,2,0,0,8,4],
        [4,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,4],
        [4,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
        [4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4],
        [4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,0,0,0,4],
        [4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4],
        [4,0,0,2,0,7,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,7,0,2,0,0,0,2,0,0,0,4],
        [4,0,0,0,3,3,3,1,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,1,3,4],
        [4,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
        [4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
        [4,0,0,2,0,0,0,2,0,7,0,2,0,0,0,2,0,0,0,2,0,0,0,2,7,7,0,2,0,0,0,4],
        [4,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,4],
        [4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4],
        [4,0,0,2,0,7,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,7,0,2,0,0,0,2,0,0,0,4],
        [4,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
        [4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4]
    ],
    "collision": [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
};

export default class Level1State extends State {

    constructor(playerHealth = 3){
        super();
        this.playerHealth = playerHealth;
    }

    init(core){
        this.drawLoadingScreen(core);

        return new Promise((resolve, reject) => {
            core.assets.loadImages({
                tiles: "./assets/office_tiles.png",
                player: "./assets/player.png",
                enemy: "./assets/enemy.png"
            })
            .then(() => {
                this.tilemap = new Tilemap(32, 32, 16, core.assets.loaded.tiles);
                this.tilemap.loadMap(map);

                this.player = new PlayerEntity(32, 448, core.assets.loaded.player);

                this.trigger = new Sprite(0, 0, 32, 96);

                this.enemies = this.tilemap.spawnEntityByType("EntityEnemy", EnemyEntity, core.assets.loaded.enemy);

                resolve();
            })
            .catch(reject);
        });
    }

    update(dt, core){
        // if the player is dead, don't update anything, just wait for the enter key
        if(this.player.dead){
            if(core.input.keys.Enter) core.stateManager.switchState(new Level1State());
            return true;
        }

        // iif touching the trigger at the end, go to next level
        if(this.player.collidesWith(this.trigger) || window.skipToBossFight){
            core.stateManager.switchState(new BossFightState(this.player.health));
            return true;
        }

        //update the player
        this.player.update(dt, core, this.tilemap);
        core.camera.centerOnEntity(this.player, this.tilemap);

        //update the enemies
        for(var i = 0; i < this.enemies.length; i++){
            // if this enemy is dead, remove it from the array, go back and try again
            if(this.enemies[i].dead){
                this.enemies.splice(i, 1);
                i--;
                continue;
            }

            this.enemies[i].update(dt, core, this.tilemap);

            if(this.enemies[i].collidesWith(this.player)){
                this.enemies[i].onCollideWithEntity(this.player);
                this.player.onCollideWithEntity(this.enemies[i]);
            }
        }
    }

    draw(core){
        //draw background
        core.ctx.fillStyle = "#949494";
        core.ctx.fillRect(0, 0, core.width, core.height);

        this.tilemap.drawArea(core, core.camera.x, core.camera.y, core.camera.width, core.camera.height);

        //draw the enemies
        for(var i = 0; i < this.enemies.length; i++){
            if(!this.enemies[i].dead) this.enemies[i].draw(core);
        }

        this.player.draw(core);

        // hud
        core.ctx.fillStyle = "#000";
        core.ctx.fillRect(0, 0, 48, 18);
        core.ctx.fillStyle = "#FFF";
        core.ctx.font = "16px sans-serif";
        core.ctx.fillText("HP: " + this.player.health, 1, 16);

        // game over text
        if(this.player.dead){
            core.ctx.fillStyle = "#ff0000";
            core.ctx.font = "32px sans-serif";
            core.ctx.fillText("GAME OVER.", (core.width / 3) - 16, (core.height / 2) - 32);
            core.ctx.font = "16px sans-serif";
            core.ctx.fillText("Press ENTER to retry.", core.width / 3, core.height / 2);
        }
    }

}