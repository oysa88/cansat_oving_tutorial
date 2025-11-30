// ------------------------------------------------------
//  palette.ts
//  Tvinger MakeCode til å vise alle standardblokker
// ------------------------------------------------------

// Basic
basic.showNumber(0)
basic.pause(100)

// Input
input.onButtonPressed(Button.A, function () {})
input.onGesture(Gesture.Shake, function () {})

// Music
music.playTone(262, music.beat(BeatFraction.Whole))
music.playMelody("C5 B A G F E D C ", 120)

// LED
led.plot(0, 0)
led.toggle(1, 1)

// Radio
radio.setGroup(1)
radio.sendNumber(0)

// Loops
for (let i = 0; i < 1; i++) {}
while (false) {}

// Logic
if (true) {} else {}
let logicTest = true

// Variables
let myVar = 0

// Math
let mathTest = Math.random()
mathTest = mathTest + 1

// Functions
function demoFunction() {
    return 1
}
demoFunction()

// Arrays
let arr = [1, 2, 3]
arr.push(4)

// Advanced - Pins
pins.digitalReadPin(DigitalPin.P0)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.analogReadPin(AnalogPin.P2)

// Advanced - Serial
serial.writeLine("Hello")

// Control
control.reset()
control.waitMicros(100)

// Game (fra standardbiblioteket, vises under Advanced/Game)
game.score()
game.setScore(0)
