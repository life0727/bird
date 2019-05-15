import canvas from './canvas'
import userData from '../userData/data'

class bird extends canvas{
    constructor(){
        super()
        this.random = parseInt(Math.random() * 3);
        this.birdArr = [`bird${this.random}_0`,`bird${this.random}_1`,`bird${this.random}_2`];//鸟数组
        this.wingIndex = 0;//鸟翅膀编号
        this.birdFno = 0;//鸟帧编号
        this.deg = 0;//鸟角度
        this.birdWidth = super.resources.bird0_0.width;
        this.birdHeight = super.resources.bird0_0.height;
        this.x = this.canvas.width / 2 - this.birdWidth / 2;
        this.y = this.canvas.height / 2 - 200;
        this.isClick = false;
        super.clickEvent() //绑定事件
    }
    run(){
        this.msg.frameNum[0] % 20 == 0 && this.wingIndex ++;
        if(this.wingIndex > 2) this.wingIndex = 0;

        //鸟要掉落
        this.birdFno ++;
        this.deg += 0.05;
        
        if(!this.isClick){ //没有点击
            this.y += this.birdFno * userData.toUpHeightRadio;
        }else{ //点击
            this.y -= (userData.toUpSize - this.birdFno) * userData.toUpHeightRadio;
            if(this.birdFno > userData.toUpSize) this.isClick = true; //点击后上升速度慢慢变慢直到没有速度则变为true
        }
        if(this.deg > 1.6) this.deg = 1.6;//保证头不会往后偏

        //AABB盒
        super.AABB.top = this.y - 12;
        super.AABB.bottom = this.y + 12;
        super.AABB.right = this.x + 17;
        super.AABB.left = this.x - 17;
       
    }
    render(){
        const step = [this.birdArr[this.wingIndex]][0];
        this.ctx.save();
        this.ctx.translate(this.x,this.y);
        this.ctx.rotate(this.deg)
        this.ctx.drawImage(super.resources[step],- this.birdWidth / 2,- this.birdHeight / 2);
        this.ctx.restore();
    }
    toUp(){
        this.isClick = true;
        this.deg = -0.6;//鸟头瞬间抬起
        this.birdFno = 0;//重置鸟帧 为了实现加速度为负的上升计算

    }
}

export default bird