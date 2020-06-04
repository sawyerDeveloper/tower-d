export const shapes = {
    RECTANGLE: 'rectangle',
    CIRCLE: 'circle',
    LINE: 'line',
    TEXT: 'text'
}

class RenderUtils {

    static loadImage = (src) => {
        let img = new Image()
        img.src = src
        return img
    }

    static drawImage = (ctx, img, position, body) => {
        ctx.save()
        ctx.translate(position.x -12, position.y - 12)
        ctx.rotate(position.rotation)
        ctx.translate(-position.x - 12, -position.y -12)
        ctx.drawImage(img, position.x, position.y, body.width, body.height)
        ctx.restore()
    }

    static drawShape = (ctx, data) => {
        switch (data.body.shape) {
            case shapes.CIRCLE:
                ctx.beginPath()
                ctx.strokeStyle = data.style.color
                ctx.lineWidth = data.style.lineWidth
                ctx.arc(data.position.x, data.position.y, data.body.radius, 0, Math.PI * 2, true)
                ctx.stroke()
                break
            case shapes.RECTANGLE:
                ctx.beginPath()
                ctx.strokeStyle = data.style.color
                ctx.lineWidth = data.style.lineWidth
                ctx.strokeRect(data.position.x, data.position.y, data.body.width, data.body.height)
                ctx.stroke()
                break
            case shapes.LINE:
                ctx.strokeStyle = data.style.color
                ctx.lineWidth = data.style.lineWidth
                ctx.moveTo(data.position.x - 12, data.position.y - 12)
                ctx.lineTo(data.toPosition.x + 10, data.toPosition.y + 10)
                ctx.stroke()
                break
            case shapes.TEXT:
                ctx.font = data.size+"px "+data.font
                ctx.fillStyle = data.color
                ctx.textAlign = data.textAlign
                ctx.fillText(data.text, data.position.x, data.position.y)
                break
            default:
                console.error(this, 'drawShape', data.body.shape)
        }
    }
}

export default RenderUtils