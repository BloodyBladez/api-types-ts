import { SerializableObj } from "./util"

export interface LobbyData extends SerializableObj {
  id: string
  /** Lobby custom name */
  name: string
  password: string | null
  maxPlayers: number

  memberIds: string[]
  /** The indexes are equals to the `members` indexes */
  characterIds: (string | null)[]
  leaderId: string
}
