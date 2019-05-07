import canvas from './canvas'
import userData from '../userData/data'

class pipe extends canvas{
    constructor(){
        super()
        this.speed = 1;
        this.width_down = super.resources.pipe_down.width;//上管子的宽
        this.width_up = super.resources.pipe_up.width;//下管子的宽
        this.height_down = super.resources.pipe_down.height;//上管子的高
        this.height_up = super.resources.pipe_up.height;//下管子的高
        this.x = this.canvas.width;
        this.y_down = - Math.random() * (this.height_down - 110); //上馆子最低高度不低于110
        this.y_up = this.canvas.height * userData.ScreenRadio + this.y_down - userData.Gap;
        super.pipeArr.push(this)
        super.pipeArr.length > 4 && super.pipeArr.shift()
        this.clickEvent()
    }
    clickTest(){
        console.log('pie')
    }
    run(){
        this.x -= 2;
    }
    render(){
        this.ctx.drawImage(this.resources.pipe_down,this.x,this.y_down);
        this.ctx.drawImage(this.resources.pipe_up,this.x,this.y_up);

    }
}

export default pipe