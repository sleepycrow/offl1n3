import State from "../core/state";
import Level1State from "./level1";

const texts = [
    "OFFLINE?! AGAIN?!",
    "THIS IS THE 3RD TIME TODAY!",
    "My ISP will pay for this..."
];

export default class IntroState extends State {

    init(core){
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    update(dt, core){
        if(core.input.keys.z) core.stateManager.switchState(new Level1State());
    }

    draw(core){
        core.ctx.font = "24px sans-serif";
        core.ctx.fillStyle = "#FFF";
        for(var i = 0; i < texts.length; i++){
            core.ctx.fillText(texts[i], 8, ((i + 1) * 24 / core.scale) + 8);
        }

        core.ctx.fillStyle = "#CCC";
        core.ctx.font = "16px sans-serif";
        core.ctx.fillText("Press Z to continue", core.width / 3, core.height - 8);
    }

}