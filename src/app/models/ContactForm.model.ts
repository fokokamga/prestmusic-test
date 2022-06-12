import { AddressForm } from './AddressForm.model';
import { ServiceForm } from './ServiceForm.model ';

export class ContactForm {
    constructor(
        public firstname: string,
        public name: string,
        public email: string,
        public service: ServiceForm,
        public date: Date,
        public address: AddressForm,
        public hours: number,
        public message: string
    ){}
}

