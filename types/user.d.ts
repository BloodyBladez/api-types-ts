import { SerializableObj } from "./misc"

export interface UserData extends SerializableObj {
  id: string
  /** username */
  login: string
  password: string | null
}
