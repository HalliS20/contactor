// import { LightningElement, wire } from 'lwc';
// import getContacts from '@salesforce/apex/ContactController.getContacts';
// export default class ContactList extends LightningElement {
//    @wire(getContacts) contacts;
//    get responseReceived() {
//    if (this.contacts) {
//    return true;
//    }
//    return false;
//    }
//    get errors() {
//    return (this.contacts.error) ?
//    reduceErrors(this.contacts.error) : [];
//    }
//    }
//    function reduceErrors(errors) {
//    if (!Array.isArray(errors)) {
//    errors = [errors];
//    }
//    return (
//    errors
//    .filter((error) => !!error)
//    .map((error) => {
//    if (Array.isArray(error.body)) {
//    return error.body.map((e) => e.message);
//    } else if (error.body && typeof error.body.message === 'string') {
//    return error.body.message;
//    } else if (typeof error.message === 'string') {
//    return error.message;
//    }
//    return error.statusText;
//    })
//    .reduce((prev, curr) => prev.concat(curr), [])
//    .filter((message) => !!message)
//    );
//    }
