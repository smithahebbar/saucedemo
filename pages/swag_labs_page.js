import BasePage from './basePage';


export default class SwagLabsPage extends BasePage{
    constructor(page){
        super(page);
        this.path = '/inventory.html';
        this.firstItem = '.inventory_item:nth-child(1) .btn_inventory';
    }

    async clickOnFirstItem(){
        await this.page.click(this.firstItem);
    }
    async getItemDetails(){
        const itemName = await this.page.innerText('.inventory_item_name');
        const itemPrice = await this.page.innerText('.inventory_item_price');
        const itemDescription = await this.page.innerText('.inventory_item_desc');
        return {
            name: itemName,
            price: itemPrice,
            description: itemDescription
        };
    }
    async addItemToCart(){
        await this.page.click('.btn_inventory');
    }

}