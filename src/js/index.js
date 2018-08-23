import PhoneBook from './models/PhoneBook';
import * as phoneBookView from './views/phoneBookView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';
// Global state of the app
let state;

window.addEventListener('load', async () => {
    try {
        renderLoader(elements.phonesList)
        state = new PhoneBook();
        await state.getData();
        clearLoader();
        phoneBookView.renderResults(state.data);
    } catch (error) {
        alert(error);
    }
});

const render = (data) => {
    phoneBookView.clearContacts();
    phoneBookView.renderResults(data);
}

/**
 * sort data
 */
const controlSort = val => {
    if (val === 'town') {
        state.sortByTown();
        render(state.data);
    } else if (val === 'name') {
        state.sortByName();
        render(state.data);
    };
}

elements.sort.addEventListener('change', e => {
    controlSort(e.target.value);
});

/**
 * search data
 */
elements.search.addEventListener('keyup', e => {
    render(state.searchByName(e.target.value));
});