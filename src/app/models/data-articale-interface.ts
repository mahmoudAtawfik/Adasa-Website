import { Articaledetails } from "./articaledetails";

export interface DataArticaleInterface {
  img: string;
  writer_img: string;
  time: string;
  name: string;
  job: string;
  title: string;
  description: string;
  date: string;
  span_desc: string;
  slug: string;
  summary:string;
  details?:Articaledetails[]

}
