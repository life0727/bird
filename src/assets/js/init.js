
import util from './_util' 
import userData from '../userData/data'
import canvas from '../role/canvas'
import background from '../role/backGround'

const json = require('../json/resources.json') 




class init extends canvas{
    constructor() {
        super();
        this.frameNum = 0 //帧编号
        this.layout()//布局
        this.fetchResources().then(() => {//读取资源
            
            this.startGame()
        })
    }
    layout(){
        const width = document.documentElement.clientWidth > 414 ? 414 : document.documentElement.clientWidth;
        const height = document.documentElement.clientHeigh > 812 ? 812 : document.documentElement.clientHeight;

        this.canvas.width = width;   
        this.canvas.height = height;
       
    }
    fetchResources(){
        return new Promise((res)=>{
            json.images.forEach(element => {
                this.resources[element.name] = new Image();
                this.resources[element.name].width = element.width;
                this.resources[element.name].height = element.height;
                this.resources[element.name].src = require(`../img/${element.name}.png`);//要先require不然打包会报错
                this.resources[element.name].onload = () =>{
                    res()
                }
            });
        })
    }
    startGame(){
        this.name = 'fqm'
        console.log(this)
        this.timer = setInterval(()=>{
            this.util = new util();
            this.util.clear();
            
            this.background = new background()
            this.background.render();
            
            this.frameNum ++;
            this.ctx.fillText(this.frameNum,10,10);
        },userData.FrameNumber)
    }
};

export default init