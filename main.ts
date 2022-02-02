basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        game.addScore(1)
        basic.showNumber(game.score())
    }
})
