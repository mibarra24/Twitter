const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"paralink","Marco")
        expect(user.username).toBe("paralink")
        expect(user.name).toBe("Marco")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
})