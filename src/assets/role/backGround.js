import canvas from './canvas'
import userData from '../userData/data'

class backGround extends canvas{
    constructor(){
        super()
        this.speed = 1;
        this.width = super.resources.bg_day.width;//背景图的宽
        this.height = super.resources.bg_day.height;//背景图的高
        this.x = 0
    }
    run(){
        this.x -= this.speed;
        if(this.x <= -this.canvas.width) this.x = 0;
    }
    render(){
        const skyHeight = this.canvas.height * userData.ScreenRadio - 396;//背景图天空到地面的高度

        this.ctx.drawImage(this.resources.bg_day,this.x,skyHeight);
        this.ctx.drawImage(this.resources.bg_day,this.x + this.width,skyHeight);
        this.ctx.drawImage(this.resources.bg_day,this.x + this.width * 2,skyHeight);

        this.ctx.fillStyle = "#4EC0CA";//sky
        this.ctx.fillRect(0,0,this.canvas.width,skyHeight + 1)

    }
}

export default backGround