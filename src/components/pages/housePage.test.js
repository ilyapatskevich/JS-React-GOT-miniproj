const housePage = require("./housePage")
// @ponicode
describe("componentDidCatch", () => {
    let inst

    beforeEach(() => {
        inst = new housePage.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidCatch()
        }
    
        expect(callFunction).not.toThrow()
    })
})
