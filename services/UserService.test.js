
const Userservice = require('./../../app/services/UserService')
describe("Test for UserService", () => {
    test("1. Create a new user ising the UserService", () =>{
       const user = Userservice.create(1, "@Aneth", "Aneth_alvarez")
         expect(user.username).toBe("@Aneth")
         expect(user.name).toBe("Aneth_alvarez")
         expect(user.id).toBe(1)
         expect(user.bio).not.toBeUndefined()
    })
   test("2. Get all user data in a list", () =>{
       const user_1 = Userservice.create(1, "@Aneth","Aneth_alvarez")
       const userInfoInList = Userservice.getInfo(user_1)
       expect(userInfoInList[0]).toBe(1)
       expect(userInfoInList[1]).toBe("@Aneth")
       expect(userInfoInList[2]).toBe("Aneth_alvarez")
       expect(userInfoInList[3]).toBe("Sin bio")
   })

})