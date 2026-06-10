import * as Context from "effect/Context";
import * as Effect from "effect/Effect";

export class Endpoint extends Context.Service<
  Endpoint,
  Effect.Effect<string>
>()("AWS::Endpoint") {}
