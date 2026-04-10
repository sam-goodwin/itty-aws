import * as Context from "effect/Context";

export class Endpoint extends Context.Service<Endpoint, string>()(
  "AWS::Endpoint",
) {}
