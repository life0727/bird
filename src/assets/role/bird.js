import canvas from './canvas'
import userData from '../userData/data'

class bird extends canvas{
    constructor(){
        super()
        this.random = parseInt(Math.random() * 3);
        this.birdArr = [`bird${this.random}_0`,`bird${this.random}_1`,`bird${this.random}_2`];//鸟数组
        this.wingIndex = 0;//背景图的高
        this.x = 100
    }
    run(){
        this.frameNum[0] % 20 == 0 && this.wingIndex ++
        if(this.wingIndex > 2) this.wingIndex = 0;
    }
    render(){
        
        const step = [this.birdArr[this.wingIndex]][0]
 
        this.ctx.drawImage(super.resources[step],this.x,80);

    }
}

export default bird