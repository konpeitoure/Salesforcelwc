import { LightningElement, track } from 'lwc';
import PicklistCell from 'c/picklistCell';

export default class MyDataTable extends LightningElement {

    @track data = [
        { 
            id: '1', 
            picklistField: 'Option1', 
            otherField: 'Example 1',
            options: [
                { label: 'Option 1', value: 'Option1' },
                { label: 'Option 2', value: 'Option2' },
            ], 
        },
        { 
            id: '2', 
            picklistField: 'Option2', 
            otherField: 'Example 2',
            options: [
                { label: 'Option 1', value: 'Option1' },
                { label: 'Option 2', value: 'Option2' },
            ],
        },
        // etc...
    ];

    @track columns = [
        { label: 'Other Column', fieldName: 'otherField', type: 'text' },
        {
            label: 'Picklist Column',
            fieldName: 'picklistField',
            type: 'text',
            cellAttributes: {
                type: 'picklist',
                rowKeyValue: { fieldName: 'id' },
                options: { fieldName: 'options' }, 
            },
        },
    ];

    get customTypes() {
        return {
            picklist: {
                template: PicklistCell,
                standardCellLayout: true,
                typeAttributes: ['value', 'rowKeyValue', 'options'],
            },
        };
    }

    handleCellChange(event) {
        const { newValue, rowKeyValue } = event.detail;
        // handle the cell change...
        let row = this.data.find(row => row.id === rowKeyValue);
        if(row) {
            row.picklistField = newValue;
        }
    }
}
