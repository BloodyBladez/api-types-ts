import { GateRoute } from "./types/routes/gate"
import { LobbyRoute } from "./types/routes/lobby"
import { MiscRoutes } from "./types/routes/misc-routes"
import { UserRoute } from "./types/routes/user"

export type * from "./types/misc"
export type * from "./types/lobby"
export type * from "./types/user"

export type ApiTypes = MiscRoutes & GateRoute & LobbyRoute & UserRoute
