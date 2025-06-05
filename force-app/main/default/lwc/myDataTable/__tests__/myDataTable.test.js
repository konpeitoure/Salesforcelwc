import { createElement } from 'lwc';
import MyDataTable from 'c/myDataTable';

describe('c-my-data-table', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders component', () => {
        const element = createElement('c-my-data-table', {
            is: MyDataTable
        });
        document.body.appendChild(element);
        expect(element).not.toBeNull();
    });
});
