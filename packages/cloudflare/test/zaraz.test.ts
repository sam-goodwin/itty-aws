import { describe, expect, it } from "vitest";
import * as Traits from "~/traits";
import { PutZarazRequest } from "~/services/zaraz";

describe("Zaraz", () => {
  it("encodes workflow updates as a raw request body", () => {
    const http = Traits.getHttpTrait(PutZarazRequest.ast);

    expect(http).toMatchObject({
      method: "PUT",
      path: "/zones/{zone_id}/settings/zaraz/workflow",
      contentType: "binary",
    });

    const parts = Traits.buildRequestParts(
      PutZarazRequest.ast,
      http!,
      {
        zoneId: "023e105f4ecef8ad9ca31a8372d0c353",
        workflow: "preview",
      },
      PutZarazRequest,
    );

    expect(parts).toMatchObject({
      path: "/zones/023e105f4ecef8ad9ca31a8372d0c353/settings/zaraz/workflow",
      query: {},
      headers: {},
      body: "preview",
      isMultipart: false,
    });
  });
});
