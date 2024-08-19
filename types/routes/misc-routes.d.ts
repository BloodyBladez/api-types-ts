import { RoutesMap } from "../misc"

export interface MiscRoutes extends RoutesMap {
  /** Method: **GET** */
  "/api-version": {
    Reply: {
      apiVersion: string
      gameVersion: string
    }
  }
}
