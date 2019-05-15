import canvas from './canvas'
import userData from '../userData/data'

class ground extends canvas{
    constructor(){
        super()
        this.speed = 2;
        this.width = super.resources.land.width;//地面图的宽
        this.height = super.resources.land.height;//地面图的高
        this.x = 0
    }
    run(){
        this.x -= this.speed;
        if(this.x <= -this.canvas.width) this.x = 0;

        //碰撞监测 用地面监测小鸟
        if(this.canvas.height * userData.ScreenRadio < super.AABB.bottom) this.msg.isShoudown = true;
    }
    render(){
        const landHeight = this.canvas.height -  this.canvas.height * userData.ScreenRadio - this.height;

        this.ctx.drawImage(this.resources.land,this.x,this.canvas.height * userData.ScreenRadio);
        this.ctx.drawImage(this.resources.land,this.x + this.width,this.canvas.height * userData.ScreenRadio);
        this.ctx.drawImage(this.resources.land,this.x + this.width * 2,this.canvas.height * userData.ScreenRadio);

        this.ctx.fillStyle = "#DED895";//ground
        this.ctx.fillRect(0,this.canvas.height * userData.ScreenRadio + this.height - 1,this.canvas.width,landHeight + 1)
    }
}

export default ground