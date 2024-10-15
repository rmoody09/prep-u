export default eventHandler(async (event) => {
    assertMethod(event, "GET");
    return {
        message: "Hello World"
    }
})