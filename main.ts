let MANO = 0
input.onGesture(Gesture.Shake, function () {
    MANO = randint(1, 3)
    if (MANO == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (MANO == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
