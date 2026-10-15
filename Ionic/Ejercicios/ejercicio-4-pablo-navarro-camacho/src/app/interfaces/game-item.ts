export interface Response {
  data: GameItem[]
  message: string
  status: number
}

export interface GameItem {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  id: number
  image: string
  name: string
}
