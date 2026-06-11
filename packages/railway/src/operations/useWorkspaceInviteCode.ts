import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation useWorkspaceInviteCode($code: String!) {\n  workspaceInviteCodeUse(code: $code) {\n    adoptionHistory {\n      adoptionLevel\n      createdAt\n      deltaLevel\n      id\n      matchedIcpEmail\n      monthlyEstimatedUsage\n      numConfigFile\n      numCronSchedule\n      numDeploys\n      numEnvs\n      numFailedDeploys\n      numHealthcheck\n      numIconConfig\n      numRegion\n      numReplicas\n      numRootDirectory\n      numSeats\n      numServices\n      numVariables\n      numWatchPatterns\n      totalCores\n      totalDisk\n      totalNetwork\n      updatedAt\n    }\n    adoptionLevel\n    allowDeprecatedRegions\n    apiTokenRateLimit {\n      remainingPoints\n      resetsAt\n    }\n    avatar\n    banReason\n    createdAt\n    customer {\n      appliedCredits\n      billingAddress {\n        city\n        country\n        line1\n        line2\n        name\n        postalCode\n        state\n      }\n      billingEmail\n      billingPeriod {\n        end\n        start\n      }\n      creditBalance\n      currentUsage\n      defaultPaymentMethod {\n        id\n      }\n      defaultPaymentMethodId\n      hasExhaustedFreePlan\n      id\n      invoices {\n        amountDue\n        amountPaid\n        hostedURL\n        invoiceId\n        lastPaymentError\n        paymentIntentStatus\n        pdfURL\n        periodEnd\n        periodStart\n        reissuedInvoiceFrom\n        reissuedInvoiceOf\n        spendCommitmentPrepayment\n        status\n        subscriptionId\n        subscriptionStatus\n        total\n      }\n      isPrepaying\n      isTrialing\n      isUsageSubscriber\n      isWithdrawingToCredits\n      planLimitOverride {\n        config\n        id\n      }\n      remainingUsageCreditBalance\n      spendCommitment {\n        features\n        id\n        minSpendAmountCents\n      }\n      state\n      stripeCustomerId\n      subscriptions {\n        billingCycleAnchor\n        cancelAt\n        cancelAtPeriodEnd\n        couponId\n        id\n        latestInvoiceId\n        nextInvoiceCurrentTotal\n        nextInvoiceDate\n        status\n      }\n      supportedWithdrawalPlatforms\n      taxIds {\n        id\n        type\n        value\n      }\n      trialDaysRemaining\n      usageLimit {\n        agentHardLimitCents\n        agentSoftLimitCents\n        customerId\n        hardLimit\n        id\n        isOverLimit\n        softLimit\n      }\n    }\n    discordRole\n    has2FAEnforcement\n    hasAutomaticDiagnosis\n    hasGuardrailsAccess\n    hasSAML\n    id\n    members {\n      avatar\n      email\n      featureFlags\n      id\n      name\n      role\n      twoFactorAuthEnabled\n    }\n    name\n    partnerProfile {\n      category\n      description\n      slug\n      type\n      website\n    }\n    plan\n    preferredRegion\n    redactedDueTo2FAPending\n    referredUsers {\n      code\n      id\n      status\n    }\n    slackChannelId\n    subscriptionModel\n    subscriptionPlanLimit\n    supportTierOverride\n    team {\n      adoptionHistory {\n        adoptionLevel\n        createdAt\n        deltaLevel\n        id\n        matchedIcpEmail\n        monthlyEstimatedUsage\n        numConfigFile\n        numCronSchedule\n        numDeploys\n        numEnvs\n        numFailedDeploys\n        numHealthcheck\n        numIconConfig\n        numRegion\n        numReplicas\n        numRootDirectory\n        numSeats\n        numServices\n        numVariables\n        numWatchPatterns\n        totalCores\n        totalDisk\n        totalNetwork\n        updatedAt\n      }\n      adoptionLevel\n      apiTokenRateLimit {\n        remainingPoints\n        resetsAt\n      }\n      avatar\n      createdAt\n      customer {\n        appliedCredits\n        billingEmail\n        creditBalance\n        currentUsage\n        defaultPaymentMethodId\n        hasExhaustedFreePlan\n        id\n        isPrepaying\n        isTrialing\n        isUsageSubscriber\n        isWithdrawingToCredits\n        remainingUsageCreditBalance\n        state\n        stripeCustomerId\n        supportedWithdrawalPlatforms\n        trialDaysRemaining\n      }\n      id\n      members {\n        avatar\n        email\n        featureFlags\n        id\n        name\n        role\n      }\n      name\n      preferredRegion\n      slackChannelId\n      supportTierOverride\n      teamPermissions {\n        createdAt\n        id\n        role\n        updatedAt\n        userId\n        workspaceId\n      }\n      updatedAt\n    }\n    updatedAt\n    usersWithout2FA\n  }\n}";

