import { LightningElement, api } from 'lwc';

export default class PicklistCell extends LightningElement {
    @api value; 
    @api rowKeyValue; 
    @api options; 

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.dispatchEvent(new CustomEvent('cellchange', {
            detail: {
                newValue: event.detail.value,
                rowKeyValue: this.rowKeyValue
            }
        }));
    }
}
