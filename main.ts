input.onSound(DetectedSound.Loud, function () {
    MotorMaquee = !(MotorMaquee)
    if (MotorMaquee) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 162)
        basic.showIcon(IconNames.Happy)
    } else if (!(MotorMaquee)) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Asleep)
    }
})
let MotorMaquee = false
input.setSoundThreshold(SoundThreshold.Loud, 185)
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
})
