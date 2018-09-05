import State from "../core/state";
import IntroState from "./intro";

export default class TitleScreenState extends State {

    init(core){
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    update(dt, core){
        if(core.input.keys.Enter){
            core.stateManager.switchState(new IntroState());
        }
    }

    draw(core){
        //background
        let gradient = core.ctx.createLinearGradient(0, 0, 0, core.height);
        gradient.addColorStop(0, "#530000");
        gradient.addColorStop(0.5, "#000");
        gradient.addColorStop(1, "#000");

        core.ctx.fillStyle = gradient;
        core.ctx.fillRect(0, 0, core.width, core.height);

        //text
        //title
        core.ctx.fillStyle = "#FFF";
        core.ctx.font = "64px sans-serif";
        core.ctx.fillText("OFFL1N3", (core.width / 4) - 32, core.height / 3);

        //press enter
        core.ctx.fillStyle = "#CCC";
        core.ctx.font = "16px sans-serif";
        core.ctx.fillText("Press ENTER to start", (core.width / 4) + 32, core.height / 2);
    }

}