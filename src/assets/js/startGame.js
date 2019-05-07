import util from './_util' 
import userData from '../userData/data'
import canvas from '../role/canvas'
import background from '../role/backGround'
import ground from '../role/ground'
import pipe from '../role/pipe'

class startGame extends canvas{
    constructor(){
        super();
        this.frameNum = 0; //帧编号
        this.start()
    }
    start(){
        this.background = new background();
        this.ground = new ground();
        this.util = new util();
        this.timer = setInterval(()=>{
            this.util.clear();
            
            this.background.render();
            this.background.run();

            this.frameNum % userData.frequency == 0 && new pipe();
            
            super.pipeArr.forEach(i => {
                 i.run(); 
                 i.render();
            })
            this.ground.render();
            
            this.ground.run();
                
            this.frameNum ++;
            this.ctx.fillText(this.frameNum,10,10);
        },userData.FrameNumber)
    }
}

export default startGame