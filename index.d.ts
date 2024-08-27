import type { GateRoute } from "./types/routes/gate"
import type { LobbyRoute } from "./types/routes/lobby"
import type { ServerInfoRoute } from "./types/routes/server-info"
import type { UserRoute } from "./types/routes/user"

export type * from "./types/character"
export type * from "./types/effect"
export type * from "./types/lobby"
export type * from "./types/misc"
export type * from "./types/player"
export type * from "./types/user"
export type * from "./types/util"

export type ApiTypes = ServerInfoRoute & GateRoute & LobbyRoute & UserRoute
