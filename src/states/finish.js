import State from "../core/state";

const texts = [
    "CONGRATULATIONS! YOU DID IT!",
    "",
    "You might have the police on your case",
    "now, but at least you're back online!",
    "Good job!"
];

export default class FinishState extends State {

    init(core){
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    draw(core){
        core.ctx.font = "24px sans-serif";
        core.ctx.fillStyle = "#FFF";
        for(var i = 0; i < texts.length; i++){
            core.ctx.fillText(texts[i], 8, ((i + 1) * 24 / core.scale) + 8);
        }
    }

}