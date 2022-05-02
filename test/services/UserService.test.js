const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"paralink","Marco")
        expect(user.username).toBe("paralink")
        expect(user.name).toBe("Marco")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

    test("2. Get all user data in a list",() => {
        const user = UserService.create(1,"paralink","Marco")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("paralink")
        expect(userInfoList[2]).toBe("Marco")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "paralink", "Marco")
        UserService.updateUserUsername(user, "paramar")
        expect(user.username).toBe("paramar")
      })
    
      test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "paralink1", "Marco")
        const user2 = UserService.create(1, "paralink2", "Marco")
        const user3 = UserService.create(1, "paralink3", "Marco")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("paralink1")
        expect(usernames).toContain("paralink2")
        expect(usernames).toContain("paralink3")
      })
})