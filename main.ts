let thisRead = 0
Connected.laserSensor(Connected.DigitalRJPin.J4, true)
radio.setGroup(80)
let breaks = 0
let lastRead = pins.analogReadPin(AnalogPin.P2)
Connected.showUserNumber(6, lastRead)
while (true) {
    thisRead = pins.analogReadPin(AnalogPin.P2)
    if (thisRead < 145) {
        breaks = breaks + 1
        Connected.ledBrightness(Connected.DigitalRJPin.J3, true)
        basic.pause(500)
        Connected.showUserNumber(3, breaks)
        Connected.showUserNumber(4, lastRead)
        Connected.showUserNumber(5, thisRead)
        Connected.ledBrightness(Connected.DigitalRJPin.J3, false)
    }
    lastRead = thisRead
}
pins.setAudioPinEnabled(false)
Connected.oledClear()
loops.everyInterval(2000, function () {
	
})
basic.forever(function () {
	
})
