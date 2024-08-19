import { RoutesMap } from "../misc"

export interface ServerInfoRoute extends RoutesMap {
  /** Method: **GET** */
  "/server-info": {
    Reply: {
      apiVersion: string
      gameVersion: string
      serverName: string
      serverDescription: string
      /** online & offline */
      totalPlayersCount: number
      currentLobbiesCount: number
      isFriendOnly: boolean
    }
  }
}
