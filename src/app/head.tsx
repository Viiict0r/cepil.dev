import React from 'react'

import { bio } from '../utils/bio'

export default function Head() {
  return (
    <>
      <title>Victor Hugo Cépil - Front-end Developer</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={bio} />

      <meta property="image" content="/assets/photo.png" />

      <meta
        property="og:title"
        content="Victor Hugo Cépil - Front-end Developer"
      />
      <meta property="og:description" content={bio} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/photo.png" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  )
}
