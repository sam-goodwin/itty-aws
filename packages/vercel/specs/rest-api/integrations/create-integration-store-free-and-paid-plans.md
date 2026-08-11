---
title: create-integration-store-free-and-paid-plans
product: vercel
url: /docs/rest-api/integrations/create-integration-store-free-and-paid-plans
canonical_url: "https://vercel.com/docs/rest-api/integrations/create-integration-store-free-and-paid-plans"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-integration-store-free-and-paid-plans on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create integration store (free and paid plans)

```http
POST /v1/storage/stores/integration/direct
```

Creates an integration store with automatic billing plan handling. For free resources, omit `billingPlanId` to auto-discover free plans. For paid resources, provide a `billingPlanId` from the billing plans endpoint.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name",
    "integrationConfigurationId",
    "integrationProductIdOrSlug"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Human-readable name for the storage resource",
      "maxLength": 128
    },
    "integrationConfigurationId": {
      "type": "string",
      "description": "ID of your integration configuration. Get this from GET /v1/integrations/configurations",
      "pattern": "^icfg_[a-zA-Z0-9]+$"
    },
    "integrationProductIdOrSlug": {
      "type": "string",
      "description": "ID or slug of the integration product. Get available products from GET /v1/integrations/configuration/{id}/products",
      "oneOf": [
        {
          "description": "Product ID format",
          "pattern": "^iap_[a-zA-Z0-9_]+$"
        },
        {
          "description": "Product slug format",
          "pattern": "^[a-z0-9-]+$"
        }
      ]
    },
    "metadata": {
      "type": "object",
      "description": "Optional key-value pairs for resource metadata",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          },
          {
            "type": "boolean"
          },
          {
            "type": "array"
          },
          {
            "type": "array"
          }
        ]
      }
    },
    "externalId": {
      "type": "string",
      "description": "Optional external identifier for tracking purposes"
    },
    "protocolSettings": {
      "type": "object",
      "description": "Protocol-specific configuration settings",
      "additionalProperties": true
    },
    "source": {
      "type": "string",
      "description": "Source of the store creation request",
      "enum": [
        "marketplace",
        "deploy-button",
        "external",
        "v0",
        "resource-claims",
        "cli",
        "oauth",
        "backoffice",
        "import-recommended-integrations"
      ],
      "default": "marketplace"
    },
    "billingPlanId": {
      "type": "string",
      "description": "ID of the billing plan for paid resources. Get available plans from GET /integrations/integration/{id}/products/{productId}/plans. If not provided, automatically discovers free billing plans."
    },
    "paymentMethodId": {
      "type": "string",
      "description": "Payment method ID for paid resources. Optional - uses default payment method if not provided."
    },
    "prepaymentAmountCents": {
      "type": "number",
      "description": "Amount in cents for prepayment billing plans. Required only for prepayment plans with variable amounts.",
      "minimum": 50
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
    "store"
  ],
  "properties": {
    "store": {
      "type": "object",
      "nullable": true,
      "required": [
        "externalResourceId",
        "product",
        "projectsMetadata",
        "secrets",
        "status",
        "usageQuotaExceeded"
      ],
      "properties": {
        "projectsMetadata": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "envVarPrefix",
              "environmentVariables",
              "environments",
              "id",
              "name",
              "projectId"
            ]
          }
        },
        "projectFilter": {
          "type": "object",
          "properties": {
            "git": {
              "type": "object",
              "required": [
                "providers"
              ]
            }
          }
        },
        "totalConnectedProjects": {
          "type": "number"
        },
        "usageQuotaExceeded": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "status": {
          "type": "string",
          "enum": [
            "available",
            "error",
            "initializing",
            "limits-exceeded-suspended",
            "limits-exceeded-suspended-store-count",
            "onboarding",
            "suspended",
            "uninstalled",
            null
          ],
          "nullable": true
        },
        "ownership": {
          "type": "string",
          "enum": [
            "linked",
            "owned",
            "sandbox"
          ]
        },
        "capabilities": {
          "type": "object",
          "properties": {
            "mcp": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "mcpReadonly": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "sso": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "billable": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "transferable": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "secretsSync": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "secretRotation": {},
            "projects": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "v0": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "autoSensitive": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "agentTools": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "metadata": {
          "type": "object",
          "additionalProperties": {}
        },
        "externalResourceId": {
          "type": "string"
        },
        "externalResourceStatus": {
          "type": "string",
          "enum": [
            "error",
            "onboarding",
            "pending",
            "ready",
            "resumed",
            "suspended",
            "uninstalled",
            null
          ],
          "nullable": true
        },
        "directPartnerConsoleUrl": {
          "type": "string"
        },
        "product": {
          "type": "object",
          "required": [
            "integration",
            "integrationConfigurationId",
            "supportedProtocols"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "slug": {
              "type": "string"
            },
            "iconUrl": {
              "type": "string"
            },
            "capabilities": {
              "type": "object"
            },
            "shortDescription": {
              "type": "string"
            },
            "metadataSchema": {
              "type": "object",
              "required": [
                "properties",
                "type"
              ]
            },
            "resourceLinks": {
              "type": "array"
            },
            "tags": {
              "type": "array"
            },
            "projectConnectionScopes": {
              "type": "array"
            },
            "showSSOLinkOnProjectConnection": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "disableResourceRenaming": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "resourceTitle": {
              "type": "string",
              "description": "Custom resource title to display during installation and configuration. If not provided, defaults to protocol-based defaults."
            },
            "agentSkills": {
              "type": "array",
              "description": "URLs to skills/guides for how AI agents should use this product. Providers can specify these to help agents understand how to interact with their integration."
            },
            "repl": {
              "type": "object",
              "required": [
                "enabled",
                "supportsReadOnlyMode"
              ]
            },
            "guides": {
              "type": "array"
            },
            "integration": {
              "type": "object",
              "required": [
                "icon",
                "id",
                "name",
                "slug"
              ]
            },
            "integrationConfigurationId": {
              "type": "string"
            },
            "supportedProtocols": {
              "type": "array"
            },
            "primaryProtocol": {
              "type": "string",
              "enum": [
                "ai",
                "authentication",
                "checks",
                "experimentation",
                "logDrain",
                "messaging",
                "observability",
                "other",
                "storage",
                "traceDrain",
                "video",
                "workflow"
              ]
            },
            "logDrainStatus": {
              "type": "string",
              "enum": [
                "disabled",
                "enabled"
              ]
            }
          }
        },
        "protocolSettings": {
          "type": "object",
          "properties": {
            "experimentation": {
              "type": "object"
            }
          }
        },
        "notification": {
          "type": "object",
          "required": [
            "level",
            "title"
          ],
          "properties": {
            "title": {
              "type": "string"
            },
            "level": {
              "type": "string",
              "enum": [
                "error",
                "info",
                "warn"
              ]
            },
            "message": {
              "type": "string"
            },
            "href": {
              "type": "string"
            }
          }
        },
        "secrets": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "length",
              "name"
            ]
          }
        },
        "billingPlan": {
          "type": "object",
          "required": [
            "description",
            "id",
            "name",
            "paymentMethodRequired",
            "scope",
            "type"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "prepayment",
                "subscription"
              ]
            },
            "description": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "scope": {
              "type": "string",
              "enum": [
                "installation",
                "resource"
              ]
            },
            "paymentMethodRequired": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "preauthorizationAmount": {
              "type": "number"
            },
            "initialCharge": {
              "type": "string"
            },
            "minimumAmount": {
              "type": "string"
            },
            "maximumAmount": {
              "type": "string"
            },
            "maximumAmountAutoPurchasePerPeriod": {
              "type": "string"
            },
            "cost": {
              "type": "string"
            },
            "details": {
              "type": "array"
            },
            "highlightedDetails": {
              "type": "array"
            },
            "quote": {
              "type": "array"
            },
            "effectiveDate": {
              "type": "string"
            },
            "disabled": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "secretRotationRequestedAt": {
          "type": "number",
          "description": "The timestamp when secret rotation was requested."
        },
        "secretRotationRequestedReason": {
          "type": "string",
          "description": "The reason for the secret rotation request."
        },
        "secretRotationRequestedBy": {
          "type": "string",
          "description": "The ID of the user/team who requested the secret rotation."
        },
        "secretRotationCompletedAt": {
          "type": "number",
          "description": "The timestamp when secret rotation was completed."
        },
        "parentId": {
          "type": "string",
          "description": "The ID of the parent resource. Used to establish a parent-child relationship between resources, such as sandbox resources linking to their owner account resource."
        },
        "targets": {
          "type": "array",
          "description": "The deployment targets that this resource is available for.",
          "items": {
            "type": "string",
            "description": "The deployment targets that this resource is available for.",
            "enum": [
              "development",
              "preview",
              "production"
            ]
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 429: No description

### 500: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
