import axios from 'axios';
import {
    proxy
} from '../config';

export default class PhoneNumbers {
    constructor() {
        this.data = [];
    }

    async getData() {
        try {
            const res = await axios(`${proxy}http://www.mocky.io/v2/581335f71000004204abaf83`);
            this.data = res.data.contacts;
        } catch (error) {
            alert(error);
        };
    };

    sortByName() {
        this.data.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    };

    sortByTown() {
        this.data.sort((a, b) => {
            let nameA = a.address.split(',')[a.address.split(',').length - 2].toLowerCase();
            let nameB = b.address.split(',')[b.address.split(',').length - 2].toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    };

    searchByName(val) {
        const search = [];
        this.data.forEach(el => {
            if (el.name.toLowerCase().indexOf(val) > -1) {
                search.push(el);
            }
        });
        return search;
    };
};