import util from './_util' 
import userData from '../userData/data'
import canvas from '../role/canvas'
import background from '../role/backGround'
import ground from '../role/ground'
import pipe from '../role/pipe'
import bird from '../role/bird'

class startGame extends canvas{
    constructor(){
        super();    
        this.start()
    }
    start(){
        this.background = new background();
        this.ground = new ground();
        this.util = new util();
        this.bird = new bird();
        this.timer = setInterval(()=>{
            this.util.clear();
            super.msg.frameNum ++;
            
            this.background.render();
            this.background.run();

            this.bird.render();
            this.bird.run();

            super.msg.frameNum % userData.frequency == 0 && new pipe();       
    
            super.pipeArr.forEach(i => {
                 i.run(); 
                 i.render();
            })

            this.util.score();

            this.ground.render();
            this.ground.run();
            
            if(this.msg.isShoudown) clearInterval(this.timer);
            
            this.ctx.fillText(super.msg.frameNum,10,10);
        },userData.FrameNumber)
    }
}

export default startGame