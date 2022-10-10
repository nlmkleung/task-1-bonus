input.onButtonPressed(Button.A, function () {
    heart = 1
})
input.onButtonPressed(Button.B, function () {
    heart = 0
})
let heart = 0
basic.showString("MK")
basic.forever(function () {
    if (heart == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (heart == 1) {
        basic.showIcon(IconNames.SmallHeart)
    }
})
