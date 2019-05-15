import canvas from './canvas'
import userData from '../userData/data'

class pipe extends canvas{
    constructor(){
        super()
        this.speed = 2;
        this.height_down = super.resources.pipe_down.height;//上管子的高
        this.x = this.canvas.width;
        this.y_down = - Math.random() * (this.height_down - 110); //上馆子最低高度不低于110
        this.y_up = this.canvas.height * userData.ScreenRadio + this.y_down - userData.Gap;
        super.pipeArr.push(this);
        super.pipeArr.length > 4 && super.pipeArr.shift();
        this.isPass = false;
    }

    run(){
        this.x -= this.speed;

        //碰撞监测 用管子监测小鸟 
        if(this.x < super.AABB.right && this.x + super.resources.pipe_down.width > super.AABB.left && (super.resources.pipe_down.height + this.y_down > super.AABB.top || this.y_up < super.AABB.bottom)){
            this.msg.isShoudown = true;
            // console.log(this.canvas.height * userData.ScreenRadio)
            // console.log('上管子的高' + (super.resources.pipe_down.height + this.y_down))
            // console.log('xia管子的y' + (this.y_up))
        }
        if(super.AABB.left > this.x + super.resources.pipe_down.width && !this.isPass){
            super.msg.count++
            this.isPass = true;
        }

    }
    render(){
        this.ctx.drawImage(this.resources.pipe_down,this.x,this.y_down);
        this.ctx.drawImage(this.resources.pipe_up,this.x,this.y_up);

    }
}

export default pipe