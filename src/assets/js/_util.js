import canvas from '../role/canvas'

class util extends canvas{
    constructor(){
        super();
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}

export default util