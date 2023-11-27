import RenderUtils from '../../utils/RenderUtils'

const RenderComponent = (ctx, style) => {
    switch(style.type){
        case 'image' :
            if(this.img){
                RenderUtils.drawImage(ctx, this.img, this.position, this.body)
            }
            break
            default:
                RenderUtils.drawShape(ctx, this.data)
            }
            
            //  TODO is this needed?
            if(this.data.children.length > 0){
                this.data.children.forEach(entity => {
                    entity.render(ctx)
                });
            }
}

            