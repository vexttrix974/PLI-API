export default interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    age: number;
    gender: string;
    location: string;
    interests: string;
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