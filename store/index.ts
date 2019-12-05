
export interface Player {
  id: number
  name: string
  image: any
  level: number
  hp: number
  maxHp: number
  mp: number
  maxMp: number
  exp: number
  maxExp: number
  limit: number
  maxLimit: number
  limitLevel: number
  display: boolean
}

export const state = () => ({
  players: [
    {
      id: '1',
      name: '中田隆三',
      image: require('~/assets/cloud.jpg'),
      level: 99,
      hp: 9999,
      maxHp: 9999,
      mp: 999,
      maxMp: 999,
      exp: 50,
      maxExp: 100,
      limit: 50,
      maxLimit: 100,
      limitLevel: 4,
      display: true
    },
    {
      id: '2',
      name: '中田隆三',
      image: require('~/assets/cloud.jpg'),
      level: 99,
      hp: 9999,
      maxHp: 9999,
      mp: 999,
      maxMp: 999,
      exp: 50,
      maxExp: 100,
      limit: 50,
      maxLimit: 100,
      limitLevel: 4,
      display: true
    },
    {
      id: '3',
      name: '中田隆三',
      image: require('~/assets/cloud.jpg'),
      level: 99,
      hp: 9999,
      maxHp: 9999,
      mp: 999,
      maxMp: 999,
      exp: 50,
      maxExp: 100,
      limit: 50,
      maxLimit: 100,
      limitLevel: 4,
      display: true
    }
  ]
})