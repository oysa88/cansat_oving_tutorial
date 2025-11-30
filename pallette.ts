// ------------------------------------------------------
//  palette.ts
//  Tvinger MakeCode til å vise alle standardblokker
// ------------------------------------------------------

input.onPinPressed(TouchPin.P0, function () {

})
radio.onReceivedNumber(function (receivedNumber) {

})
input.onPinReleased(TouchPin.P0, function () {

})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {

})
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A)) {
        input.setAccelerometerRange(AcceleratorRange.OneG)
        input.setSoundThreshold(SoundThreshold.Loud, 128)
    } else if (input.acceleration(Dimension.X) == 0) {
        // skjerm blokker
        led.plot(led.brightness(), 0)
        led.toggle(led.pointBrightness(0, 0), 0)
        led.unplot(0, 0)
        led.plotBarGraph(
            0,
            0
        )
        led.plotBrightness(0, 0, 255)
        led.setBrightness(255)
        led.enable(false)
        led.stopAnimation()
        led.setDisplayMode(DisplayMode.BlackAndWhite)
    } else if (input.lightLevel() < 0) {
        // radio blokker
        radio.setGroup(1)
        radio.sendNumber(0)
        radio.sendValue("name", 0)
        radio.sendString("")
        radio.setTransmitPower(7)
        radio.setTransmitSerialNumber(true)
        radio.setFrequencyBand(0)
        radio.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (input.pinIsPressed(TouchPin.P0)) {

    } else if (input.isGesture(Gesture.Shake)) {

    } else if (input.compassHeading() == 0) {

    } else if (input.temperature() == 0) {

    } else if (input.logoIsPressed()) {

    } else if ("" == "") {

    } else if (input.soundLevel() < input.magneticForce(Dimension.X) && input.rotation(Rotation.Pitch) == input.runningTime()) {

    } else if (!(true) || false) {

    } else if (input.runningTimeMicros() == 0 || 0 == 0) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.ringTone(262)
        music.rest(music.beat(BeatFraction.Whole))
        music.setVolume(music.volume())
        music.stopAllSounds()
        music.changeTempoBy(music.beat(BeatFraction.Whole))
        music.setTempo(music.tempo())
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        music.stopMelody(MelodyStopOptions.All)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.setBuiltInSpeakerEnabled(false)
    } else if (music.isSoundPlaying()) {
        tekst = ("" + "this".split("") + String.fromCharCode(0).charCodeAt(0)).length
        tekst = parseFloat("123")
        tekst = convertToText(0).charAt(0).substr(0, "this".compare("")).indexOf("")
    } else if (led.point(0, 0)) {

    } else if (BMP280.temperature() == BMP280.pressure()) {
        BMP280.PowerOn()
        BMP280.PowerOff()
        BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
    } else if (Math.randomBoolean()) {
        basic.showNumber(0 * 0 - Math.PI + 0 / (Math.min(Math.max(Math.sqrt(Math.round(randint(0, 10))), Math.abs(Math.constrain(0, 0, 0))), Math.map(0, 0, 1023, 0, 4)) % 1))
    } else if ("this".includes("")) {

    } else if ("this".isEmpty()) {

    } else if (pins.digitalReadPin(pins.map(
        0,
        0,
        1023,
        0,
        4
    )) == pins.analogReadPin(AnalogPin.P0)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogSetPeriod(AnalogPin.P0, 20000)
        pins.setAudioPin(DigitalPin.P0)
        pins.setAudioPinEnabled(false)
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoSetPulse(AnalogPin.P0, 1500)
    } else if (control.millis() == 0) {
        control.waitForEvent(control.eventValue(), 0)
        control.reset()
        control.waitMicros(control.eventTimestamp())
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_EVT_ANY
        )
    } else {
        serial.writeLine(serial.readLine())
        serial.writeNumber(0)
        serial.writeValue("" + serial.readUntil(serial.delimiters(Delimiters.NewLine)) + serial.readString(), 0)
        serial.writeString("" + (serial.readBuffer(0)))
        serial.writeNumbers([0, 1])
        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        )
        serial.redirectToUSB()
        serial.setTxBufferSize(32)
        serial.setRxBufferSize(32)
        serial.setWriteLinePadding(0)
        serial.setBaudRate(BaudRate.BaudRate115200)
    }
})
input.onGesture(Gesture.Shake, function () {

})
function doSomething() {

}
radio.onReceivedString(function (receivedString) {

})
input.onSound(DetectedSound.Loud, function () {

})
radio.onReceivedValue(function (name, value) {

})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {

})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {

})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {

})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {

})
let teksttabell: string[] = []
let tabell: number[] = []
let tekst = 0
// basis blokker
basic.showNumber(0)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.clearScreen()
basic.pause(100)
basic.showArrow(ArrowNames.North)
radio.setGroup(1)
radio.sendNumber(0)
radio.sendValue("name", 0)
radio.sendString("")
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
radio.setFrequencyBand(0)
radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
)
loops.everyInterval(500, function () {

})
basic.forever(function () {
    let list: number[] = []
    for (let index = 0; index < 4; index++) {

    }
    // løkker blokker
    while (false) {

    }
    for (let verdi of tabell) {

    }
    for (let indeks = 0; indeks <= 4; indeks++) {

    }
    for (let index = 0; index < 5; index++) {

    }
    for (let index = 0; index < radio.receivedPacket(RadioPacketProperty.SignalStrength); index++) {
        continue;
        break;
    }
    // Logikk blokker
    if (true) {

    }
    if (true) {

    } else {

    }
    kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(false))
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.invert(kitronik_VIEW128x64.onOff(false))
    kitronik_VIEW128x64.show(0)
    kitronik_VIEW128x64.setPixel(0, 0)
    kitronik_VIEW128x64.plot(0)
    kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horizontal, 10, 0, 0)
    kitronik_VIEW128x64.drawRect(60, 30, 0, 0)
    kitronik_VIEW128x64.clearLine(1)
    kitronik_VIEW128x64.clearPixel(0, 0)
    kitronik_VIEW128x64.clear()
    // funksjoner blokker
    doSomething()
    // tabeller blokker
    tabell = [tabell.length, 2, 3]
    teksttabell = ["ei / en / ett", "b", "c"]
    tabell[list.removeAt(list._pickRandom())] = list.shift()
    tabell.push(tabell[list.pop()])
    tabell.pop()
    tabell = []
    tabell[0] = 0
    list.push(list.unshift(0))
    list.pop()
    tabell.shift()
    list.unshift(0)
    list.insertAt(0, list.indexOf(0))
    list.removeAt(0)
    list.reverse()
})
basic.forever(function () {

})
control.inBackground(function () {

})
