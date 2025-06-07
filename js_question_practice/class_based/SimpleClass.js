class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
    console.log("cons", this.videoLikes);
  }
  intro() {
    return "this is the intro";
  }
  like() {
    console.log(this.videoLikes);
    this.videoLikes++;
  }
}
const amit = new Teacher("amit", "amitchannel");
console.log(amit.intro());
console.log(amit.like());
console.log(amit.videoLikes);

//convert into func

// function Teacher() {
//   this.name = name;
// }
// Teacher.prototype.intro = function () {};

// Teacher.prototype.like = function () {
//   this.videoLikes++;
// };
