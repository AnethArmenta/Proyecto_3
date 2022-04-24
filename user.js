const user ={
    user:"Daniel Quién",
    username:"danielquién",
    bio: '"Aroma A Nostalgia" Full Album Out Now (Psychedelic pop / art folk)',
    followers: 14000,
    siguiendo:100,
    joined:"Junio 2019",

    getBio: function(){
    return this.bio
 },
 getGeneralInfo: function(){
    return ` ${this.user}  has ${this.followers} followers and joined in ${this.joined}`
}
 }
console.log(users.getGeneralInfo())
console.log(users.getBio())