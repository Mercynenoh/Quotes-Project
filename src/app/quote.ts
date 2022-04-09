export class Quote {
    

  showDescription: boolean;
constructor(
    public id: number,
    public name: string,
    public upvote:number,
    public downvote:number,
    public description: string,
    public yourname: string,
    public completeDate: Date
    ){
  this.showDescription=false;
}
}
