export class ConversaoResponse {

    constructor(
        public base: string,
        public date: string,
        public rates: any
    ) {}


    // {"base": "USD", "date": "2023-01-27", "rates":{"BRL":5.09}}
}