import view from "./view.js";

export default class extends view{
    constructor(params){
        super(params);
        this.setTitle("Blog View");
    }
    async getHTMLS(){
        console.log(this.params.id)
        return `<h1>Blog1</h1>`;
    }
}