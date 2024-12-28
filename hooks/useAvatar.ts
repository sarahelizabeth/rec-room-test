import { createAvatar } from '@dicebear/core'
import { botttsNeutral } from '@dicebear/collection'
// import { toPng } from '@dicebear/converter'

export const useBotttsAvatar = () => {
  const avatar = createAvatar(botttsNeutral, {
    seed: Math.random().toString(36).substring(2, 15),
    radius: 5,
    backgroundColor: [
      "00897b",
      "00acc1",
      "039be5",
      "1e88e5",
      "3949ab",
      "43a047",
      "546e7a",
      "5e35b1",
      "7cb342",
      "8e24aa",
      "c0ca33",
      "d81b60",
      "e53935",
      "f4511e",
      "fb8c00",
      "fdd835",
      "ffb300",
      "c0aede"
    ],
    backgroundRotation: [
      0
    ],
    eyes: [
      "bulging",
      "dizzy",
      "eva",
      "frame1",
      "frame2",
      "glow",
      "robocop",
      "roundFrame01",
      "roundFrame02",
      "sensor",
      "shade01",
      "round"
    ],
    mouth: [
      "bite",
      "diagram",
      "grill02",
      "smile02",
      "square02",
      "grill03",
      "grill01"
    ]
  })

  return avatar.toDataUri()
}