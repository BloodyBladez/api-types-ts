import { ArmorName, DamageModifierName } from "./misc"
import { CheckSerializability, SerializableObj } from "./util"

export interface CharacterSkillData extends SerializableObj {
  skillName: string
  skillId: string
}

export type CharacterParameters = CheckSerializability<
  {
    health: number
    stamina: number
  } & {
    [x in ArmorName]: number
  } & {
    [x in DamageModifierName]: number
  }
>

export interface CharacterData extends SerializableObj {
  maximum: CharacterParameters
  current: CharacterParameters
  characterName: string
  characterId: string
  skills: CharacterSkillData[]
  /** Technically - skills that are used every round */
  passiveSkills: CharacterSkillData[]
}
