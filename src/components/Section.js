export class Section{
    constructor({renderer, containerSelector}){
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    renderItems(items){
        items.forEach((item) => { 
            this._renderer(item)
        });
    }
    appendItem(item){
        this._containerSelector.append(item);
    }
    prependItem(item){
        this._containerSelector.prepend(item);
    }
}