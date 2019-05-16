import canvas from '../role/canvas'
//import init from './init.js'

class util extends canvas{
    constructor(){
        super();
        this.boomGlobalAlpha = 0;//鸟爆炸时的透明度
        this.gameOverY = -super.resources.text_game_over.height;
        this.gameOverX = this.canvas.width / 2 - super.resources.text_game_over.width / 2;
        //super.clickEvent() //绑定事件
    }
    clear(){ //清屏
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    } 
    score(){ //渲染分数
        const score = super.msg.count.toString();
        const numWidth = super.resources.num0.width + 10;
        for(let i = 0;i < score.length; i++){
            this.ctx.drawImage(super.resources[`num${score[i]}`],(this.canvas.width / 2) - (numWidth * score.length) / 2 + i * numWidth,50);
        }
    }
    boom(){
        //爆炸    
        this.gameOverY += 55

        this.ctx.save();
        this.boomGlobalAlpha += 0.1;

        if(this.boomGlobalAlpha > 1) (this.boomGlobalAlpha = 0,clearInterval(super.msg.timer))
        this.ctx.globalAlpha = this.boomGlobalAlpha;
        this.ctx.fillStyle="white";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.restore();
        
        //爆炸用图 顺带 覆盖小鸟
        //this.ctx.drawImage(super.resources.boom,super.AABB.left - super.resources.boom.width / 2 + 10,super.AABB.top - super.resources.boom.height / 2 + 10);
        this.ctx.drawImage(super.resources.boom,0,0,90,100,super.AABB.left - 45 + 20,super.AABB.top - 50 + 10,90,100); 

        if(this.gameOverY > this.canvas.height / 2 - super.resources.text_game_over.height / 2) this.gameOverY = this.canvas.height / 2 - super.resources.text_game_over.height / 2 ;
        
        this.ctx.drawImage(super.resources.text_game_over,this.gameOverX,this.gameOverY); 

        this.ctx.fillStyle = 'yellow';
        this.ctx.font = "38px serif";
        this.ctx.fillText('按f10重开',this.gameOverX + 10,this.gameOverY + super.resources.text_game_over.height + 38); 


    }
    clearSession(){ //清楚开始之前的数据
        super.msg.count = 0;
        super.msg.frameNum = 0;
        super.msg.isShoudown = false;
        super.msg.timer = null;
        super.pipeArr.splice(0,super.pipeArr.length);
        super.AABB.top = 0;
        super.AABB.left = 0;
        super.AABB.bottom = 0;
        super.AABB.right = 0;
    }
}

export default util