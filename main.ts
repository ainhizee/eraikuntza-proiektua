input.onButtonPressed(Button.A, function () {
    Puntuazioa = 0
})
let Puntuazioa = 0
Puntuazioa = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        Puntuazioa += 1
        basic.showNumber(Puntuazioa)
        music.playMelody("C5 - - - - - - - ", 120)
    }
    if (Puntuazioa == 25) {
        basic.showString("irabazi duzu :)")
    }
})
