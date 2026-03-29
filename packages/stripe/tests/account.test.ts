/**
 * Stripe Account Tests
 *
 * Tests for Account operations.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./setup";
import { GetAccount } from "../src/operations/GetAccount";
import { GetAccounts } from "../src/operations/GetAccounts";
import { GetAccountsAccount } from "../src/operations/GetAccountsAccount";
import { GetAccountsAccountCapabilities } from "../src/operations/GetAccountsAccountCapabilities";
import { GetAccountsAccountCapabilitiesCapability } from "../src/operations/GetAccountsAccountCapabilitiesCapability";
import { GetAccountsAccountExternalAccounts } from "../src/operations/GetAccountsAccountExternalAccounts";
import { GetAccountsAccountExternalAccountsId } from "../src/operations/GetAccountsAccountExternalAccountsId";
import { PostAccountsAccountExternalAccounts } from "../src/operations/PostAccountsAccountExternalAccounts";
import { PostAccountsAccountCapabilitiesCapability } from "../src/operations/PostAccountsAccountCapabilitiesCapability";
import { PostAccountLinks } from "../src/operations/PostAccountLinks";
import { PostAccountSessions } from "../src/operations/PostAccountSessions";
import { PostAccounts } from "../src/operations/PostAccounts";
import { PostAccountsAccount } from "../src/operations/PostAccountsAccount";
import { DeleteAccountsAccount } from "../src/operations/DeleteAccountsAccount";

describe("Account", () => {
  describe("GetAccount", () => {
    test("happy path - retrieves the current account", async () => {
      const account = await runEffect(
        Effect.gen(function* () {
          const result = yield* GetAccount({});
          return result;
        }),
      );

      expect(account.id).toBeDefined();
      expect(account.id).toMatch(/^acct_/);
      expect(account.object).toBe("account");
    }, 30_000);

    test("error - InvalidRequestError for invalid expand parameter", async () => {
      await runEffect(
        GetAccount({ expand: "nonexistent_field" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.param).toBe("expand");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetAccounts", () => {
    test("happy path - lists connected accounts", async () => {
      const result = await runEffect(
        GetAccounts({ limit: 5 }),
      );

      expect(result.object).toBe("list");
      expect(result.url).toBe("/v1/accounts");
      expect(Array.isArray(result.data)).toBe(true);
      expect(typeof result.has_more).toBe("boolean");
    }, 30_000);

    test("error - InvalidRequestError for invalid starting_after cursor", async () => {
      await runEffect(
        GetAccounts({ starting_after: "not_a_valid_id" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.param).toBe("starting_after");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetAccountsAccount", () => {
    test("happy path - retrieves a connected account by ID", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a connected account to retrieve
          const created = yield* PostAccounts({
            type: "express",
            country: "US",
            email: `test-getacct-${testRunId}@example.com`,
            metadata: { testRunId },
          });

          const fetched = yield* GetAccountsAccount({
            account: created.id,
          });

          expect(fetched.id).toBe(created.id);
          expect(fetched.object).toBe("account");
          expect(fetched.type).toBe("express");
          expect(fetched.country).toBe("US");

          // Cleanup
          yield* DeleteAccountsAccount({ account: created.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        GetAccountsAccount({ account: "acct_nonexistent_000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccountLinks", () => {
    test("happy path - creates an account link for onboarding", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a connected account to use for the link
          const account = yield* PostAccounts({
            type: "express",
            country: "US",
            email: `test-acctlink-${crypto.randomUUID().slice(0, 8)}@example.com`,
          });

          const link = yield* PostAccountLinks({
            account: account.id,
            type: "account_onboarding",
            refresh_url: "https://example.com/refresh",
            return_url: "https://example.com/return",
          });

          expect(link.object).toBe("account_link");
          expect(link.url).toBeDefined();
          expect(link.url).toContain("stripe.com");
          expect(link.created).toBeGreaterThan(0);
          expect(link.expires_at).toBeGreaterThan(link.created);

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        PostAccountLinks({
          account: "acct_nonexistent_000000",
          type: "account_onboarding",
          refresh_url: "https://example.com/refresh",
          return_url: "https://example.com/return",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.param).toBe("account");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccounts", () => {
    test("happy path - creates a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "express",
            country: "US",
            email: `test-postacct-${testRunId}@example.com`,
            business_type: "individual",
            metadata: { testRunId },
          });

          expect(account.id).toMatch(/^acct_/);
          expect(account.object).toBe("account");
          expect(account.type).toBe("express");
          expect(account.country).toBe("US");

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for invalid country", async () => {
      await runEffect(
        PostAccounts({
          type: "express",
          country: "XX",
          email: `test-postacct-err-${testRunId}@example.com`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.param).toBe("country");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccountsAccount", () => {
    test("happy path - updates a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-updacct-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          const updated = yield* PostAccountsAccount({
            account: created.id,
            metadata: { testRunId, updated: "true" },
            business_profile: {
              name: `Updated Business ${testRunId}`,
            },
          });

          expect(updated.id).toBe(created.id);
          expect(updated.object).toBe("account");
          expect(updated.metadata?.updated).toBe("true");

          // Cleanup
          yield* DeleteAccountsAccount({ account: created.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        PostAccountsAccount({
          account: "acct_nonexistent_000000",
          metadata: { testRunId },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccountSessions", () => {
    test("happy path - creates an account session", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a connected account to use for the session
          const account = yield* PostAccounts({
            type: "express",
            country: "US",
            email: `test-acctsess-${crypto.randomUUID().slice(0, 8)}@example.com`,
          });

          const session = yield* PostAccountSessions({
            account: account.id,
            components: {
              account_onboarding: {
                enabled: true,
              },
            },
          });

          expect(session.object).toBe("account_session");
          expect(session.account).toBe(account.id);
          expect(session.client_secret).toBeDefined();
          expect(session.expires_at).toBeGreaterThan(0);
          expect(session.components.account_onboarding.enabled).toBe(true);

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        PostAccountSessions({
          account: "acct_nonexistent_000000",
          components: {
            account_onboarding: {
              enabled: true,
            },
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.param).toBe("account");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetAccountsAccountCapabilities", () => {
    test("happy path - lists capabilities for a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-caps-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          const result = yield* GetAccountsAccountCapabilities({
            account: account.id,
          });

          expect(result.object).toBe("list");
          expect(Array.isArray(result.data)).toBe(true);
          expect(result.data.length).toBeGreaterThan(0);
          expect(result.data[0].object).toBe("capability");
          expect(result.data[0].id).toBeDefined();

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        GetAccountsAccountCapabilities({
          account: "acct_nonexistent_000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetAccountsAccountCapabilitiesCapability", () => {
    test("happy path - retrieves a specific capability for a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-cap-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          const capability = yield* GetAccountsAccountCapabilitiesCapability({
            account: account.id,
            capability: "card_payments",
          });

          expect(capability.id).toBe("card_payments");
          expect(capability.object).toBe("capability");
          expect(capability.requested).toBe(true);

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        GetAccountsAccountCapabilitiesCapability({
          account: "acct_nonexistent_000000",
          capability: "card_payments",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccountsAccountCapabilitiesCapability", () => {
    test("happy path - updates a capability on a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-updcap-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          const updated = yield* PostAccountsAccountCapabilitiesCapability({
            account: account.id,
            capability: "card_payments",
            requested: true,
          });

          expect(updated.id).toBe("card_payments");
          expect(updated.object).toBe("capability");
          expect(updated.requested).toBe(true);

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        PostAccountsAccountCapabilitiesCapability({
          account: "acct_nonexistent_000000",
          capability: "card_payments",
          requested: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetAccountsAccountExternalAccounts", () => {
    test("happy path - lists external accounts for a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-extaccts-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          const result = yield* GetAccountsAccountExternalAccounts({
            account: account.id,
          });

          expect(result.object).toBe("list");
          expect(Array.isArray(result.data)).toBe(true);
          expect(typeof result.has_more).toBe("boolean");
          expect(result.url).toContain("/external_accounts");

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        GetAccountsAccountExternalAccounts({
          account: "acct_nonexistent_000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostAccountsAccountExternalAccounts", () => {
    test("happy path - creates an external bank account for a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-extacct-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          // Use Stripe's test bank account token
          const result = yield* PostAccountsAccountExternalAccounts({
            account: account.id,
            external_account: "btok_us",
            metadata: { testRunId },
          });

          expect(result).toBeDefined();
          expect((result as any).object).toBe("bank_account");
          expect((result as any).id).toMatch(/^ba_/);

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        PostAccountsAccountExternalAccounts({
          account: "acct_nonexistent_000000",
          external_account: "btok_us",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);

    test("error - InvalidRequestError for invalid external_account token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-extacct-err-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          yield* PostAccountsAccountExternalAccounts({
            account: account.id,
            external_account: "invalid_token_000",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e._tag).toBe("InvalidRequestError");
              if (e._tag === "InvalidRequestError") {
                expect(e.param).toBe("external_account");
                expect(e.request_log_url).toBeDefined();
              }
            }),
          );

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);
  });

  describe("GetAccountsAccountExternalAccountsId", () => {
    test("happy path - retrieves an external account by ID", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-getextid-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          // Create an external bank account
          const created = yield* PostAccountsAccountExternalAccounts({
            account: account.id,
            external_account: "btok_us",
          });

          const externalAccountId = (created as any).id;

          const fetched = yield* GetAccountsAccountExternalAccountsId({
            account: account.id,
            id: externalAccountId,
          });

          expect(fetched).toBeDefined();
          expect((fetched as any).id).toBe(externalAccountId);
          expect((fetched as any).object).toBe("bank_account");

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent external account ID", async () => {
      await runEffect(
        Effect.gen(function* () {
          const account = yield* PostAccounts({
            type: "custom",
            country: "US",
            email: `test-getextid-err-${testRunId}@example.com`,
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            metadata: { testRunId },
          });

          yield* GetAccountsAccountExternalAccountsId({
            account: account.id,
            id: "ba_nonexistent_000000",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e._tag).toBe("InvalidRequestError");
              if (e._tag === "InvalidRequestError") {
                expect(e.code).toBe("resource_missing");
                expect(e.request_log_url).toBeDefined();
              }
            }),
          );

          // Cleanup
          yield* DeleteAccountsAccount({ account: account.id }).pipe(
            Effect.ignore,
          );
        }),
      );
    }, 30_000);
  });

  describe("DeleteAccountsAccount", () => {
    test("happy path - deletes a connected account", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostAccounts({
            type: "express",
            country: "US",
            email: `test-delacct-${testRunId}@example.com`,
            metadata: { testRunId },
          });

          const result = yield* DeleteAccountsAccount({
            account: created.id,
          });

          expect(result.id).toBe(created.id);
          expect(result.object).toBe("account");
          expect(result.deleted).toBe("true");
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent account", async () => {
      await runEffect(
        DeleteAccountsAccount({ account: "acct_nonexistent_000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
              expect(e.request_log_url).toBeDefined();
            }
          }),
        ),
      );
    }, 30_000);
  });
});
