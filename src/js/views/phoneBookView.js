import {
    elements
} from './base';

export const renderResults = contacts => {
    contacts.forEach(renderContact);
}

const renderContact = contact => {
    const markup = `
    <div class="contact">
        <div class="contact-main-info">
            <p class="contact-name">${contact.name}</p>
            <p class="contact-number">${contact.phone_number}</p>
        </div>
        <p class="contact-address">${contact.address}</p>
    </div>
    `;
    elements.phonesList.insertAdjacentHTML('beforeend', markup);
};

export const clearContacts = () => {
    elements.phonesList.innerHTML = '';
}