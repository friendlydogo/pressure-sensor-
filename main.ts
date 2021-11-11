let Value = 0
basic.forever(function () {
    Value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(Value)
    if (Value > 300) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # . . . #
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
