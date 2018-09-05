import Sprite from "../core/sprite";
import AnimationManager from "../core/animationManager";

export default class EnemyEntity extends Sprite {

    constructor(x, y, spritesheet){
        super(x, y, 16, 32);

        // animations
        this.spritesheet = spritesheet;

        this.anims = new AnimationManager(spritesheet, 16, 32);
        this.anims.addAnimation("walk_r", 7, [0, 1, 2, 1]);
        this.anims.addAnimation("punch_r", 7, [3]);
        this.anims.addAnimation("walk_l", 7, [5, 6, 7, 6]);
        this.anims.addAnimation("punch_l", 7, [4]);

        // movement
        this.speed = -2;

        // attack
        this.regenIntervalLength = 500;
        this.regenIntervalCounter = this.encounterCooldownLength;
        this.attackCountdownLength = 5;
        this.attackCountdownCounter = this.attackCountdownLength;
        this.attacking = false;
        this.hitPlayer = false;

        this.dead = false;
    }

    update(dt, core, tilemap){
        this.anims.update(dt);

        if(this.regenIntervalCounter > 0){
            this.regenIntervalCounter -= dt;
        }else{
            this.attackCountdownCounter = this.attackCountdownLength;
            this.hitPlayer = false;
        }

        if(tilemap){
            let blocked = tilemap.calculateCollision(this.x, this.y, this.width, this.height, this.speed, 0);

            if(blocked.right || blocked.left) this.speed = -this.speed;
            else this.x += this.speed;
        }

        if(this.speed > 0) this.anims.playAnimation("walk_r");
        else this.anims.playAnimation("walk_l");
    }

    draw(core){
        let frame = this.anims.getCurrentFrame();

        core.drawImage(this.spritesheet,
            frame.x, frame.y, frame.width, frame.height,
            this.x, this.y, this.width, this.height);
    }

    onCollideWithEntity(entity){
        this.regenIntervalCounter = this.regenIntervalLength;

        if(!this.hitPlayer){
            if(this.attackCountdownCounter > 0){
                this.attackCountdownCounter--;
            }else{
                this.attackCountdownCounter = this.attackCountdownLength;

                let facing = (this.x > entity.x) ? "l" : "r";
                this.anims.playAnimation("punch_" + facing);

                if(entity.takeDamage) entity.takeDamage(this, 1);

                this.hitPlayer = true;
            }
        }
    }

    takeDamage(){
        this.dead = true;
    }

}