export class ServiceForm {
    constructor(
        public name: string,
        public description: string,
        public image: string,
        public link: string,
        public linkTitle: string,
        public price: number,
        public quantity: number, //Production
    ){}
}