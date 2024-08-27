export type Primitive = number | string | boolean | null
export type Serializable =
  | Primitive
  | Primitive[]
  | { [x: string]: Serializable }
  | { [x: string]: Serializable }[]
export type SerializableObj = Record<string, Serializable>
export type CheckSerializability<Type extends SerializableObj> = Type

export type RouteData = {
  Body?: Serializable
  Querystring?: SerializableObj
  Params?: SerializableObj
  Headers?: SerializableObj
  Reply?: Serializable
}

export type RoutesMap = Record<string, RouteData>
