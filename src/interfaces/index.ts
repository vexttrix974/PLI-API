export interface Userinterface {
  username: string;
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  interests: string[];
  profile_picture: string;
}

export interface Mactchinterface{
  user_id_1 : number;
  user_id_2 : number ;
  status: string;
  created_at : Date;
}
export interface Announceinterface{
  title : string;
  description : string;
  image_url : string;
  link_url : string;
  created_at :Date ;
}

