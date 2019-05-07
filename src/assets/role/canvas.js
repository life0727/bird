class canvas {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d'); 
        //this.resources = {} //资源对象
    }
    clickEvent(){
        this.canvas.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.clickTest()
        }
    }
}
canvas.prototype.resources = {}; //资源对象
canvas.prototype.pipeArr = [];  //管子数组

export default canvas