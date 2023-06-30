export default interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    age: number;
    gender: string;
    location: string;
    interest: string;
    profile_picture: string;
  }
 export default interface Annonces {
    id: number ;   
    title : string;
    description:string;
    image_url:string;
    link_url : string;
    created_at : Date;
  }
  export interface IMatch {
    id: number;
    userLiked: User;
    userMatched: User;
    status: string;
    created_at: string;
  }
  export interface IMessage {
    match_id : number;
    sender_id : number;
    receiver_id : number;
    content : string;
    created_at:   Date ;
    updated_at:   Date ;
  }