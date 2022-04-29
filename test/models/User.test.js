const User = require('./../../app/models/user')
describe("Unit test for User class", () => {
    test('1) Create an user object', () => {
      const User1 = new User(1,"@Aneth","Aneth_alvarez","Estudiante de ingenieria")

      expect(User1.id).toBe(1)
      expect(User1.username).toBe("@Aneth")
      expect(User1.name).toBe("Aneth_alvarez")
      expect(User1.bio).toBe("Estudiante de ingenieria")
      expect(User1.dateCreated).not.toBeUndefined
      expect(User1.lastUpdated).not.toBeUndefined
    });
    test('2. Add getters', () => {
      const User2 = new User(1,"@Aneth","Aneth_alvarez","Estudiante de ingenieria")
      expect(User2.getusername).toBe("@Aneth")
      expect(User2.getbio).toBe("Estudiante de ingenieria")
      expect(User2.getdateCreated).not.toBeUndefined
      expect(User2.getlastUpdated).not.toBeUndefined
    });
    test('3. Add setters', ()=> {
        const User3 = new User(1,"Aneth","Aneth_alvarez","Estudiante de ingenieria")
        User3.setusername = "Alvarez"
        expect(User3.username).toBe("Alvarez")

        User3.setbio = "new bio"
        expect(User3.bio).toBe("new bio")
    });
})