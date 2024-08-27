import { RoutesMap } from "../util"

export interface GateRoute extends RoutesMap {
  /** Method: **POST** */
  "/gate/connect": {
    Body: {
      login: string
      userkey?: string
    }
    Reply:
      | {
          //userkey / login does not match
          firstTime: boolean
        }
      | {
          //success
          userId: string
        }
  }

  /** Method: **POST** */
  "/gate/auth": {
    Body: {
      login: string
      password: string
    }
    Reply:
      | {
          //wrong password
          availableTries: number
        }
      | {
          //soccess
          userkey: string
          userId: string
        }
      | string //rare error
  }

  /** Method: **POST** */
  "/gate/register": {
    Body: {
      login: string
      password: string
    }
    Reply:
      | {
          //success
          userkey: string
          userId: string
        }
      | string //rare error
  }
}
