import { LobbyData } from "../lobby"
import { RoutesMap } from "../util"

export interface LobbyRoute extends RoutesMap {
  /** Method: **GET** */
  "/lobby-list/": {
    Reply: {
      lobbyList: LobbyData[]
    }
  }

  /** Method: **GET** */
  "/lobby/refresh-data": {
    Reply?: LobbyData
  }

  /** Method: **POST** */
  "/lobby/create": {
    Body: {
      name: string
      password: string | null
      maxPlayers: number
    }
    Reply?: {
      lobbyId: string
    }
  }

  /** Method: **PATCH** */
  "/lobby/update": {
    Body: Omit<LobbyData, "id">
    Reply?: LobbyData
  }

  /** Method: **POST** */
  "/lobby/join": {
    Querystring: {
      id: string
    }
    Body: {
      password?: string
    }
    Reply?: LobbyData
  }

  /** Method: **POST** */
  "/lobby/leave": {
    Reply: undefined
  }

  /** Method: **POST** */
  "/lobby/select-character": {
    Body: {
      characterId: string
    }
    Reply: undefined
  }

  /** Method: **POST** */
  "/lobby/launch-game": {
    Reply?: {
      gameId: string
    }
  }
}
