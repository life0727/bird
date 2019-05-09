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
            this.frameNum[0] ++;
            
            this.background.render();
            this.background.run();

            this.bird.render();
            this.bird.run();

            this.frameNum % userData.frequency == 0 && new pipe();           
            super.pipeArr.forEach(i => {
                 i.run(); 
                 i.render();
            })

            this.ground.render();
            this.ground.run();
            
    
            
            this.ctx.fillText(this.frameNum[0],10,10);
        },userData.FrameNumber)
    }
}

export default startGame