export class quote {
    showquote: boolean;

    constructor(
        public quote: string,
        public author: string,
        public writer: string,
        public description: string,
        // public posttime: Date,
        // public upvotes: number,
        // public downvotes: number
      ) { 
        this.showquote=false;
       }
}
