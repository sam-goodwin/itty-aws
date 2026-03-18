import { describe, expect, it } from "vitest";
import {
  buildRequestParts,
  getHttpTrait,
  getResponsePath,
} from "@distilled.cloud/core/traits";
import {
  CreateContainerApplicationRequest,
  GetContainerApplicationResponse,
} from "~/services/containers";

describe("containers service generation", () => {
  it("encodes createContainerApplication request path and body keys", () => {
    const httpTrait = getHttpTrait(CreateContainerApplicationRequest.ast);
    expect(httpTrait).toBeDefined();

    const parts = buildRequestParts(
      CreateContainerApplicationRequest.ast,
      httpTrait!,
      {
        accountId: "acct-123",
        name: "demo-app",
        maxInstances: 3,
        configuration: {
          image: "registry.cloudflare.com/acct-123/demo-app:latest",
          instanceType: "dev",
          network: {
            assignIpv4: "none",
            mode: "public",
          },
        },
        durableObjects: {
          namespaceId: "ns-123",
        },
      },
      CreateContainerApplicationRequest,
    );

    expect(parts.path).toBe("/accounts/acct-123/containers/applications");
    expect(parts.body).toEqual({
      name: "demo-app",
      max_instances: 3,
      configuration: {
        image: "registry.cloudflare.com/acct-123/demo-app:latest",
        instance_type: "dev",
        network: {
          assign_ipv4: "none",
          mode: "public",
        },
      },
      durable_objects: {
        namespace_id: "ns-123",
      },
    });
  });

  it("preserves the response-path annotation for unwrapped envelopes", () => {
    expect(getResponsePath(GetContainerApplicationResponse.ast)).toBe("result");
  });
});
