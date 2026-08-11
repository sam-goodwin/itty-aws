---
title: creates-a-webhook
product: vercel
url: /docs/rest-api/webhooks/creates-a-webhook
canonical_url: "https://vercel.com/docs/rest-api/webhooks/creates-a-webhook"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about creates-a-webhook on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Creates a webhook

```http
POST /v1/webhooks
```

Creates a webhook

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "url",
    "events"
  ],
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "pattern": "^https?://"
    },
    "events": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "budget.reached",
          "domain.created",
          "domain.dns.records.changed",
          "domain.transfer-in.started",
          "domain.transfer-in.completed",
          "domain.transfer-in.failed",
          "domain.certificate.add",
          "domain.certificate.add.failed",
          "domain.certificate.renew",
          "domain.certificate.renew.failed",
          "domain.certificate.deleted",
          "domain.renewal",
          "domain.renewal.failed",
          "domain.auto-renew.changed",
          "deployment.created",
          "deployment.build-requested",
          "deployment.cleanup",
          "deployment.error",
          "deployment.blocked",
          "deployment.canceled",
          "deployment.succeeded",
          "deployment.ready",
          "deployment.check-rerequested",
          "deployment.promoted",
          "deployment.rollback",
          "deployment.integration.action.start",
          "deployment.integration.action.cancel",
          "deployment.integration.action.cleanup",
          "deployment.checkrun.start",
          "deployment.checkrun.cancel",
          "edge-config.created",
          "edge-config.deleted",
          "edge-config.items.updated",
          "firewall.attack",
          "firewall.system-rule-anomaly",
          "firewall.custom-rule-anomaly",
          "function.archival-required",
          "function.removal-required",
          "alerts.triggered",
          "integration-configuration.permission-upgraded",
          "integration-configuration.removed",
          "integration-configuration.scope-change-confirmed",
          "integration-configuration.transferred",
          "integration-resource.project-connected",
          "integration-resource.project-disconnected",
          "project.created",
          "project.removed",
          "project.renamed",
          "project.env-variable.created",
          "project.env-variable.updated",
          "project.env-variable.deleted",
          "project.domain.created",
          "project.domain.updated",
          "project.domain.deleted",
          "project.domain.verified",
          "project.domain.unverified",
          "project.domain.moved",
          "project.rolling-release.started",
          "project.rolling-release.aborted",
          "project.rolling-release.completed",
          "project.rolling-release.approved",
          "deployment.checks.failed",
          "deployment.checks.succeeded",
          "deployment-checks-completed",
          "deployment-ready",
          "deployment-prepared",
          "deployment-error",
          "deployment-check-rerequested",
          "deployment-canceled",
          "project-created",
          "project-removed",
          "domain-created",
          "deployment",
          "integration-configuration-permission-updated",
          "integration-configuration-removed",
          "integration-configuration-scope-change-confirmed",
          "marketplace.member.changed",
          "marketplace.invoice.created",
          "marketplace.invoice.paid",
          "marketplace.invoice.notpaid",
          "marketplace.invoice.overdue",
          "marketplace.invoice.refunded",
          "ai-gateway.balance-depleted",
          "ai-gateway.auto-reload.limit-reached",
          "observability.anomaly",
          "observability.anomaly-error",
          "observability.usage-anomaly",
          "observability.error-anomaly",
          "botid.anomaly",
          "flag.created",
          "flag.updated",
          "flag.deleted",
          "flag.segment.created",
          "flag.segment.updated",
          "flag.segment.deleted",
          "test-webhook",
          "message.created",
          "message.updated",
          "message.deleted",
          "thread.resolved",
          "thread.unresolved",
          "message.reaction-added",
          "message.reaction-removed",
          "message.mentioned",
          "comment.created",
          "comment.updated",
          "comment.deleted",
          "comment.resolved",
          "comment.unresolved",
          "comment.reaction-added",
          "comment.reaction-removed",
          "comment.mentioned"
        ]
      }
    },
    "projectIds": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[a-zA-z0-9_]+$"
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "createdAt",
    "events",
    "id",
    "ownerId",
    "secret",
    "updatedAt",
    "url"
  ],
  "properties": {
    "secret": {
      "type": "string",
      "description": "The webhook secret used to sign the payload"
    },
    "events": {
      "type": "array",
      "description": "The webhooks events",
      "items": {
        "type": "string",
        "description": "The webhooks events",
        "enum": [
          "ai-gateway.auto-reload.limit-reached",
          "ai-gateway.balance-depleted",
          "alerts.triggered",
          "botid.anomaly",
          "budget.reached",
          "comment.created",
          "comment.deleted",
          "comment.mentioned",
          "comment.reaction-added",
          "comment.reaction-removed",
          "comment.resolved",
          "comment.unresolved",
          "comment.updated",
          "deployment",
          "deployment-canceled",
          "deployment-check-rerequested",
          "deployment-checks-completed",
          "deployment-error",
          "deployment-prepared",
          "deployment-ready",
          "deployment.blocked",
          "deployment.build-requested",
          "deployment.canceled",
          "deployment.check-rerequested",
          "deployment.checkrun.cancel",
          "deployment.checkrun.start",
          "deployment.checks.failed",
          "deployment.checks.succeeded",
          "deployment.cleanup",
          "deployment.created",
          "deployment.error",
          "deployment.integration.action.cancel",
          "deployment.integration.action.cleanup",
          "deployment.integration.action.start",
          "deployment.promoted",
          "deployment.ready",
          "deployment.rollback",
          "deployment.succeeded",
          "domain-created",
          "domain.auto-renew.changed",
          "domain.certificate.add",
          "domain.certificate.add.failed",
          "domain.certificate.deleted",
          "domain.certificate.renew",
          "domain.certificate.renew.failed",
          "domain.created",
          "domain.dns.records.changed",
          "domain.renewal",
          "domain.renewal.failed",
          "domain.transfer-in.completed",
          "domain.transfer-in.failed",
          "domain.transfer-in.started",
          "edge-config.created",
          "edge-config.deleted",
          "edge-config.items.updated",
          "firewall.attack",
          "firewall.custom-rule-anomaly",
          "firewall.system-rule-anomaly",
          "flag.created",
          "flag.deleted",
          "flag.segment.created",
          "flag.segment.deleted",
          "flag.segment.updated",
          "flag.updated",
          "function.archival-required",
          "function.removal-required",
          "integration-configuration-permission-updated",
          "integration-configuration-removed",
          "integration-configuration-scope-change-confirmed",
          "integration-configuration.permission-upgraded",
          "integration-configuration.removed",
          "integration-configuration.scope-change-confirmed",
          "integration-configuration.transferred",
          "integration-resource.project-connected",
          "integration-resource.project-disconnected",
          "marketplace.invoice.created",
          "marketplace.invoice.notpaid",
          "marketplace.invoice.overdue",
          "marketplace.invoice.paid",
          "marketplace.invoice.refunded",
          "marketplace.member.changed",
          "message.created",
          "message.deleted",
          "message.mentioned",
          "message.reaction-added",
          "message.reaction-removed",
          "message.updated",
          "observability.anomaly",
          "observability.anomaly-error",
          "observability.error-anomaly",
          "observability.usage-anomaly",
          "project-created",
          "project-removed",
          "project.created",
          "project.domain.created",
          "project.domain.deleted",
          "project.domain.moved",
          "project.domain.unverified",
          "project.domain.updated",
          "project.domain.verified",
          "project.env-variable.created",
          "project.env-variable.deleted",
          "project.env-variable.updated",
          "project.removed",
          "project.renamed",
          "project.rolling-release.aborted",
          "project.rolling-release.approved",
          "project.rolling-release.completed",
          "project.rolling-release.started",
          "test-webhook",
          "thread.resolved",
          "thread.unresolved"
        ]
      }
    },
    "id": {
      "type": "string",
      "description": "The webhook id"
    },
    "url": {
      "type": "string",
      "description": "A string with the URL of the webhook"
    },
    "ownerId": {
      "type": "string",
      "description": "The unique ID of the team the webhook belongs to"
    },
    "createdAt": {
      "type": "number",
      "description": "A number containing the date when the webhook was created in in milliseconds"
    },
    "updatedAt": {
      "type": "number",
      "description": "A number containing the date when the webhook was updated in in milliseconds"
    },
    "projectIds": {
      "type": "array",
      "description": "The ID of the projects the webhook is associated with",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [webhooks endpoints](/docs/rest-api#webhooks)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
