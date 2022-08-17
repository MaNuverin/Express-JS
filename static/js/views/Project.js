import view from "./view.js";

export default class extends view{
    constructor(params){
        super(params);
        this.setTitle("project");
    }
    async getHTMLS(){
        return `<h1>Project</h1>`;
    }
}