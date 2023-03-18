class User {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  interests: string[];
  profile_picture: string;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    name: string,
    age: number,
    gender: string,
    location: string,
    interests: string[],
    profile_picture: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.interests = interests;
    this.profile_picture = profile_picture;
  }
}

export default User