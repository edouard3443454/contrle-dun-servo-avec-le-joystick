basic.forever(function () {
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    10,
    170
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
})
