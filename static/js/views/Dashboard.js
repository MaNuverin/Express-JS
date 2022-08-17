import view from "./view.js";

export default class extends view{
    constructor(params){
        super(params);
        this.setTitle("Beranda");
    }
    async getHTMLS(){
        return `<h1>Welcome Back With Me</h1>`;
    }
}