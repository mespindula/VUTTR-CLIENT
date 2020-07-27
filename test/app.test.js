describe('React application home page', () => {
    it("Verify that the app link says Learn React", () => {
        browser.url('/')
        let text = $(".form-control").getText()
        assert.equal(text, 'Search')
    })
})