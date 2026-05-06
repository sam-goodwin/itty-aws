import { describe, expect, it } from "vitest";
import { customersexport } from "../src/operations/customersexport.ts";
import { metricsexport } from "../src/operations/metricsexport.ts";
import { ordersexport } from "../src/operations/ordersexport.ts";
import { subscriptionsexport } from "../src/operations/subscriptionsexport.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

const expectCsv = (csv: string) => {
  expect(typeof csv).toBe("string");
  expect(csv.length).toBeGreaterThan(0);
  expect(csv.split(/\r?\n/, 1)[0]).toContain(",");
};

describeLive("Exports", () => {
  it("exports customers as CSV", { timeout: 120_000 }, async () => {
    const csv = await runEffect(
      customersexport({ organization_id: organizationId }),
    );

    expectCsv(csv);
    expect(csv.toLowerCase()).toContain("email");
  });

  it("exports orders as CSV", { timeout: 120_000 }, async () => {
    const csv = await runEffect(
      ordersexport({ organization_id: organizationId }),
    );

    expectCsv(csv);
  });

  it("exports subscriptions as CSV", { timeout: 120_000 }, async () => {
    const csv = await runEffect(
      subscriptionsexport({ organization_id: organizationId }),
    );

    expectCsv(csv);
  });

  it("exports metrics as CSV", { timeout: 120_000 }, async () => {
    const csv = await runEffect(
      metricsexport({
        start_date: "2026-01-01",
        end_date: "2026-01-02",
        interval: "day",
        organization_id: organizationId,
      }),
    );

    expectCsv(csv);
    expect(csv.toLowerCase()).toContain("timestamp");
  });
});
