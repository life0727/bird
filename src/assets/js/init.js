
import startGame from './startGame' 
import canvas from '../role/canvas'

const json = require('../json/resources.json') 
const fox = require('../mp3/5613.mp3') 

class init extends canvas{
    constructor() {
        super();
        this.layout()//布局
        this.fetchResources().then(() => {//读取资源
            new startGame()
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
            //音效
            super.resources.fox = document.querySelector('audio');
            super.resources.fox.src = fox;
            
            json.images.forEach(element => {
                super.resources[element.name] = new Image();
                super.resources[element.name].width = element.width;
                super.resources[element.name].height = element.height;
                super.resources[element.name].src = require(`../img/${element.name}.png`);//要先require不然打包会报错
                super.resources[element.name].onload = () =>{
                    res()
                }
            });
        })
    }
};

export default init