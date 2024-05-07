export interface SubComponent{
  id:number
}
export class SComponent implements SubComponent{
  constructor(public id:number){}
}
