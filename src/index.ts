import * as Data from "effect/Data";
import { createServiceProxy } from "./client.ts";

import type * as Services from "./aws.ts";
import type { AWSClientConfig } from "./client.ts";

const services: Record<string, Record<string, any>> = {};

// Create constructor types for all AWS services  
type ServiceConstructor<T> = new (config?: AWSClientConfig) => T;

// Transform exported services into constructors
type AWSServices = {
  [K in keyof typeof Services]: ServiceConstructor<typeof Services[K]>
};

export type AWS = AWSServices;

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
) as any as AWSServices;
