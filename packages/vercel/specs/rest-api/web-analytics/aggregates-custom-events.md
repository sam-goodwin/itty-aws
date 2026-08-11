---
title: aggregates-custom-events
product: vercel
url: /docs/rest-api/web-analytics/aggregates-custom-events
canonical_url: "https://vercel.com/docs/rest-api/web-analytics/aggregates-custom-events"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about aggregates-custom-events on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Aggregates custom events

```http
GET /v1/query/web-analytics/events/aggregate
```

Counts custom events on a project, within the requested date range. Results are either aggregated or broken down over time. Results can additionally be broken down by one dimension, and filtered by multiple dimensions.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes | The project identifier or the project name |
| `by` | array | Yes | Up to two dimensions used to break down results.  At most one time granularity is allowed: hour, day, week, month, year.  Other dimensions: country, deviceType, environment, requestPath, referrerHostname, osName, browserName, route, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, eventName.  JSON dimensions: flags, eventData. Used bare, they break down results by key, for example flags returns one group per flag name. With a key, they break down results by that key's value, for example eventData/plan. Wrap keys containing characters other than letters, digits, and underscores in single quotes, for example flags/'my-flag'. |
| `since` | object | Yes | Timestamp in milliseconds, or a valid Date string.  Selects data from (including) this date and time. Will be adjusted according to the desired time granularity. |
| `until` | object | Yes | Timestamp in milliseconds, or a valid Date string.  Selects data until (including) this date. Will be adjusted according to the desired time granularity. |
| `limit` | integer. min: 1; max: 100; default: 10 | No | Number of distinct results, default to 10. Other results are grouped into "Others" group. |
| `filter` | string | No | OData-compliant filter. Encode the value when sending it in a URL.  Allows filtering on one or multiple dimensions. By default, filters for production environment only.  Supported dimensions: country, deviceType, environment, requestPath, referrerHostname, osName, browserName, route, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, eventName.  JSON dimensions filtered by key: flags/<name>, eventData/<property>, for example eventData/plan eq 'pro'. Wrap keys containing characters other than letters, digits, and underscores in single quotes, for example flags/'my-flag' eq 'true'.  Supported operations include eq, ne, in, and logical operators and, or, not with parentheses. Functions such as startswith are supported by the OData parser. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data",
    "query",
    "version"
  ],
  "properties": {
    "version": {
      "type": "number"
    },
    "query": {
      "type": "object",
      "required": [
        "limit",
        "since",
        "until"
      ],
      "properties": {
        "since": {
          "type": "string"
        },
        "until": {
          "type": "string"
        },
        "groupBy": {
          "type": "array",
          "items": {}
        },
        "filter": {
          "type": "string"
        },
        "limit": {
          "type": "number"
        }
      }
    },
    "data": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "timestamp"
            ]
          }
        },
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "aiGatewayModelId",
              "aiModel",
              "aiModelType",
              "aiProvider",
              "appName",
              "asnId",
              "asnName",
              "attributes",
              "attributionEventName",
              "attributionTarget",
              "authMethod",
              "billableRegion",
              "blobOperationLevel",
              "blobOperationType",
              "botCategory",
              "botCategoryLegacy",
              "botCheckResult",
              "botName",
              "botVerified",
              "browserName",
              "cacheApi",
              "cacheCreation1hInputTokensCurrency",
              "cacheCreationInputTokensCurrency",
              "cacheHitLevel",
              "cacheHitState",
              "cacheHostname",
              "cacheOperation",
              "cachePath",
              "cacheReason",
              "cacheResult",
              "cacheTags",
              "cachedInputTokensCurrency",
              "cause",
              "clientIp",
              "clientIpCountry",
              "clientJa4Digest",
              "clientUserAgent",
              "codingAgent",
              "commitSha",
              "consumerGroup",
              "contentCaptureInputs",
              "contentCaptureOutputs",
              "contentCaptureStatus",
              "contentType",
              "costCurrency",
              "country",
              "dataCacheRegion",
              "deepAnalysisCheck",
              "deploymentId",
              "deviceType",
              "direction",
              "edgeNetworkRegion",
              "edgeType",
              "entryId",
              "entryItemId",
              "entryName",
              "entryRevalidateSeconds",
              "environment",
              "environmentId",
              "errorCode",
              "errorMessage",
              "eventData",
              "eventName",
              "eventType",
              "externalRewriteTargetHost",
              "externalRewriteTargetPath",
              "fetchIndex",
              "fetchType",
              "flagClientName",
              "flagEvaluationReason",
              "flagKey",
              "flagVariant",
              "flags",
              "functionDispatcher",
              "functionRegion",
              "functionStartType",
              "gatewayCostCurrency",
              "generationId",
              "hipaaRequested",
              "httpAccept",
              "httpStatus",
              "imageSource",
              "imageTransformationRegion",
              "inferenceEndpointSlug",
              "inferenceGeoRegion",
              "inferenceProviderRegion",
              "inferenceScope",
              "isAdditionalRequest",
              "isByok",
              "isPrefetchRequest",
              "isPrivateModel",
              "isRequestZdr",
              "isrAction",
              "isrCacheRegion",
              "keyId",
              "keyName",
              "marketCostCurrency",
              "messageId",
              "metricName",
              "microfrontendsDefaultAppDeploymentId",
              "microfrontendsDefaultAppProjectId",
              "microfrontendsMatchedPath",
              "microfrontendsResponseReason",
              "middlewareAction",
              "middlewareActionTarget",
              "moderationApplied",
              "networkId",
              "networkTenancy",
              "notificationUrl",
              "optimizedFormatMimeType",
              "optimizedQuality",
              "optimizedWidthPixels",
              "originHostname",
              "originPath",
              "originRoute",
              "osName",
              "pathType",
              "pathTypeVariant",
              "piiRedactionApplied",
              "privatelinkDnsName",
              "privatelinkEndpointId",
              "privatelinkIpAddress",
              "projectId",
              "projectName",
              "provider",
              "providerAttemptCanonicalSlug",
              "providerAttemptCredentialType",
              "providerAttemptDevSafetyIdentifier",
              "providerAttemptError",
              "providerAttemptIsFinal",
              "providerAttemptModelIndex",
              "providerAttemptNumber",
              "providerAttemptRegion",
              "providerAttemptSafetyIdentifier",
              "providerAttemptStatusCode",
              "providerAttemptSuccess",
              "providerAttemptTimeout",
              "providerAttemptTotalInRequest",
              "pullRequestNumber",
              "pullRequestState",
              "queueName",
              "quotaEntityId",
              "quotaEntityType",
              "quotaRequested",
              "reason",
              "redirectLocation",
              "referrerHostname",
              "referrerUrl",
              "region",
              "reportingProjectId",
              "reportingProjectName",
              "repositoryName",
              "repositoryOwner",
              "requestApi",
              "requestExtension",
              "requestHostname",
              "requestId",
              "requestMethod",
              "requestPath",
              "requestResolvedIp",
              "requestedInferenceRegion",
              "reviewConclusion",
              "reviewStatus",
              "rewriteDestinationHostname",
              "route",
              "runtime",
              "sandboxName",
              "sandboxSessionId",
              "sdkKeyEnvironment",
              "sdkKeyId",
              "servedSpeed",
              "serverActionName",
              "service",
              "sessionId",
              "skewProtection",
              "source",
              "sourceImage",
              "sourceImageHash",
              "sourceImageHostname",
              "sourceImagePathname",
              "specVersion",
              "spendReportDatePart",
              "spendReportGroupBy",
              "stepRunId",
              "storeId",
              "storeName",
              "surchargeCostCurrency",
              "tagName",
              "toolCallErrorType",
              "toolCallProvider",
              "toolCallStatusCode",
              "toolCallSuccess",
              "toolCallType",
              "trafficSource",
              "transcriptInputs",
              "transcriptOutputs",
              "transcriptStatus",
              "triggeringTag",
              "utmCampaign",
              "utmContent",
              "utmMedium",
              "utmSource",
              "utmTerm",
              "vdcOperationOrigin",
              "videoAspectRatio",
              "videoResolution",
              "virtualModelKind",
              "virtualModelSlug",
              "visitorId",
              "wafAction",
              "wafRuleId",
              "workflowEventType",
              "workflowName",
              "workflowRunId",
              "workflowStatus",
              "workflowStepName"
            ]
          }
        }
      ]
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [web-analytics endpoints](/docs/rest-api#web-analytics)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
