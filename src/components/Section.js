export class Section{
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    renderItems(){
        this._items.forEach(item =>{
            const card = this._renderer(item, '.element__template')
            this.addItem(card)
        })
    }
    addItem(card){
        this._containerSelector.append(card);
    }
}