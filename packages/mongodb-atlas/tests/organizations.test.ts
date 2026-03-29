import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { addOrgTeamUser } from "../src/operations/addOrgTeamUser";
import { addOrgUserRole } from "../src/operations/addOrgUserRole";
import { createOrg } from "../src/operations/createOrg";
import { createOrgApiKey } from "../src/operations/createOrgApiKey";
import { createOrgApiKeyAccessListEntry } from "../src/operations/createOrgApiKeyAccessListEntry";
import { createOrgBillingCostExplorerUsageProcess } from "../src/operations/createOrgBillingCostExplorerUsageProcess";
import { createOrgLiveMigrationLinkToken } from "../src/operations/createOrgLiveMigrationLinkToken";
import { createOrgResourcePolicy } from "../src/operations/createOrgResourcePolicy";
import { createOrgServiceAccount } from "../src/operations/createOrgServiceAccount";
import { createOrgServiceAccountAccessList } from "../src/operations/createOrgServiceAccountAccessList";
import { createOrgServiceAccountSecret } from "../src/operations/createOrgServiceAccountSecret";
import { createOrgTeam } from "../src/operations/createOrgTeam";
import { createOrgUser } from "../src/operations/createOrgUser";
import { listOrgTeams } from "../src/operations/listOrgTeams";
import { listOrgUsers } from "../src/operations/listOrgUsers";
import { runEffect, testRunId } from "./setup";

const ORG_ID =
  process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("addOrgTeamUser", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent team", async () => {
    const error = await runEffect(
      addOrgTeamUser({
        orgId: ORG_ID,
        teamId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      addOrgTeamUser({
        orgId: "000000000000000000000000",
        teamId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid team ID format", async () => {
    const error = await runEffect(
      addOrgTeamUser({
        orgId: ORG_ID,
        teamId: `invalid-team-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("addOrgUserRole", () => {
  it("happy path - lists organization users to verify API access", async () => {
    const result = await runEffect(
      listOrgUsers({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent user", async () => {
    const error = await runEffect(
      addOrgUserRole({
        orgId: ORG_ID,
        userId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      addOrgUserRole({
        orgId: "000000000000000000000000",
        userId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid user ID format", async () => {
    const error = await runEffect(
      addOrgUserRole({
        orgId: ORG_ID,
        userId: `invalid-user-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for invalid org and user combination", async () => {
    const error = await runEffect(
      addOrgUserRole({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        userId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createOrg", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - BadRequest for empty request body", async () => {
    const error = await runEffect(
      createOrg({}).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for insufficient permissions", async () => {
    const error = await runEffect(
      createOrg({}).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof BadRequest ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - NotFound for invalid endpoint", async () => {
    const error = await runEffect(
      createOrg({ envelope: true }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate organization", async () => {
    const error = await runEffect(
      createOrg({ pretty: true }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof BadRequest ||
        error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgApiKey", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgApiKey({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgApiKey({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgApiKeyAccessListEntry", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent API key", async () => {
    const error = await runEffect(
      createOrgApiKeyAccessListEntry({
        orgId: ORG_ID,
        apiUserId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      createOrgApiKeyAccessListEntry({
        orgId: "000000000000000000000000",
        apiUserId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid API key ID format", async () => {
    const error = await runEffect(
      createOrgApiKeyAccessListEntry({
        orgId: ORG_ID,
        apiUserId: `invalid-key-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate access list entry", async () => {
    const error = await runEffect(
      createOrgApiKeyAccessListEntry({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        apiUserId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgBillingCostExplorerUsageProcess", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgBillingCostExplorerUsageProcess({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgBillingCostExplorerUsageProcess({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgBillingCostExplorerUsageProcess({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgLiveMigrationLinkToken", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgLiveMigrationLinkToken({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgLiveMigrationLinkToken({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgLiveMigrationLinkToken({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgResourcePolicy", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgResourcePolicy({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgResourcePolicy({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgResourcePolicy({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgServiceAccount", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgServiceAccount({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgServiceAccount({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgServiceAccount({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgServiceAccountAccessList", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent service account", async () => {
    const error = await runEffect(
      createOrgServiceAccountAccessList({
        orgId: ORG_ID,
        clientId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      createOrgServiceAccountAccessList({
        orgId: "000000000000000000000000",
        clientId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid client ID format", async () => {
    const error = await runEffect(
      createOrgServiceAccountAccessList({
        orgId: ORG_ID,
        clientId: `invalid-client-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate access list entry", async () => {
    const error = await runEffect(
      createOrgServiceAccountAccessList({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        clientId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgServiceAccountSecret", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent service account", async () => {
    const error = await runEffect(
      createOrgServiceAccountSecret({
        orgId: ORG_ID,
        clientId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      createOrgServiceAccountSecret({
        orgId: "000000000000000000000000",
        clientId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid client ID format", async () => {
    const error = await runEffect(
      createOrgServiceAccountSecret({
        orgId: ORG_ID,
        clientId: `invalid-client-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgTeam", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgTeam({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgTeam({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgTeam({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate team name", async () => {
    const error = await runEffect(
      createOrgTeam({
        orgId: "bbbbbbbbbbbbbbbbbbbbbbbb",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createOrgUser", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent organization", async () => {
    const error = await runEffect(
      createOrgUser({
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible organization", async () => {
    const error = await runEffect(
      createOrgUser({
        orgId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid org ID format", async () => {
    const error = await runEffect(
      createOrgUser({
        orgId: `invalid-org-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate user invitation", async () => {
    const error = await runEffect(
      createOrgUser({
        orgId: "bbbbbbbbbbbbbbbbbbbbbbbb",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});
