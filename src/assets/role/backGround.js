import canvas from './canvas'

class backGround extends canvas{
    constructor(){
        super()
        this.speed = 1
    }
    render(){
        const skyHeight = this.canvas.height*0.75 - 396;
        const landHeight = this.canvas.height -  skyHeight - this.resources.bg_day.height;

        this.ctx.drawImage(this.resources.bg_day,0,skyHeight);

        this.ctx.fillStyle = "#4EC0CA";//sky
        this.ctx.fillRect(0,0,this.canvas.width,skyHeight)

        this.ctx.fillStyle = "#5EE270";//land
        this.ctx.fillRect(0,skyHeight + this.resources.bg_day.height,this.canvas.width,landHeight)
    }
}

export default backGround