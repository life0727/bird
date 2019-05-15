import canvas from '../role/canvas'

class util extends canvas{
    // constructor(){
    //     super();
    // }
    clear(){ //清屏
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    } 
    score(){ //渲染分数
        const score = super.msg.count.toString();
        const numWidth = super.resources.num0.width + 10;
        for(let i = 0;i < score.length; i++){
            this.ctx.drawImage(super.resources[`num${score[i]}`],(this.canvas.width / 2) - (numWidth * score.length) / 2 + i * numWidth,150);
        }
    }
}

export default util