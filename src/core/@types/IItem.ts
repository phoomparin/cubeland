export interface IAttack {
  minDamage: number
  maxDamage: number
}

export interface IDefense {
  armor: number
}

export interface IItem {
  id: string
  name: string
  attack?: IAttack
  defense?: IDefense
}
