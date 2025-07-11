import { Data } from "effect";
import { createServiceProxy } from "./client.ts";

import type * as AWS_ from "../src/aws.ts";

const services: Record<string, Record<string, any>> = {};

export type AWS = typeof AWS_;

export const AWS = new Proxy(
  {},
  {
    get: (_, serviceName: string) => {
      return (services[serviceName] ??= new Proxy(class {}, {
        construct(_, config: any): any {
          return createServiceProxy(serviceName, config);
        },
        get(_, className: string) {
          if (className.endsWith("Exception")) {
            return (services[serviceName][className] ??= (() => {
              class Exception extends Data.TaggedError(className)<{
                readonly message?: string;
              }> {}
              Exception.prototype.name = className;
              return Exception;
            })());
          }
          return undefined;
        },
      }));
    },
  },
) as any as typeof AWS_;
