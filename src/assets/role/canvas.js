class canvas {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d'); 
        
    }
    clickEvent(){
        this.canvas.onclick = () => this.toUp();
        //this.canvas.onkeydown = (e) => this.toUp(e)
        window.addEventListener('keydown',(e) => e.code == 'Space' && this.toUp(e))

    }
}

canvas.prototype.resources = {}; //资源对象
canvas.prototype.msg = { //canvas 信息
    frameNum : 0, //帧编号
    count:0, //分数 
    isShoudown : false  //是否暂停定时器
};
canvas.prototype.pipeArr = [];  //管子数组
canvas.prototype.AABB = {//AABB盒
    top:0,
    bottom:0,
    right:0,
    left:0
};  

export default canvas