---
title: create-a-connector
product: vercel
url: /docs/rest-api/connect/create-a-connector
canonical_url: "https://vercel.com/docs/rest-api/connect/create-a-connector"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-connector on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a connector

```http
POST /v1/connect/connectors
```

Create a connector from type-specific configuration and optionally link it to a project during creation.

## Authentication

**bearerToken**: HTTP bearer

## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data"
  ],
  "properties": {
    "data": {
      "anyOf": [
        {
          "type": "object",
          "required": [
            "clientId"
          ],
          "properties": {
            "serverUrl": {
              "type": "string"
            },
            "serverConfig": {
              "type": "object",
              "default": {}
            },
            "clientId": {
              "type": "string"
            },
            "clientName": {
              "type": "string"
            },
            "clientSecret": {
              "type": "string"
            },
            "tokenEndpointAuthMethod": {
              "type": "string"
            },
            "responseType": {
              "type": "string"
            },
            "pkceRequired": {
              "type": "boolean"
            },
            "codeChallengeMethod": {
              "type": "string"
            },
            "userAuthorization": {
              "type": "object",
              "required": [
                "enabled"
              ]
            },
            "refreshTokens": {
              "type": "object",
              "required": [
                "enabled"
              ]
            },
            "clientCredentials": {
              "type": "object",
              "required": [
                "enabled"
              ]
            },
            "forwardedClaims": {
              "type": "object",
              "description": "Allow-list of extra claims to propagate, keyed by source (idToken). Only claims named here and present in that source are exposed."
            },
            "defaultAudience": {
              "type": "string"
            },
            "defaultTokenExpiresIn": {
              "type": "number",
              "description": "Default token lifetime in seconds to use when the token response omits expires_in.",
              "minimum": 60
            },
            "authorizationUrlParams": {
              "type": "object"
            },
            "jwtBearer": {
              "type": "object"
            },
            "clientAssertion": {
              "type": "object"
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "subjectType": {
              "type": "string",
              "enum": [
                "app",
                "user"
              ]
            },
            "values": {
              "type": "array"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "appId",
            "appSlug",
            "appName",
            "clientId"
          ],
          "properties": {
            "appId": {
              "type": "integer"
            },
            "appSlug": {
              "type": "string"
            },
            "appName": {
              "type": "string"
            },
            "clientId": {
              "type": "string"
            },
            "owner": {
              "type": "object",
              "required": [
                "type",
                "id",
                "slug"
              ]
            },
            "clientSecret": {
              "type": "string"
            },
            "privateKeyPem": {
              "type": "string"
            },
            "webhookSecret": {
              "type": "string"
            },
            "extras": {
              "type": "object"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "clientId",
            "clientSecret"
          ],
          "properties": {
            "appId": {
              "type": "string"
            },
            "appName": {
              "type": "string"
            },
            "clientId": {
              "type": "string"
            },
            "clientSecret": {
              "type": "string"
            },
            "webhookSecret": {
              "type": "string"
            },
            "appScopes": {
              "type": "array"
            },
            "userScopes": {
              "type": "array"
            },
            "ownerOrganization": {
              "type": "object",
              "required": [
                "id",
                "slug",
                "name"
              ]
            },
            "application": {
              "type": "object",
              "required": [
                "id",
                "clientId",
                "name"
              ]
            },
            "extras": {
              "type": "object"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "consumerKey",
            "consumerSecret",
            "loginHost"
          ],
          "properties": {
            "consumerKey": {
              "type": "string"
            },
            "consumerSecret": {
              "type": "string"
            },
            "loginHost": {
              "type": "string"
            }
          }
        },
        {
          "description": "(5 more variants — see OpenAPI spec)"
        }
      ]
    },
    "icon": {
      "type": "string"
    },
    "backgroundColor": {
      "type": "string"
    },
    "accentColor": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "description": "Known types: api-key, github, linear, oauth, photon, salesforce, slack, snowflake. Optional when \\\"connectionMethod\\\" is set."
    },
    "service": {
      "type": "string",
      "description": "Service slug or URL for which the connector is used."
    },
    "connectionMethod": {
      "type": "string",
      "description": "Connection method slug of the service.",
      "maxLength": 64
    },
    "params": {
      "type": "object",
      "description": "Values for the connection method's templateFields.",
      "additionalProperties": {
        "type": "string",
        "maxLength": 256
      }
    },
    "target": {
      "type": "string",
      "description": "Which of the service's targets this connector is for. Requires \\\"connectionMethod\\\" and must be one that method serves. Optional.",
      "maxLength": 64
    },
    "uid": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "projectId": {
      "type": "string",
      "description": "Link to the specified project when specified. See environments."
    },
    "environments": {
      "type": "array",
      "description": "Use these built-in environment names or stable custom environment IDs when linking to projectId.",
      "items": {
        "description": "A built-in environment name or the stable env_* ID of a custom environment.",
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "pattern": "^env_"
          }
        ]
      }
    },
    "triggers": {
      "type": "boolean",
      "description": "Whether the triggers are enabled for this connector."
    },
    "triggerDestination": {
      "type": "object",
      "description": "Initial trigger destination routing for the linked project.",
      "properties": {
        "projectId": {
          "type": "string"
        },
        "path": {
          "type": "string",
          "description": "Route path on the linked project that receives forwarded trigger requests.",
          "maxLength": 2048
        },
        "branch": {
          "type": "string",
          "maxLength": 250
        },
        "customEnvironmentId": {
          "type": "string",
          "description": "The stable env_* ID of a custom environment.",
          "pattern": "^env_"
        }
      }
    },
    "events": {
      "type": "array",
      "description": "The list of the defaults trigger events for this connector.",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Responses

### 201: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "createdAt",
    "data",
    "id",
    "name",
    "ownerId",
    "public",
    "service",
    "supportedSubjectTypes",
    "supportsIcon",
    "supportsInstallation",
    "supportsRevocation",
    "supportsTriggers",
    "type",
    "typeName",
    "uid",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "createdAt": {
      "type": "number"
    },
    "updatedAt": {
      "type": "number"
    },
    "deletedAt": {
      "type": "number"
    },
    "reinstallAt": {
      "type": "number",
      "description": "Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed."
    },
    "createdBy": {
      "oneOf": [
        {
          "type": "object",
          "description": "Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.",
          "required": [
            "id",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "user"
              ]
            },
            "id": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "description": "Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.",
          "required": [
            "environment",
            "id",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "project"
              ]
            },
            "id": {
              "type": "string"
            },
            "environment": {}
          }
        }
      ]
    },
    "updatedBy": {
      "oneOf": [
        {
          "type": "object",
          "description": "Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.",
          "required": [
            "id",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "user"
              ]
            },
            "id": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "description": "Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.",
          "required": [
            "environment",
            "id",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "project"
              ]
            },
            "id": {
              "type": "string"
            },
            "environment": {}
          }
        }
      ]
    },
    "creationMode": {
      "type": "string",
      "description": "How the connector row was originally created. New create paths stamp this explicitly; older rows may omit it.",
      "enum": [
        "managed",
        "manual"
      ]
    },
    "managed": {
      "type": "object",
      "description": "Managed-client metadata exposed without leaking the manager client or installation identifiers.",
      "properties": {
        "sync": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "public": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "uid": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "api-key",
        "custom",
        "discord",
        "github",
        "linear",
        "microsoft-entra",
        "oauth",
        "photon",
        "salesforce",
        "slack",
        "snowflake",
        "snowflake-wif"
      ]
    },
    "service": {
      "type": "string",
      "description": "Best-effort identifier of the third-party service this client represents, independent of `type`. Examples: `'slack'`, `'mcp.linear.app'`, `'auth.example.com'`. Always non-empty on the API response — falls back through `storedClient.service ?? typeDef.service ?? typeDef.type`."
    },
    "connectionMethod": {
      "type": "string",
      "description": "The connection method this connector was created from, when the create request named one."
    },
    "target": {
      "type": "string",
      "description": "Which of the service's products/surfaces this connector points at."
    },
    "name": {
      "type": "string"
    },
    "clientUrl": {
      "type": "string",
      "nullable": true
    },
    "redirectUri": {
      "type": "string",
      "description": "Redirect URI registered with the third-party service for this client, if any. Used by `startAuthorization`/`startInstallation` to replay the exact URI back to the provider's token endpoint. Absent on clients created before this field was introduced; those callers fall back to the `https://connect.vercel.com/callback` default."
    },
    "defaultInstallationId": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "additionalProperties": true
    },
    "typeName": {
      "type": "string"
    },
    "typeIcon": {
      "type": "string"
    },
    "website": {
      "type": "string"
    },
    "devsite": {
      "type": "string"
    },
    "docsite": {
      "type": "string"
    },
    "icon": {
      "type": "string",
      "description": "Client branding icon. SHA-1 hash that resolves to the uploaded icon via the Vercel avatar service. Clients render this with `https://vercel.com/api/www/avatar/{icon}`."
    },
    "backgroundColor": {
      "type": "string",
      "description": "Hex background color (e.g., `#000000`) for branding."
    },
    "accentColor": {
      "type": "string",
      "description": "Hex accent color (e.g., `#000000`) for branding."
    },
    "supportedSubjectTypes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "appTokens": {
      "type": "object",
      "required": [
        "crossInstallation",
        "supportsRefinement"
      ],
      "properties": {
        "crossInstallation": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "supportsRefinement": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "requiresReinstallation": {
          "type": "boolean",
          "description": "True when changing app token grants requires reinstalling the app, so tokens cannot be partitioned independently by requester environment.",
          "enum": [
            false,
            true
          ]
        },
        "scopes": {
          "type": "array",
          "description": "Known allowed app-level scopes. For Slack this is the bot scope set configured on the app; for OAuth it is `scopes_supported` from the server's discovery document.",
          "items": {
            "type": "string"
          }
        },
        "supportedAuthorizationDetails": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "permissionsUrl": {
          "type": "string",
          "description": "Link to the page on the service where this client's app-level permissions are declared and granted, when the service has one and it differs from `clientUrl`."
        }
      }
    },
    "userTokens": {
      "type": "object",
      "required": [
        "crossInstallation",
        "supportsRefinement"
      ],
      "properties": {
        "crossInstallation": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "supportsRefinement": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "scopes": {
          "type": "array",
          "description": "Known allowed user-level scopes. For Slack this is the user scope set configured on the app; for OAuth it is `scopes_supported` from the server's discovery document.",
          "items": {
            "type": "string"
          }
        },
        "supportedAuthorizationDetails": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "manualCredentialInput": {
          "type": "boolean",
          "description": "User authorization is completed by the Connect consent screen submitting a credential instead of an OAuth redirect.",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "supportsInstallation": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "supportsRevocation": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "ownerTenantId": {
      "type": "string"
    },
    "supportsTriggers": {
      "type": "boolean",
      "description": "Whether this client type supports trigger webhooks. Derived from the type definition; indicates that `triggers` and `triggerDestinations` may be meaningful for this client.",
      "enum": [
        false,
        true
      ]
    },
    "supportsIcon": {
      "enum": [
        false,
        "maybe",
        true
      ]
    },
    "triggers": {
      "type": "object",
      "description": "Incoming trigger configuration. Only present when enabled.",
      "required": [
        "enabled"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "events": {
      "type": "array",
      "description": "Known events this client subscribes to (e.g. Slack bot events, GitHub webhook events). Names are type-specific and validated by the managed-create flow when forwarded to the third-party service.",
      "items": {
        "type": "string"
      }
    },
    "triggerDestinations": {
      "type": "array",
      "description": "Destinations that incoming triggers should be forwarded to. Limited to `MAX_CONNEX_TRIGGER_DESTINATIONS` entries.",
      "items": {
        "type": "object",
        "description": "Destinations that incoming triggers should be forwarded to. Limited to `MAX_CONNEX_TRIGGER_DESTINATIONS` entries.",
        "required": [
          "projectId"
        ],
        "properties": {
          "projectId": {
            "type": "string"
          },
          "customEnvironmentId": {
            "type": "string",
            "description": "Stable custom-environment ID to route this destination to. Mutually exclusive with `branch`; omitted destinations keep the legacy production behavior."
          },
          "branch": {
            "type": "string"
          },
          "path": {
            "type": "string"
          }
        }
      }
    },
    "isConnectedToPrioritizedProject": {
      "type": "boolean",
      "description": "Whether this connector is linked to the project supplied through `prioritizedProjectId`. Only present on prioritized list responses.",
      "enum": [
        false,
        true
      ]
    },
    "includes": {
      "type": "object",
      "description": "Optional expansions populated by `?include=...` on the list endpoint.",
      "properties": {
        "projects": {
          "type": "object",
          "description": "Set by `?include=projects`. Capped at 100 per client.",
          "required": [
            "hasMore",
            "items"
          ],
          "properties": {
            "items": {
              "type": "array"
            },
            "hasMore": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "cursor": {
              "type": "string",
              "nullable": true
            }
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 422: No description

### 500: No description

### 502: No description

---

## Related

- [connect endpoints](/docs/rest-api#connect)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
