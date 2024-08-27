import { SerializableObj } from "./util"

export interface UserData extends SerializableObj {
  id: string
  /** username */
  login: string
}

export interface SecretUserData extends SerializableObj {
  userkey: string
  password: string | null
}
