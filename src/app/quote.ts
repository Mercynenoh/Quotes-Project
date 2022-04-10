export class Quote {
    

  showDescription: boolean;
constructor(
    public id: number,
    public title: string,
    public name: string,
    public upvote:number,
    public downvote:number,
    public description: string,
    public yourname: string,
    public completeDate: Date | number | string,
  
    ){
  this.showDescription=false;
}
}
