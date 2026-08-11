---
title: counts-custom-events
product: vercel
url: /docs/rest-api/web-analytics/counts-custom-events
canonical_url: "https://vercel.com/docs/rest-api/web-analytics/counts-custom-events"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about counts-custom-events on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Counts custom events

```http
GET /v1/query/web-analytics/events/count
```

Counts the number of custom events on a project (production only), since Web Analytics was enabled. Results can be filtered on supported dimensions.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes | The project identifier or the project name |
| `since` | object | No | Timestamp in milliseconds, or a valid Date string.  Selects data from (including) this date and time. Will be adjusted according to the desired time granularity. |
| `until` | object | No | Timestamp in milliseconds, or a valid Date string.  Selects data until (including) this date. Will be adjusted according to the desired time granularity. |
| `filter` | string | No | OData-compliant filter. Encode the value when sending it in a URL.  Allows filtering on one or multiple dimensions.  Supported dimensions: country, deviceType, environment, requestPath, referrerHostname, osName, browserName, route, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, eventName.  JSON dimensions filtered by key: flags/<name>, eventData/<property>, for example eventData/plan eq 'pro'. Wrap keys containing characters other than letters, digits, and underscores in single quotes, for example flags/'my-flag' eq 'true'.  Supported operations include eq, ne, in, and logical operators and, or, not with parentheses. Functions such as startswith are supported by the OData parser. |
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
        "filter": {
          "type": "string"
        }
      }
    },
    "data": {
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
      ],
      "properties": {
        "projectId": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "deviceType": {
          "type": "string"
        },
        "environment": {
          "type": "string"
        },
        "requestPath": {
          "type": "string"
        },
        "referrerHostname": {
          "type": "string"
        },
        "osName": {
          "type": "string"
        },
        "browserName": {
          "type": "string"
        },
        "route": {
          "type": "string"
        },
        "utmSource": {
          "type": "string"
        },
        "utmMedium": {
          "type": "string"
        },
        "utmCampaign": {
          "type": "string"
        },
        "utmContent": {
          "type": "string"
        },
        "utmTerm": {
          "type": "string"
        },
        "flags": {
          "type": "string"
        },
        "errorMessage": {
          "type": "string"
        },
        "entryRevalidateSeconds": {
          "type": "string"
        },
        "projectName": {
          "type": "string"
        },
        "deploymentId": {
          "type": "string"
        },
        "pathType": {
          "type": "string"
        },
        "pathTypeVariant": {
          "type": "string"
        },
        "requestHostname": {
          "type": "string"
        },
        "requestResolvedIp": {
          "type": "string"
        },
        "requestMethod": {
          "type": "string"
        },
        "requestExtension": {
          "type": "string"
        },
        "requestId": {
          "type": "string"
        },
        "requestApi": {
          "type": "string"
        },
        "referrerUrl": {
          "type": "string"
        },
        "serverActionName": {
          "type": "string"
        },
        "httpStatus": {
          "type": "string"
        },
        "errorCode": {
          "type": "string"
        },
        "source": {
          "type": "string"
        },
        "edgeType": {
          "type": "string"
        },
        "reason": {
          "type": "string"
        },
        "edgeNetworkRegion": {
          "type": "string"
        },
        "functionRegion": {
          "type": "string"
        },
        "imageTransformationRegion": {
          "type": "string"
        },
        "dataCacheRegion": {
          "type": "string"
        },
        "cause": {
          "type": "string"
        },
        "runtime": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        },
        "isrCacheRegion": {
          "type": "string"
        },
        "isrAction": {
          "type": "string"
        },
        "cacheResult": {
          "type": "string"
        },
        "cacheOperation": {
          "type": "string"
        },
        "cacheHostname": {
          "type": "string"
        },
        "cachePath": {
          "type": "string"
        },
        "cacheHitState": {
          "type": "string"
        },
        "cacheHitLevel": {
          "type": "string"
        },
        "cacheApi": {
          "type": "string"
        },
        "cacheReason": {
          "type": "string"
        },
        "clientIp": {
          "type": "string"
        },
        "clientIpCountry": {
          "type": "string"
        },
        "clientUserAgent": {
          "type": "string"
        },
        "httpAccept": {
          "type": "string"
        },
        "clientJa4Digest": {
          "type": "string"
        },
        "asnId": {
          "type": "string"
        },
        "asnName": {
          "type": "string"
        },
        "botName": {
          "type": "string"
        },
        "botCategory": {
          "type": "string"
        },
        "botCategoryLegacy": {
          "type": "string"
        },
        "botVerified": {
          "type": "string"
        },
        "botCheckResult": {
          "type": "string"
        },
        "deepAnalysisCheck": {
          "type": "string"
        },
        "wafAction": {
          "type": "string"
        },
        "wafRuleId": {
          "type": "string"
        },
        "skewProtection": {
          "type": "string"
        },
        "functionStartType": {
          "type": "string"
        },
        "functionDispatcher": {
          "type": "string"
        },
        "isAdditionalRequest": {
          "type": "string"
        },
        "originHostname": {
          "type": "string"
        },
        "originPath": {
          "type": "string"
        },
        "originRoute": {
          "type": "string"
        },
        "fetchType": {
          "type": "string"
        },
        "fetchIndex": {
          "type": "string"
        },
        "imageSource": {
          "type": "string"
        },
        "sourceImage": {
          "type": "string"
        },
        "sourceImagePathname": {
          "type": "string"
        },
        "sourceImageHostname": {
          "type": "string"
        },
        "sourceImageHash": {
          "type": "string"
        },
        "optimizedQuality": {
          "type": "string"
        },
        "optimizedWidthPixels": {
          "type": "string"
        },
        "optimizedFormatMimeType": {
          "type": "string"
        },
        "vdcOperationOrigin": {
          "type": "string"
        },
        "entryName": {
          "type": "string"
        },
        "entryId": {
          "type": "string"
        },
        "entryItemId": {
          "type": "string"
        },
        "tagName": {
          "type": "string"
        },
        "cacheTags": {
          "type": "string"
        },
        "storeId": {
          "type": "string"
        },
        "storeName": {
          "type": "string"
        },
        "blobOperationType": {
          "type": "string"
        },
        "blobOperationLevel": {
          "type": "string"
        },
        "visitorId": {
          "type": "string"
        },
        "eventName": {
          "type": "string"
        },
        "attributionTarget": {
          "type": "string"
        },
        "attributionEventName": {
          "type": "string"
        },
        "metricName": {
          "type": "string"
        },
        "attributes": {
          "type": "string"
        },
        "flagKey": {
          "type": "string"
        },
        "flagVariant": {
          "type": "string"
        },
        "flagEvaluationReason": {
          "type": "string"
        },
        "flagClientName": {
          "type": "string"
        },
        "sdkKeyId": {
          "type": "string"
        },
        "sdkKeyEnvironment": {
          "type": "string"
        },
        "reportingProjectId": {
          "type": "string"
        },
        "reportingProjectName": {
          "type": "string"
        },
        "eventData": {
          "type": "string"
        },
        "middlewareAction": {
          "type": "string"
        },
        "middlewareActionTarget": {
          "type": "string"
        },
        "aiModel": {
          "type": "string"
        },
        "aiGatewayModelId": {
          "type": "string"
        },
        "aiProvider": {
          "type": "string"
        },
        "aiModelType": {
          "type": "string"
        },
        "servedSpeed": {
          "type": "string"
        },
        "virtualModelSlug": {
          "type": "string"
        },
        "virtualModelKind": {
          "type": "string"
        },
        "inferenceEndpointSlug": {
          "type": "string"
        },
        "inferenceScope": {
          "type": "string"
        },
        "inferenceGeoRegion": {
          "type": "string"
        },
        "inferenceProviderRegion": {
          "type": "string"
        },
        "requestedInferenceRegion": {
          "type": "string"
        },
        "costCurrency": {
          "type": "string"
        },
        "marketCostCurrency": {
          "type": "string"
        },
        "cachedInputTokensCurrency": {
          "type": "string"
        },
        "cacheCreationInputTokensCurrency": {
          "type": "string"
        },
        "cacheCreation1hInputTokensCurrency": {
          "type": "string"
        },
        "surchargeCostCurrency": {
          "type": "string"
        },
        "gatewayCostCurrency": {
          "type": "string"
        },
        "keyId": {
          "type": "string"
        },
        "keyName": {
          "type": "string"
        },
        "authMethod": {
          "type": "string"
        },
        "appName": {
          "type": "string"
        },
        "codingAgent": {
          "type": "string"
        },
        "isByok": {
          "type": "string"
        },
        "isPrivateModel": {
          "type": "string"
        },
        "isRequestZdr": {
          "type": "string"
        },
        "hipaaRequested": {
          "type": "string"
        },
        "quotaRequested": {
          "type": "string"
        },
        "quotaEntityId": {
          "type": "string"
        },
        "quotaEntityType": {
          "type": "string"
        },
        "videoResolution": {
          "type": "string"
        },
        "videoAspectRatio": {
          "type": "string"
        },
        "piiRedactionApplied": {
          "type": "string"
        },
        "moderationApplied": {
          "type": "string"
        },
        "queueName": {
          "type": "string"
        },
        "consumerGroup": {
          "type": "string"
        },
        "messageId": {
          "type": "string"
        },
        "eventType": {
          "type": "string"
        },
        "notificationUrl": {
          "type": "string"
        },
        "sandboxSessionId": {
          "type": "string"
        },
        "sandboxName": {
          "type": "string"
        },
        "workflowRunId": {
          "type": "string"
        },
        "workflowName": {
          "type": "string"
        },
        "workflowStatus": {
          "type": "string"
        },
        "stepRunId": {
          "type": "string"
        },
        "workflowStepName": {
          "type": "string"
        },
        "workflowEventType": {
          "type": "string"
        },
        "region": {
          "type": "string"
        },
        "specVersion": {
          "type": "string"
        },
        "contentType": {
          "type": "string"
        },
        "rewriteDestinationHostname": {
          "type": "string"
        },
        "externalRewriteTargetHost": {
          "type": "string"
        },
        "externalRewriteTargetPath": {
          "type": "string"
        },
        "commitSha": {
          "type": "string"
        },
        "reviewConclusion": {
          "type": "string"
        },
        "pullRequestNumber": {
          "type": "string"
        },
        "repositoryName": {
          "type": "string"
        },
        "repositoryOwner": {
          "type": "string"
        },
        "reviewStatus": {
          "type": "string"
        },
        "pullRequestState": {
          "type": "string"
        },
        "triggeringTag": {
          "type": "string"
        },
        "redirectLocation": {
          "type": "string"
        },
        "microfrontendsResponseReason": {
          "type": "string"
        },
        "microfrontendsMatchedPath": {
          "type": "string"
        },
        "microfrontendsDefaultAppDeploymentId": {
          "type": "string"
        },
        "microfrontendsDefaultAppProjectId": {
          "type": "string"
        },
        "service": {
          "type": "string"
        },
        "isPrefetchRequest": {
          "type": "string"
        },
        "spendReportGroupBy": {
          "type": "string"
        },
        "spendReportDatePart": {
          "type": "string"
        },
        "providerAttemptCanonicalSlug": {
          "type": "string"
        },
        "providerAttemptCredentialType": {
          "type": "string"
        },
        "providerAttemptSuccess": {
          "type": "string"
        },
        "providerAttemptStatusCode": {
          "type": "string"
        },
        "providerAttemptTimeout": {
          "type": "string"
        },
        "providerAttemptIsFinal": {
          "type": "string"
        },
        "providerAttemptNumber": {
          "type": "string"
        },
        "providerAttemptTotalInRequest": {
          "type": "string"
        },
        "generationId": {
          "type": "string"
        },
        "sessionId": {
          "type": "string"
        },
        "contentCaptureStatus": {
          "type": "string"
        },
        "contentCaptureInputs": {
          "type": "string"
        },
        "contentCaptureOutputs": {
          "type": "string"
        },
        "transcriptStatus": {
          "type": "string"
        },
        "transcriptInputs": {
          "type": "string"
        },
        "transcriptOutputs": {
          "type": "string"
        },
        "providerAttemptError": {
          "type": "string"
        },
        "providerAttemptSafetyIdentifier": {
          "type": "string"
        },
        "providerAttemptDevSafetyIdentifier": {
          "type": "string"
        },
        "providerAttemptRegion": {
          "type": "string"
        },
        "providerAttemptModelIndex": {
          "type": "string"
        },
        "toolCallType": {
          "type": "string"
        },
        "toolCallProvider": {
          "type": "string"
        },
        "toolCallSuccess": {
          "type": "string"
        },
        "toolCallErrorType": {
          "type": "string"
        },
        "toolCallStatusCode": {
          "type": "string"
        },
        "environmentId": {
          "type": "string"
        },
        "billableRegion": {
          "type": "string"
        },
        "direction": {
          "type": "string"
        },
        "networkTenancy": {
          "type": "string"
        },
        "trafficSource": {
          "type": "string"
        },
        "networkId": {
          "type": "string"
        },
        "privatelinkEndpointId": {
          "type": "string"
        },
        "privatelinkDnsName": {
          "type": "string"
        },
        "privatelinkIpAddress": {
          "type": "string"
        }
      },
      "additionalProperties": {
        "type": "number",
        "nullable": true
      }
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
