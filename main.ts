let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = 0
    b = 0
    for (let index = 0; index < 5; index++) {
        b = 0
        for (let index = 0; index < a + 1; index++) {
            led.plot(b, a)
            basic.pause(500)
            b = b + 1
        }
        a = a + 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Love U Lin")
})
