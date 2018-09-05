import Sprite from "../core/sprite";
import ProjectileEntity from "./projectile";
import AnimationManager from "../core/animationManager";

export default class BossEntity extends Sprite {

    constructor(x, y, spritesheet, projectileSpritesheet, phases = []){
        super(x, y, 16, 32);

        this.dead = false;

        // animation
        this.spritesheet = spritesheet;
        this.resetAnimationAfter = 500;
        this.anims = new AnimationManager(spritesheet, this.width, this.height);
        this.anims.addAnimation("idle_r", 1, [1]);
        this.anims.addAnimation("attack_r", 1, [3]);
        this.anims.addAnimation("idle_l", 1, [6]);
        this.anims.addAnimation("attack_l", 1, [4]);

        // attack
        this.attackInterval = 1250;
        this.attackCounter = 0;
        this.projectiles = [];
        this.projectileSpritesheet = projectileSpritesheet;
        this.projectileSpeed = 3;

        // phases
        this.phases = phases;
        this.currentPhase = 0;
        
        if(phases[this.currentPhase]){
            this.x = phases[this.currentPhase].x;
            this.y = phases[this.currentPhase].y;
        }
    }

    update(dt, core, player){
        if(this.dead) return false;

        this.facing = (player.x < this.x) ? "l" : "r";

        // send new projectiles
        this.attackCounter += dt;

        if(this.attackCounter >= this.attackInterval){
            this.attackCounter = 0;
            this.anims.playAnimation("attack_" + this.facing);

            let speed = (player.x < this.x) ? -this.projectileSpeed : this.projectileSpeed;
            this.projectiles.push(new ProjectileEntity(this.x, this.y, this.projectileSpritesheet, speed));
        }else if(this.attackCounter >= this.resetAnimationAfter){
            this.anims.playAnimation("idle_" + this.facing);
        }

        // update all projectiles
        for(var i = 0; i < this.projectiles.length; i++){
            if(this.projectiles[i].x < 0){
                this.projectiles.splice(i, 1);
                i--;
                continue;
            }

            this.projectiles[i].update(dt);

            if(this.projectiles[i].collidesWith(player)){
                player.onCollideWithEntity(this.projectiles[i]);
                this.projectiles[i].onCollideWithEntity(player);
            }
        }
    }

    draw(core){
        if(this.dead) return false;

        let frame = this.anims.getCurrentFrame();
        
        core.drawImage(this.spritesheet,
            frame.x, frame.y, frame.width, frame.height,
            this.x, this.y, this.width, this.height);

        for(var i = 0; i < this.projectiles.length; i++){
            this.projectiles[i].draw(core);
        }
    }

    takeDamage(){
        this.currentPhase++;
        if(this.phases[this.currentPhase]){
            let phase = this.phases[this.currentPhase];
            this.x = phase.x;
            this.y = phase.y;
        }else{
            this.dead = true;
        }
    }

}