// Input Schema (GraphQL variables)
export const UseWorkspaceInviteCodeInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "useWorkspaceInviteCode",
    type: "mutation",
  }),
);
export type UseWorkspaceInviteCodeInput =
  typeof UseWorkspaceInviteCodeInput.Type;

// Output Schema (GraphQL selection set)
export const UseWorkspaceInviteCodeOutput = Schema.Struct({
  adoptionHistory: Schema.Array(
    Schema.Struct({
      adoptionLevel: Schema.NullOr(Schema.Number),
      createdAt: Schema.String,
      deltaLevel: Schema.NullOr(Schema.Number),
      id: Schema.String,
      matchedIcpEmail: Schema.NullOr(Schema.String),
      monthlyEstimatedUsage: Schema.NullOr(Schema.Number),
      numConfigFile: Schema.Number,
      numCronSchedule: Schema.Number,
      numDeploys: Schema.Number,
      numEnvs: Schema.Number,
      numFailedDeploys: Schema.Number,
      numHealthcheck: Schema.Number,
      numIconConfig: Schema.Number,
      numRegion: Schema.Number,
      numReplicas: Schema.Number,
      numRootDirectory: Schema.Number,
      numSeats: Schema.Number,
      numServices: Schema.Number,
      numVariables: Schema.Number,
      numWatchPatterns: Schema.Number,
      totalCores: Schema.NullOr(Schema.Number),
      totalDisk: Schema.NullOr(Schema.Number),
      totalNetwork: Schema.NullOr(Schema.Number),
      updatedAt: Schema.String,
    }),
  ),
  adoptionLevel: Schema.Number,
  allowDeprecatedRegions: Schema.NullOr(Schema.Boolean),
  apiTokenRateLimit: Schema.NullOr(
    Schema.Struct({
      remainingPoints: Schema.Number,
      resetsAt: Schema.String,
    }),
  ),
  avatar: Schema.NullOr(Schema.String),
  banReason: Schema.NullOr(Schema.String),
  createdAt: Schema.String,
  customer: Schema.Struct({
    appliedCredits: Schema.Number,
    billingAddress: Schema.NullOr(
      Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        postalCode: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    ),
    billingEmail: Schema.NullOr(Schema.String),
    billingPeriod: Schema.Struct({
      end: Schema.String,
      start: Schema.String,
    }),
    creditBalance: Schema.Number,
    currentUsage: Schema.Number,
    defaultPaymentMethod: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    defaultPaymentMethodId: Schema.NullOr(Schema.String),
    hasExhaustedFreePlan: Schema.Boolean,
    id: Schema.String,
    invoices: Schema.Array(
      Schema.Struct({
        amountDue: Schema.Number,
        amountPaid: Schema.Number,
        hostedURL: Schema.NullOr(Schema.String),
        invoiceId: Schema.String,
        lastPaymentError: Schema.NullOr(Schema.String),
        paymentIntentStatus: Schema.NullOr(Schema.String),
        pdfURL: Schema.NullOr(Schema.String),
        periodEnd: Schema.String,
        periodStart: Schema.String,
        reissuedInvoiceFrom: Schema.NullOr(Schema.String),
        reissuedInvoiceOf: Schema.NullOr(Schema.String),
        spendCommitmentPrepayment: Schema.NullOr(Schema.Boolean),
        status: Schema.NullOr(Schema.String),
        subscriptionId: Schema.NullOr(Schema.String),
        subscriptionStatus: Schema.NullOr(Schema.String),
        total: Schema.Number,
      }),
    ),
    isPrepaying: Schema.Boolean,
    isTrialing: Schema.Boolean,
    isUsageSubscriber: Schema.Boolean,
    isWithdrawingToCredits: Schema.Boolean,
    planLimitOverride: Schema.NullOr(
      Schema.Struct({
        config: Schema.Unknown,
        id: Schema.String,
      }),
    ),
    remainingUsageCreditBalance: Schema.Number,
    spendCommitment: Schema.NullOr(
      Schema.Struct({
        features: Schema.Array(Schema.Unknown),
        id: Schema.String,
        minSpendAmountCents: Schema.Number,
      }),
    ),
    state: Schema.Literals([
      "ACTIVE",
      "CANCELLED",
      "INACTIVE",
      "PAST_DUE",
      "UNPAID",
    ]),
    stripeCustomerId: Schema.String,
    subscriptions: Schema.Array(
      Schema.Struct({
        billingCycleAnchor: Schema.String,
        cancelAt: Schema.NullOr(Schema.String),
        cancelAtPeriodEnd: Schema.Boolean,
        couponId: Schema.NullOr(Schema.String),
        id: Schema.String,
        latestInvoiceId: Schema.String,
        nextInvoiceCurrentTotal: Schema.Number,
        nextInvoiceDate: Schema.String,
        status: Schema.String,
      }),
    ),
    supportedWithdrawalPlatforms: Schema.Array(
      Schema.Literals(["BMAC", "GITHUB", "PAYPAL", "STRIPE_CONNECT"]),
    ),
    taxIds: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        value: Schema.String,
      }),
    ),
    trialDaysRemaining: Schema.Number,
    usageLimit: Schema.NullOr(
      Schema.Struct({
        agentHardLimitCents: Schema.NullOr(Schema.Number),
        agentSoftLimitCents: Schema.NullOr(Schema.Number),
        customerId: Schema.String,
        hardLimit: Schema.NullOr(Schema.Number),
        id: Schema.String,
        isOverLimit: Schema.Boolean,
        softLimit: Schema.Number,
      }),
    ),
  }),
  discordRole: Schema.NullOr(Schema.String),
  has2FAEnforcement: Schema.Boolean,
  hasAutomaticDiagnosis: Schema.Boolean,
  hasGuardrailsAccess: Schema.Boolean,
  hasSAML: Schema.Boolean,
  id: Schema.String,
  members: Schema.Array(
    Schema.Struct({
      avatar: Schema.NullOr(Schema.String),
      email: Schema.String,
      featureFlags: Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "CHAT_SANDBOX",
            "DEBUG_SMART_DIAGNOSIS",
            "IN_DASHBOARD_SUPPORT",
            "MAGIC_CONFIG",
            "POSTGRES_PGBOUNCER",
            "PRIORITY_BOARDING",
            "PROJECT_SANDBOXES",
          ]),
        ),
      ),
      id: Schema.String,
      name: Schema.NullOr(Schema.String),
      role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
      twoFactorAuthEnabled: Schema.NullOr(Schema.Boolean),
    }),
  ),
  name: Schema.String,
  partnerProfile: Schema.NullOr(
    Schema.Struct({
      category: Schema.String,
      description: Schema.String,
      slug: Schema.String,
      type: Schema.Literals([
        "BASIC_PARTNER",
        "LIMITED_PARTNER",
        "TEMPLATE_MAINTAINER",
      ]),
      website: Schema.String,
    }),
  ),
  plan: Schema.Literals(["FREE", "HOBBY", "PRO"]),
  preferredRegion: Schema.NullOr(Schema.String),
  redactedDueTo2FAPending: Schema.Boolean,
  referredUsers: Schema.Array(
    Schema.Struct({
      code: Schema.String,
      id: Schema.String,
      status: Schema.Literals([
        "REFEREE_CREDITED",
        "REFERRER_CREDITED",
        "REGISTERED",
      ]),
    }),
  ),
  slackChannelId: Schema.NullOr(Schema.String),
  subscriptionModel: Schema.Literals(["FREE", "TEAM", "USER"]),
  subscriptionPlanLimit: Schema.NullOr(Schema.Unknown),
  supportTierOverride: Schema.NullOr(
    Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
  ),
  team: Schema.NullOr(
    Schema.Struct({
      adoptionHistory: Schema.Array(
        Schema.Struct({
          adoptionLevel: Schema.NullOr(Schema.Number),
          createdAt: Schema.String,
          deltaLevel: Schema.NullOr(Schema.Number),
          id: Schema.String,
          matchedIcpEmail: Schema.NullOr(Schema.String),
          monthlyEstimatedUsage: Schema.NullOr(Schema.Number),
          numConfigFile: Schema.Number,
          numCronSchedule: Schema.Number,
          numDeploys: Schema.Number,
          numEnvs: Schema.Number,
          numFailedDeploys: Schema.Number,
          numHealthcheck: Schema.Number,
          numIconConfig: Schema.Number,
          numRegion: Schema.Number,
          numReplicas: Schema.Number,
          numRootDirectory: Schema.Number,
          numSeats: Schema.Number,
          numServices: Schema.Number,
          numVariables: Schema.Number,
          numWatchPatterns: Schema.Number,
          totalCores: Schema.NullOr(Schema.Number),
          totalDisk: Schema.NullOr(Schema.Number),
          totalNetwork: Schema.NullOr(Schema.Number),
          updatedAt: Schema.String,
        }),
      ),
      adoptionLevel: Schema.Number,
      apiTokenRateLimit: Schema.NullOr(
        Schema.Struct({
          remainingPoints: Schema.Number,
          resetsAt: Schema.String,
        }),
      ),
      avatar: Schema.NullOr(Schema.String),
      createdAt: Schema.String,
      customer: Schema.Struct({
        appliedCredits: Schema.Number,
        billingEmail: Schema.NullOr(Schema.String),
        creditBalance: Schema.Number,
        currentUsage: Schema.Number,
        defaultPaymentMethodId: Schema.NullOr(Schema.String),
        hasExhaustedFreePlan: Schema.Boolean,
        id: Schema.String,
        isPrepaying: Schema.Boolean,
        isTrialing: Schema.Boolean,
        isUsageSubscriber: Schema.Boolean,
        isWithdrawingToCredits: Schema.Boolean,
        remainingUsageCreditBalance: Schema.Number,
        state: Schema.Literals([
          "ACTIVE",
          "CANCELLED",
          "INACTIVE",
          "PAST_DUE",
          "UNPAID",
        ]),
        stripeCustomerId: Schema.String,
        supportedWithdrawalPlatforms: Schema.Array(
          Schema.Literals(["BMAC", "GITHUB", "PAYPAL", "STRIPE_CONNECT"]),
        ),
        trialDaysRemaining: Schema.Number,
      }),
      id: Schema.String,
      members: Schema.Array(
        Schema.Struct({
          avatar: Schema.NullOr(Schema.String),
          email: Schema.String,
          featureFlags: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "CHAT_SANDBOX",
                "DEBUG_SMART_DIAGNOSIS",
                "IN_DASHBOARD_SUPPORT",
                "MAGIC_CONFIG",
                "POSTGRES_PGBOUNCER",
                "PRIORITY_BOARDING",
                "PROJECT_SANDBOXES",
              ]),
            ),
          ),
          id: Schema.String,
          name: Schema.NullOr(Schema.String),
          role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
        }),
      ),
      name: Schema.String,
      preferredRegion: Schema.NullOr(Schema.String),
      slackChannelId: Schema.NullOr(Schema.String),
      supportTierOverride: Schema.NullOr(
        Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
      ),
      teamPermissions: Schema.Array(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
          updatedAt: Schema.String,
          userId: Schema.String,
          workspaceId: Schema.String,
        }),
      ),
      updatedAt: Schema.String,
    }),
  ),
  updatedAt: Schema.String,
  usersWithout2FA: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("workspaceInviteCodeUse"));
export type UseWorkspaceInviteCodeOutput =
  typeof UseWorkspaceInviteCodeOutput.Type;

/**
 * Use an invite code to join a workspace
 */
export const useWorkspaceInviteCode = API.make(() => ({
  inputSchema: UseWorkspaceInviteCodeInput,
  outputSchema: UseWorkspaceInviteCodeOutput,
}));
