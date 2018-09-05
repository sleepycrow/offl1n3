import Sprite from "../core/sprite";
import AnimationManager from "../core/animationManager";

export default class ProjectileEntity extends Sprite {

    constructor(x, y, spritesheet, speed = -3){
        super(x, y, 16, 16);

        // movement
        this.speed = speed;

        // animations
        this.spritesheet = spritesheet;

        this.anims = new AnimationManager(spritesheet, 16, 32);
        this.anims.addAnimation("default", 7, [0, 1]);
    }

    update(dt){
        this.anims.update(dt);
        this.x += this.speed;
    }

    draw(core){
        let frame = this.anims.getCurrentFrame();

        core.drawImage(this.spritesheet,
            frame.x, frame.y, frame.width, frame.height,
            this.x, this.y, this.width, this.height);
    }
    
    onCollideWithEntity(entity){
        entity.takeDamage(this, 999);
    }

}