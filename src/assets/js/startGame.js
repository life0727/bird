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
        this.begin() //绑定事件
        this.start()
    }
    start(){
 
        this.util = new util(); //加载工具类
        this.util.clearSession();

        this.background = new background();
        this.ground = new ground();
        this.bird = new bird();

        super.msg.timer = setInterval(()=>{

            this.util.clear();

            super.msg.frameNum ++;
            
            this.background.render();
            this.background.run();


            super.msg.frameNum % userData.frequency == 0 && new pipe();       
    
            super.pipeArr.forEach(i => {
                 i.run(); 
                 i.render();
            })

            this.util.score();

            this.ground.render();
            this.ground.run();

            this.bird.render();
            this.bird.run();

            if(super.msg.isShoudown) this.util.boom();

            this.ctx.fillStyle = "#333";
            this.ctx.font = "12px serif";
            this.ctx.fillText(`fps:${1000 / userData.FrameNumber}`,10,10);
        },userData.FrameNumber)
    }
}

export default startGame