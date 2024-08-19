import { SerializableObj } from "./misc"

export interface LobbyData extends SerializableObj {
  id: string
  /** Lobby custom name */
  name: string
  password: string | null
  maxPlayers: number

  memberIds: string[]
  leaderId: string
}
