function raiseAlarm (duration: number) {
    Connected.ledBrightness(Connected.DigitalRJPin.J3, true)
    basic.pause(duration)
    Connected.ledBrightness(Connected.DigitalRJPin.J3, false)
}
led.enable(false)
pins.setAudioPinEnabled(false)
OLED.init(128, 64)
OLED.writeStringNewLine("barf")
pins.digitalWritePin(DigitalPin.P5, 1)
let strip = Connected.create(Connected.DigitalRJPin.O6, 10, Connected.NeoPixelMode.RGB)
let strip2 = Connected.create(Connected.DigitalRJPin.O7, 10, Connected.NeoPixelMode.RGB)
strip.setBrightness(5)
strip2.setBrightness(5)
strip.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
strip2.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
basic.forever(function () {
    OLED.writeStringNewLine("P0:  " + convertToText(pins.analogReadPin(AnalogPin.P0)))
    OLED.writeStringNewLine("P1:  " + convertToText(pins.analogReadPin(AnalogPin.P1)))
    OLED.writeStringNewLine("P2:  " + convertToText(pins.analogReadPin(AnalogPin.P2)))
})
