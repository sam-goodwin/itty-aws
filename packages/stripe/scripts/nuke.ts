#!/usr/bin/env bun
/**
 * Stripe Nuke Script
 *
 * Lists and deletes all resources in a Stripe account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/stripe/scripts/nuke.ts --dry-run
 *   bun packages/stripe/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
// Also try CWD/.env as fallback
config();
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "@distilled.cloud/stripe";
import {
  // Top-level list operations (with corresponding deletes)
  GetAccounts,
  DeleteAccountsAccount,
  GetApplePayDomains,
  DeleteApplePayDomainsDomain,
  GetCoupons,
  DeleteCouponsCoupon,
  GetCustomers,
  DeleteCustomersCustomer,
  GetInvoiceitems,
  DeleteInvoiceitemsInvoiceitem,
  GetInvoices,
  DeleteInvoicesInvoice,
  GetPlans,
  DeletePlansPlan,
  GetProducts,
  DeleteProductsId,
  GetRadarValueLists,
  DeleteRadarValueListsValueList,
  GetSubscriptions,
  DeleteSubscriptionsSubscriptionExposedId,
  GetTaxIds,
  DeleteTaxIdsId,
  GetTerminalConfigurations,
  DeleteTerminalConfigurationsConfiguration,
  GetTerminalLocations,
  DeleteTerminalLocationsLocation,
  GetTerminalReaders,
  DeleteTerminalReadersReader,
  GetTestHelpersTestClocks,
  DeleteTestHelpersTestClocksTestClock,
  GetWebhookEndpoints,
  DeleteWebhookEndpointsWebhookEndpoint,
  // Sub-resource deletes (customers)
  GetCustomersCustomerSources,
  DeleteCustomersCustomerSourcesId,
  GetCustomersCustomerTaxIds,
  DeleteCustomersCustomerTaxIdsId,
  // Sub-resource deletes (products)
  GetProductsProductFeatures,
  DeleteProductsProductFeaturesId,
  // Sub-resource deletes (accounts)
  GetAccountsAccountExternalAccounts,
  DeleteAccountsAccountExternalAccountsId,
  GetAccountsAccountPersons,
  DeleteAccountsAccountPersonsPerson,
  // Sub-resource deletes (subscriptions → items, radar value lists → items)
  GetSubscriptionItems,
  DeleteSubscriptionItemsItem,
  GetRadarValueListItems,
  DeleteRadarValueListItemsItem,
  // V2 resources
  GetV2CoreEventDestinations,
  DeleteV2CoreEventDestinationsId,
  // List-only resources (no delete, no required params)
  GetApplicationFees,
  GetBalanceTransactions,
  GetBillingAlerts,
  GetBillingCreditGrants,
  GetBillingMeters,
  GetBillingPortalConfigurations,
  GetCharges,
  GetCheckoutSessions,
  GetClimateOrders,
  GetCreditNotes,
  GetDisputes,
  GetEntitlementsFeatures,
  GetEvents,
  GetFileLinks,
  GetFiles,
  GetFinancialConnectionsAccounts,
  GetForwardingRequests,
  GetIdentityVerificationReports,
  GetIdentityVerificationSessions,
  GetInvoicePayments,
  GetInvoiceRenderingTemplates,
  GetIssuingAuthorizations,
  GetIssuingCardholders,
  GetIssuingCards,
  GetIssuingDisputes,
  GetIssuingPersonalizationDesigns,
  GetIssuingTransactions,
  GetPaymentIntents,
  GetPaymentLinks,
  GetPaymentMethodConfigurations,
  GetPaymentMethodDomains,
  GetPaymentMethods,
  GetPayouts,
  GetPrices,
  GetPromotionCodes,
  GetQuotes,
  GetRefunds,
  GetReportingReportRuns,
  GetReviews,
  GetSetupIntents,
  GetShippingRates,
  GetSubscriptionSchedules,
  GetTaxRates,
  GetTaxRegistrations,
  GetTopups,
  GetTransfers,
  GetTreasuryFinancialAccounts,
} from "@distilled.cloud/stripe/Operations";

// ANSI colors
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// Counters
let totalFound = 0;
let totalSkipped = 0;
let totalDeleted = 0;
let totalFailed = 0;

// ============================================================================
// Nuke Config
// ============================================================================

interface ExcludeRule {
  type: string;
  ids?: string[];
  namePatterns?: string[];
  reason?: string;
}

interface NukeConfig {
  exclude?: ExcludeRule[];
}

const PKG_DIR = nodePath.resolve(import.meta.dir, "..");

function loadNukeConfig(): NukeConfig {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function matchGlob(pattern: string, value: string): boolean {
  return new RegExp("^" + pattern.replace(/\*/g, ".*") + "$").test(value);
}

