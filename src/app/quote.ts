export class quote {
    showquote: boolean;

    public upvotes: number;
      public downvotes: number;

    constructor(
        public quote: string,
        public author: string,
        public writer: string,
        public description: string,
        public completeDate: Date, 
      ) { 
        this.showquote=false;
        this.upvotes=0;
        this.downvotes=0;
       }
}
