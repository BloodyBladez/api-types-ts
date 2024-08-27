import { UserData } from "./user"
import { SerializableObj } from "./util"

export interface PlayerData extends SerializableObj {
  user: UserData
  selectedCharacter: string
}
