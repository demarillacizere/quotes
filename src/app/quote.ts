export class Quote {
    showDescription: boolean;
    constructor(public id:number,public name:string, public quoteWords:string, public author:string, public dateUploaded:Date,public upvote,public downvote){
        this.showDescription=false;
    }
}
