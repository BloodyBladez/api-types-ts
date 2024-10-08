import { RoutesMap } from "../util"
import { UserData } from "../user"

export interface UserRoute extends RoutesMap {
  /** Method: **GET** */
  "/user/:id": {
    Params: {
      id: string
    }
    Reply?: Pick<UserData, "id" | "login">
  }
}
