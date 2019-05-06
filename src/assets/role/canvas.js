class canvas {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d'); 
        //this.resources = {} //资源对象
    }
    
}
canvas.prototype.resources = {};

export default canvas