function isExcluded(
  config: NukeConfig,
  type: string,
  id: string,
  name?: string,
): ExcludeRule | undefined {
  return config.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name)))
      return true;
    return false;
  });
}

// ============================================================================
// Paginated list helper (Stripe uses has_more + starting_after cursor)
// ============================================================================

function listAll<
  A extends { data: readonly { id: string }[]; has_more: boolean },
  E,
  R,
>(
  fn: (input: any) => Effect.Effect<A, E, R>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<A["data"][number][], E, R> {
  return Effect.gen(function* () {
    const results: A["data"][number][] = [];
    let startingAfter: string | undefined;
    let hasMore = true;
    while (hasMore) {
      const input = {
        ...baseInput,
        limit: 100,
        ...(startingAfter ? { starting_after: startingAfter } : {}),
      };
      const response = yield* fn(input);
      results.push(...response.data);
      hasMore = response.has_more;
      if (response.data.length > 0) {
        startingAfter = response.data[response.data.length - 1].id;
      } else {
        hasMore = false;
      }
    }
    return results;
  });
}

function safeList<
  A extends { data: readonly { id: string }[]; has_more: boolean },
  E,
  R,
>(
  fn: (input: any) => Effect.Effect<A, E, R>,
  label: string,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<A["data"][number][], never, R> {
  return listAll(fn, baseInput).pipe(
    Effect.catch(() =>
      Console.log(`  ${RED}Failed to list ${label}${RESET}`).pipe(
        Effect.map(() => {
          totalFailed++;
          return [] as any[];
        }),
      ),
    ),
  );
}

// ============================================================================
// Generic resource handler
// ============================================================================

function nukeResource<
  A extends { data: readonly { id: string }[]; has_more: boolean },
  LE,
  LR,
  DE,
  DR,
>(opts: {
  label: string;
  type: string;
  list: (input: any) => Effect.Effect<A, LE, LR>;
  del?: (input: any) => Effect.Effect<any, DE, DR>;
  getDeleteInput: (item: any) => Record<string, string>;
  getName: (item: any) => string | undefined;
  getMeta: (item: any) => string;
  nukeConfig: NukeConfig;
  dryRun: boolean;
  listInput?: Record<string, unknown>;
}) {
  return Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}${opts.label}${opts.del ? "" : ` ${DIM}(read-only)`}${RESET}`,
    );

    const items = yield* safeList(opts.list, opts.label, opts.listInput ?? {});
    totalFound += items.length;

    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No ${opts.label.toLowerCase()} found${RESET}`);
      return;
    }

    for (const item of items) {
      const name = opts.getName(item);
      const meta = opts.getMeta(item);
      const exclusion = isExcluded(opts.nukeConfig, opts.type, item.id, name ?? undefined);

      if (exclusion) {
        totalSkipped++;
        const reason = exclusion.reason ? ` — ${exclusion.reason}` : "";
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${opts.type}: ${name ?? item.id} ${DIM}(id: ${item.id}${meta ? `, ${meta}` : ""})${RESET}${reason}`,
        );
      } else if (!opts.del) {
        yield* Console.log(
          `  ${DIM}${opts.type}: ${name ?? item.id} (id: ${item.id}${meta ? `, ${meta}` : ""})${RESET}`,
        );
      } else if (opts.dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${opts.type}: ${name ?? item.id} ${DIM}(id: ${item.id}${meta ? `, ${meta}` : ""})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${opts.type}: ${name ?? item.id} ${DIM}(id: ${item.id}${meta ? `, ${meta}` : ""})${RESET}`,
        );
        yield* opts.del(opts.getDeleteInput(item)).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete ${opts.type} ${item.id}${RESET}`,
            );
          }),
        );
      }
    }
  });
}

// ============================================================================
// Main command
// ============================================================================

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run").pipe(
      Flag.withDescription("Only list resources without deleting them"),
      Flag.withDefault(false),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Stripe Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      const nukeConfig = loadNukeConfig();
      const dryRun = config.dryRun;

      // ====================================================================
      // Phase 1: Delete sub-resources before parents
      // ====================================================================

      // Customer sub-resources: sources, tax IDs
      yield* Effect.gen(function* () {
        yield* Console.log(
          `\n${BOLD}${CYAN}Customer Sources${RESET}`,
        );
        const customers = yield* safeList(GetCustomers, "customers");
        let sourceCount = 0;
        for (const cust of customers) {
          const sources = yield* safeList(
            GetCustomersCustomerSources,
            `sources for customer ${cust.id}`,
            { customer: cust.id },
          );
          for (const src of sources) {
            sourceCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "CustomerSource", src.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} CustomerSource: ${src.id} ${DIM}(customer: ${cust.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} CustomerSource: ${src.id} ${DIM}(customer: ${cust.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} CustomerSource: ${src.id} ${DIM}(customer: ${cust.id})${RESET}`,
              );
              yield* DeleteCustomersCustomerSourcesId({
                customer: cust.id,
                id: src.id,
              }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(
                    `    ${RED}Failed to delete source ${src.id}${RESET}`,
                  );
                }),
              );
            }
          }
        }
        if (sourceCount === 0) {
          yield* Console.log(`  ${DIM}No customer sources found${RESET}`);
        }
      });

      yield* Effect.gen(function* () {
        yield* Console.log(
          `\n${BOLD}${CYAN}Customer Tax IDs${RESET}`,
        );
        const customers = yield* safeList(GetCustomers, "customers");
        let taxIdCount = 0;
        for (const cust of customers) {
          const taxIds = yield* safeList(
            GetCustomersCustomerTaxIds,
            `tax IDs for customer ${cust.id}`,
            { customer: cust.id },
          );
          for (const tid of taxIds) {
            taxIdCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "CustomerTaxId", tid.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} CustomerTaxId: ${tid.id} ${DIM}(customer: ${cust.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} CustomerTaxId: ${tid.id} ${DIM}(customer: ${cust.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} CustomerTaxId: ${tid.id} ${DIM}(customer: ${cust.id})${RESET}`,
              );
              yield* DeleteCustomersCustomerTaxIdsId({
                customer: cust.id,
                id: tid.id,
              }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(
                    `    ${RED}Failed to delete tax ID ${tid.id}${RESET}`,
                  );
                }),
              );
            }
          }
        }
        if (taxIdCount === 0) {
          yield* Console.log(`  ${DIM}No customer tax IDs found${RESET}`);
        }
      });

      // Product features (sub-resource of products)
      yield* Effect.gen(function* () {
        yield* Console.log(
          `\n${BOLD}${CYAN}Product Features${RESET}`,
        );
        const products = yield* safeList(GetProducts, "products");
        let featureCount = 0;
        for (const prod of products) {
          const features = yield* safeList(
            GetProductsProductFeatures,
            `features for product ${prod.id}`,
            { product: prod.id },
          );
          for (const feat of features) {
            featureCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "ProductFeature", feat.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} ProductFeature: ${feat.id} ${DIM}(product: ${prod.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} ProductFeature: ${feat.id} ${DIM}(product: ${prod.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} ProductFeature: ${feat.id} ${DIM}(product: ${prod.id})${RESET}`,
              );
              yield* DeleteProductsProductFeaturesId({
                product: prod.id,
                id: feat.id,
              }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(
                    `    ${RED}Failed to delete product feature ${feat.id}${RESET}`,
                  );
                }),
              );
            }
          }
        }
        if (featureCount === 0) {
          yield* Console.log(`  ${DIM}No product features found${RESET}`);
        }
      });

      // Account sub-resources: external accounts, persons
      yield* Effect.gen(function* () {
        yield* Console.log(
          `\n${BOLD}${CYAN}Account External Accounts${RESET}`,
        );
        const accounts = yield* safeList(GetAccounts, "accounts");
        let extCount = 0;
        for (const acct of accounts) {
          const exts = yield* safeList(
            GetAccountsAccountExternalAccounts,
            `external accounts for ${acct.id}`,
            { account: acct.id },
          );
          for (const ext of exts) {
            extCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "ExternalAccount", ext.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} ExternalAccount: ${ext.id} ${DIM}(account: ${acct.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} ExternalAccount: ${ext.id} ${DIM}(account: ${acct.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} ExternalAccount: ${ext.id} ${DIM}(account: ${acct.id})${RESET}`,
              );
              yield* DeleteAccountsAccountExternalAccountsId({
                account: acct.id,
                id: ext.id,
              }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(
                    `    ${RED}Failed to delete external account ${ext.id}${RESET}`,
                  );
                }),
              );
            }
          }
        }
        if (extCount === 0) {
          yield* Console.log(`  ${DIM}No external accounts found${RESET}`);
        }
      });

      yield* Effect.gen(function* () {
        yield* Console.log(
          `\n${BOLD}${CYAN}Account Persons${RESET}`,
        );
        const accounts = yield* safeList(GetAccounts, "accounts");
        let personCount = 0;
        for (const acct of accounts) {
          const persons = yield* safeList(
            GetAccountsAccountPersons,
            `persons for account ${acct.id}`,
            { account: acct.id },
          );
          for (const person of persons) {
            personCount++;
            totalFound++;
            const name =
              ((person as any).first_name ?? "") +
              " " +
              ((person as any).last_name ?? "");
            const exclusion = isExcluded(
              nukeConfig,
              "Person",
              person.id,
              name.trim() || undefined,
            );
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} Person: ${name.trim() || person.id} ${DIM}(id: ${person.id}, account: ${acct.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} Person: ${name.trim() || person.id} ${DIM}(id: ${person.id}, account: ${acct.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} Person: ${name.trim() || person.id} ${DIM}(id: ${person.id}, account: ${acct.id})${RESET}`,
              );
              yield* DeleteAccountsAccountPersonsPerson({
                account: acct.id,
                person: person.id,
              }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(
                    `    ${RED}Failed to delete person ${person.id}${RESET}`,
                  );
                }),
              );
            }
          }
        }
        if (personCount === 0) {
          yield* Console.log(`  ${DIM}No account persons found${RESET}`);
        }
      });

      // ====================================================================
      // Phase 2: Deletable top-level resources (child-first order)
      // ====================================================================

      // Subscription Items (sub-resource: requires subscription ID)
      yield* Effect.gen(function* () {
        yield* Console.log(`\n${BOLD}${CYAN}Subscription Items${RESET}`);
        const subs = yield* safeList(GetSubscriptions, "subscriptions");
        let itemCount = 0;
        for (const sub of subs) {
          const items = yield* safeList(
            GetSubscriptionItems,
            `items for subscription ${sub.id}`,
            { subscription: sub.id },
          );
          for (const item of items) {
            itemCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "SubscriptionItem", item.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} SubscriptionItem: ${item.id} ${DIM}(subscription: ${sub.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} SubscriptionItem: ${item.id} ${DIM}(subscription: ${sub.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} SubscriptionItem: ${item.id} ${DIM}(subscription: ${sub.id})${RESET}`,
              );
              yield* DeleteSubscriptionItemsItem({ item: item.id }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(`    ${RED}Failed to delete subscription item ${item.id}${RESET}`);
                }),
              );
            }
          }
        }
        if (itemCount === 0) {
          yield* Console.log(`  ${DIM}No subscription items found${RESET}`);
        }
      });

      // Subscriptions
      yield* nukeResource({
        label: "Subscriptions",
        type: "Subscription",
        list: GetSubscriptions,
        del: DeleteSubscriptionsSubscriptionExposedId,
        getDeleteInput: (item: any) => ({
          subscription_exposed_id: item.id,
        }),
        getName: (item: any) => (item as any).description ?? item.id,
        getMeta: (item: any) =>
          `status: ${(item as any).status ?? "unknown"}, customer: ${(item as any).customer ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Invoiceitems before Invoices
      yield* nukeResource({
        label: "Invoice Items",
        type: "InvoiceItem",
        list: GetInvoiceitems,
        del: DeleteInvoiceitemsInvoiceitem,
        getDeleteInput: (item: any) => ({ invoiceitem: item.id }),
        getName: (item: any) => (item as any).description ?? item.id,
        getMeta: (item: any) =>
          `customer: ${(item as any).customer ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Invoices (only draft invoices can be deleted)
      yield* nukeResource({
        label: "Invoices",
        type: "Invoice",
        list: GetInvoices,
        del: DeleteInvoicesInvoice,
        getDeleteInput: (item: any) => ({ invoice: item.id }),
        getName: (item: any) => (item as any).number ?? item.id,
        getMeta: (item: any) =>
          `status: ${(item as any).status ?? "unknown"}, customer: ${(item as any).customer ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Radar Value List Items (sub-resource: requires value_list ID)
      yield* Effect.gen(function* () {
        yield* Console.log(`\n${BOLD}${CYAN}Radar Value List Items${RESET}`);
        const lists = yield* safeList(GetRadarValueLists, "radar value lists");
        let itemCount = 0;
        for (const vl of lists) {
          const items = yield* safeList(
            GetRadarValueListItems,
            `items for value list ${vl.id}`,
            { value_list: vl.id },
          );
          for (const item of items) {
            itemCount++;
            totalFound++;
            const exclusion = isExcluded(nukeConfig, "RadarValueListItem", item.id);
            if (exclusion) {
              totalSkipped++;
              yield* Console.log(
                `  ${YELLOW}[SKIP]${RESET} RadarValueListItem: ${(item as any).value ?? item.id} ${DIM}(id: ${item.id}, value_list: ${vl.id})${RESET}${exclusion.reason ? ` — ${exclusion.reason}` : ""}`,
              );
            } else if (dryRun) {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} RadarValueListItem: ${(item as any).value ?? item.id} ${DIM}(id: ${item.id}, value_list: ${vl.id})${RESET}`,
              );
            } else {
              yield* Console.log(
                `  ${RED}[DELETE]${RESET} RadarValueListItem: ${(item as any).value ?? item.id} ${DIM}(id: ${item.id}, value_list: ${vl.id})${RESET}`,
              );
              yield* DeleteRadarValueListItemsItem({ item: item.id }).pipe(
                Effect.andThen(() => { totalDeleted++; }),
                Effect.catch(() => {
                  totalFailed++;
                  return Console.log(`    ${RED}Failed to delete value list item ${item.id}${RESET}`);
                }),
              );
            }
          }
        }
        if (itemCount === 0) {
          yield* Console.log(`  ${DIM}No radar value list items found${RESET}`);
        }
      });

      yield* nukeResource({
        label: "Radar Value Lists",
        type: "RadarValueList",
        list: GetRadarValueLists,
        del: DeleteRadarValueListsValueList,
        getDeleteInput: (item: any) => ({ value_list: item.id }),
        getName: (item: any) => (item as any).name ?? item.id,
        getMeta: (item: any) =>
          `alias: ${(item as any).alias ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Plans before Products (plans reference products)
      yield* nukeResource({
        label: "Plans",
        type: "Plan",
        list: GetPlans,
        del: DeletePlansPlan,
        getDeleteInput: (item: any) => ({ plan: item.id }),
        getName: (item: any) => (item as any).nickname ?? item.id,
        getMeta: (item: any) =>
          `product: ${(item as any).product ?? "unknown"}, interval: ${(item as any).interval ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Coupons
      yield* nukeResource({
        label: "Coupons",
        type: "Coupon",
        list: GetCoupons,
        del: DeleteCouponsCoupon,
        getDeleteInput: (item: any) => ({ coupon: item.id }),
        getName: (item: any) => (item as any).name ?? item.id,
        getMeta: (item: any) =>
          (item as any).percent_off
            ? `${(item as any).percent_off}% off`
            : `${(item as any).amount_off ?? 0} off`,
        nukeConfig,
        dryRun,
      });

      // Products
      yield* nukeResource({
        label: "Products",
        type: "Product",
        list: GetProducts,
        del: DeleteProductsId,
        getDeleteInput: (item: any) => ({ id: item.id }),
        getName: (item: any) => (item as any).name ?? item.id,
        getMeta: (item: any) =>
          `active: ${(item as any).active ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Customers (after subscriptions, invoices, sources, tax IDs)
      yield* nukeResource({
        label: "Customers",
        type: "Customer",
        list: GetCustomers,
        del: DeleteCustomersCustomer,
        getDeleteInput: (item: any) => ({ customer: item.id }),
        getName: (item: any) => (item as any).name ?? (item as any).email ?? item.id,
        getMeta: (item: any) =>
          `email: ${(item as any).email ?? "none"}`,
        nukeConfig,
        dryRun,
      });

      // Tax IDs (top-level)
      yield* nukeResource({
        label: "Tax IDs",
        type: "TaxId",
        list: GetTaxIds,
        del: DeleteTaxIdsId,
        getDeleteInput: (item: any) => ({ id: item.id }),
        getName: (item: any) => (item as any).value ?? item.id,
        getMeta: (item: any) => `type: ${(item as any).type ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Apple Pay Domains
      yield* nukeResource({
        label: "Apple Pay Domains",
        type: "ApplePayDomain",
        list: GetApplePayDomains,
        del: DeleteApplePayDomainsDomain,
        getDeleteInput: (item: any) => ({ domain: item.id }),
        getName: (item: any) => (item as any).domain_name ?? item.id,
        getMeta: () => "",
        nukeConfig,
        dryRun,
      });

      // Webhook Endpoints
      yield* nukeResource({
        label: "Webhook Endpoints",
        type: "WebhookEndpoint",
        list: GetWebhookEndpoints,
        del: DeleteWebhookEndpointsWebhookEndpoint,
        getDeleteInput: (item: any) => ({ webhook_endpoint: item.id }),
        getName: (item: any) => (item as any).url ?? item.id,
        getMeta: (item: any) =>
          `status: ${(item as any).status ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Terminal resources
      yield* nukeResource({
        label: "Terminal Readers",
        type: "TerminalReader",
        list: GetTerminalReaders,
        del: DeleteTerminalReadersReader,
        getDeleteInput: (item: any) => ({ reader: item.id }),
        getName: (item: any) => (item as any).label ?? item.id,
        getMeta: (item: any) =>
          `status: ${(item as any).status ?? "unknown"}, location: ${(item as any).location ?? "none"}`,
        nukeConfig,
        dryRun,
      });

      yield* nukeResource({
        label: "Terminal Configurations",
        type: "TerminalConfiguration",
        list: GetTerminalConfigurations,
        del: DeleteTerminalConfigurationsConfiguration,
        getDeleteInput: (item: any) => ({ configuration: item.id }),
        getName: (item: any) => (item as any).name ?? item.id,
        getMeta: () => "",
        nukeConfig,
        dryRun,
      });

      yield* nukeResource({
        label: "Terminal Locations",
        type: "TerminalLocation",
        list: GetTerminalLocations,
        del: DeleteTerminalLocationsLocation,
        getDeleteInput: (item: any) => ({ location: item.id }),
        getName: (item: any) => (item as any).display_name ?? item.id,
        getMeta: () => "",
        nukeConfig,
        dryRun,
      });

      // Test Clocks
      yield* nukeResource({
        label: "Test Clocks",
        type: "TestClock",
        list: GetTestHelpersTestClocks,
        del: DeleteTestHelpersTestClocksTestClock,
        getDeleteInput: (item: any) => ({ test_clock: item.id }),
        getName: (item: any) => (item as any).name ?? item.id,
        getMeta: (item: any) =>
          `status: ${(item as any).status ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // Connected Accounts (after sub-resources)
      yield* nukeResource({
        label: "Connected Accounts",
        type: "Account",
        list: GetAccounts,
        del: DeleteAccountsAccount,
        getDeleteInput: (item: any) => ({ account: item.id }),
        getName: (item: any) => (item as any).email ?? item.id,
        getMeta: (item: any) =>
          `type: ${(item as any).type ?? "unknown"}, country: ${(item as any).country ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // V2 Event Destinations
      yield* nukeResource({
        label: "V2 Event Destinations",
        type: "EventDestination",
        list: GetV2CoreEventDestinations,
        del: DeleteV2CoreEventDestinationsId,
        getDeleteInput: (item: any) => ({ id: item.id }),
        getName: (item: any) => (item as any).description ?? item.id,
        getMeta: (item: any) => `type: ${(item as any).type ?? "unknown"}`,
        nukeConfig,
        dryRun,
      });

      // ====================================================================
      // Phase 3: Read-only resources (list only, no delete API)
      // ====================================================================

      const readOnlyResources: Array<{
        label: string;
        type: string;
        list: (input: any) => Effect.Effect<any, any, any>;
        getName: (item: any) => string | undefined;
        getMeta: (item: any) => string;
      }> = [
        {
          label: "Application Fees",
          type: "ApplicationFee",
          list: GetApplicationFees,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Balance Transactions",
          type: "BalanceTransaction",
          list: GetBalanceTransactions,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `type: ${(item as any).type ?? "unknown"}, amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Billing Alerts",
          type: "BillingAlert",
          list: GetBillingAlerts,
          getName: (item: any) => (item as any).title ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Billing Credit Grants",
          type: "BillingCreditGrant",
          list: GetBillingCreditGrants,
          getName: (item: any) => (item as any).name ?? item.id,
          getMeta: () => "",
        },
        {
          label: "Billing Meters",
          type: "BillingMeter",
          list: GetBillingMeters,
          getName: (item: any) => (item as any).display_name ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Billing Portal Configurations",
          type: "BillingPortalConfiguration",
          list: GetBillingPortalConfigurations,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `active: ${(item as any).active ?? "unknown"}`,
        },
        {
          label: "Charges",
          type: "Charge",
          list: GetCharges,
          getName: (item: any) => (item as any).description ?? item.id,
          getMeta: (item: any) =>
            `amount: ${(item as any).amount ?? 0}, status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Checkout Sessions",
          type: "CheckoutSession",
          list: GetCheckoutSessions,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Climate Orders",
          type: "ClimateOrder",
          list: GetClimateOrders,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Credit Notes",
          type: "CreditNote",
          list: GetCreditNotes,
          getName: (item: any) => (item as any).number ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Disputes",
          type: "Dispute",
          list: GetDisputes,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, reason: ${(item as any).reason ?? "unknown"}`,
        },
        {
          label: "Entitlement Features",
          type: "EntitlementFeature",
          list: GetEntitlementsFeatures,
          getName: (item: any) => (item as any).name ?? item.id,
          getMeta: () => "",
        },
        {
          label: "Events",
          type: "Event",
          list: GetEvents,
          getName: (item: any) => (item as any).type ?? item.id,
          getMeta: () => "",
        },
        {
          label: "File Links",
          type: "FileLink",
          list: GetFileLinks,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `expired: ${(item as any).expired ?? "unknown"}`,
        },
        {
          label: "Files",
          type: "File",
          list: GetFiles,
          getName: (item: any) => (item as any).filename ?? item.id,
          getMeta: (item: any) =>
            `purpose: ${(item as any).purpose ?? "unknown"}`,
        },
        {
          label: "Financial Connections Accounts",
          type: "FinancialConnectionsAccount",
          list: GetFinancialConnectionsAccounts,
          getName: (item: any) => (item as any).display_name ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Forwarding Requests",
          type: "ForwardingRequest",
          list: GetForwardingRequests,
          getName: (item: any) => item.id,
          getMeta: () => "",
        },
        {
          label: "Identity Verification Reports",
          type: "IdentityVerificationReport",
          list: GetIdentityVerificationReports,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `type: ${(item as any).type ?? "unknown"}`,
        },
        {
          label: "Identity Verification Sessions",
          type: "IdentityVerificationSession",
          list: GetIdentityVerificationSessions,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Invoice Payments",
          type: "InvoicePayment",
          list: GetInvoicePayments,
          getName: (item: any) => item.id,
          getMeta: () => "",
        },
        {
          label: "Invoice Rendering Templates",
          type: "InvoiceRenderingTemplate",
          list: GetInvoiceRenderingTemplates,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Issuing Authorizations",
          type: "IssuingAuthorization",
          list: GetIssuingAuthorizations,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Issuing Cardholders",
          type: "IssuingCardholder",
          list: GetIssuingCardholders,
          getName: (item: any) => (item as any).name ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Issuing Cards",
          type: "IssuingCard",
          list: GetIssuingCards,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, type: ${(item as any).type ?? "unknown"}`,
        },
        {
          label: "Issuing Disputes",
          type: "IssuingDispute",
          list: GetIssuingDisputes,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Issuing Personalization Designs",
          type: "IssuingPersonalizationDesign",
          list: GetIssuingPersonalizationDesigns,
          getName: (item: any) => (item as any).name ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Issuing Transactions",
          type: "IssuingTransaction",
          list: GetIssuingTransactions,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Payment Intents",
          type: "PaymentIntent",
          list: GetPaymentIntents,
          getName: (item: any) => (item as any).description ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Payment Links",
          type: "PaymentLink",
          list: GetPaymentLinks,
          getName: (item: any) => (item as any).url ?? item.id,
          getMeta: (item: any) =>
            `active: ${(item as any).active ?? "unknown"}`,
        },
        {
          label: "Payment Method Configurations",
          type: "PaymentMethodConfiguration",
          list: GetPaymentMethodConfigurations,
          getName: (item: any) => item.id,
          getMeta: () => "",
        },
        {
          label: "Payment Method Domains",
          type: "PaymentMethodDomain",
          list: GetPaymentMethodDomains,
          getName: (item: any) => (item as any).domain_name ?? item.id,
          getMeta: (item: any) =>
            `enabled: ${(item as any).enabled ?? "unknown"}`,
        },
        {
          label: "Payment Methods",
          type: "PaymentMethod",
          list: GetPaymentMethods,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `type: ${(item as any).type ?? "unknown"}`,
        },
        {
          label: "Payouts",
          type: "Payout",
          list: GetPayouts,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Prices",
          type: "Price",
          list: GetPrices,
          getName: (item: any) => (item as any).nickname ?? item.id,
          getMeta: (item: any) =>
            `active: ${(item as any).active ?? "unknown"}, unit_amount: ${(item as any).unit_amount ?? "unknown"}`,
        },
        {
          label: "Promotion Codes",
          type: "PromotionCode",
          list: GetPromotionCodes,
          getName: (item: any) => (item as any).code ?? item.id,
          getMeta: (item: any) =>
            `active: ${(item as any).active ?? "unknown"}`,
        },
        {
          label: "Quotes",
          type: "Quote",
          list: GetQuotes,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Refunds",
          type: "Refund",
          list: GetRefunds,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Reporting Report Runs",
          type: "ReportingReportRun",
          list: GetReportingReportRuns,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Reviews",
          type: "Review",
          list: GetReviews,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `reason: ${(item as any).reason ?? "unknown"}`,
        },
        {
          label: "Setup Intents",
          type: "SetupIntent",
          list: GetSetupIntents,
          getName: (item: any) => (item as any).description ?? item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Shipping Rates",
          type: "ShippingRate",
          list: GetShippingRates,
          getName: (item: any) => (item as any).display_name ?? item.id,
          getMeta: (item: any) =>
            `active: ${(item as any).active ?? "unknown"}`,
        },
        {
          label: "Subscription Schedules",
          type: "SubscriptionSchedule",
          list: GetSubscriptionSchedules,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Tax Rates",
          type: "TaxRate",
          list: GetTaxRates,
          getName: (item: any) => (item as any).display_name ?? item.id,
          getMeta: (item: any) =>
            `percentage: ${(item as any).percentage ?? "unknown"}%, active: ${(item as any).active ?? "unknown"}`,
        },
        {
          label: "Tax Registrations",
          type: "TaxRegistration",
          list: GetTaxRegistrations,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
        {
          label: "Top-ups",
          type: "Topup",
          list: GetTopups,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}, amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Transfers",
          type: "Transfer",
          list: GetTransfers,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `amount: ${(item as any).amount ?? 0}`,
        },
        {
          label: "Treasury Financial Accounts",
          type: "TreasuryFinancialAccount",
          list: GetTreasuryFinancialAccounts,
          getName: (item: any) => item.id,
          getMeta: (item: any) =>
            `status: ${(item as any).status ?? "unknown"}`,
        },
      ];

      for (const res of readOnlyResources) {
        yield* nukeResource({
          label: res.label,
          type: res.type,
          list: res.list,
          getName: res.getName,
          getMeta: res.getMeta,
          getDeleteInput: () => ({}),
          nukeConfig,
          dryRun,
        });
      }

      // ====================================================================
      // Summary
      // ====================================================================

      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!config.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
      }
      if (totalFailed > 0) {
        yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(
  Command.withDescription("List and delete all Stripe resources"),
);

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
