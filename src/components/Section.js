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
    appendCard(card){
        this._containerSelector.append(card);
    }
    prependCard(card){
        this._containerSelector.prepend(card);
    }
}