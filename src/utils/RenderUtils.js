const shapes = {
    RECTANGLE: 'rectangle',
    CIRCLE: 'circle'
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

    static drawShape = (ctx, style, position, body) => {
        switch (body.shape) {
            case shapes.CIRCLE:
                ctx.beginPath()
                ctx.strokeStyle = style.color
                ctx.lineWidth = style.lineWidth
                ctx.arc(position.x, position.y, body.radius, 0, Math.PI * 2, true)
                ctx.stroke()
                break
            case shapes.RECTANGLE:
                ctx.beginPath()
                ctx.strokeStyle = style.color
                ctx.lineWidth = style.lineWidth
                ctx.strokeRect(position.x, position.y, body.width, body.height)
                ctx.stroke()
                break
            default:
                console.error(this, 'drawShape', body.shape)
        }
    }
}

export default RenderUtils