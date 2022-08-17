import view from "./view.js";

export default class extends view{
    constructor(params){
        super(params);
        this.setTitle("blog");
    }
    async getHTMLS(){
        return `<h1>BLOG</h1>`;
    }
}