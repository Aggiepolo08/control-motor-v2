input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    Go = true
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Go = false
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
let BlueButton = 0
let Go = false
Go = false
basic.forever(function () {
    while (Go) {
        BlueButton = pins.digitalReadPin(DigitalPin.P5)
        if (BlueButton == 1) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
    }
})
