const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {

    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "paralink", "Marco", "Bio", "dateCreated", "lastUpdated")

        //Aqui validad los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el de la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("paralink")
        expect(user.name).toBe("Marco")
        expect(user.bio).toBe("Bio")
        
    })
})