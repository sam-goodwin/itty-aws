---
title: returns-activated-waf-config-2
product: vercel
url: /docs/rest-api/security/returns-activated-waf-config-2
canonical_url: "https://vercel.com/docs/rest-api/security/returns-activated-waf-config-2"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about returns-activated-waf-config-2 on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Returns activated WAF config

```http
POST /v1/security/firewall/config/{configVersion}/activate
```

Promotes a draft WAF config to an active config

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `configVersion` | string | Yes | The deployed configVersion for the firewall configuration |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "changes",
    "firewallEnabled",
    "id",
    "ips",
    "ownerId",
    "projectKey",
    "rules",
    "updatedAt",
    "version"
  ],
  "properties": {
    "ownerId": {
      "type": "string"
    },
    "projectKey": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "version": {
      "type": "number"
    },
    "updatedAt": {
      "type": "string"
    },
    "firewallEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "crs": {
      "type": "object",
      "required": [
        "gen",
        "java",
        "lfi",
        "ma",
        "php",
        "rce",
        "rfi",
        "sd",
        "sf",
        "sqli",
        "xss"
      ],
      "properties": {
        "sd": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "ma": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "lfi": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rfi": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "rce": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "php": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "gen": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "xss": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sqli": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "sf": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        },
        "java": {
          "type": "object",
          "required": [
            "action",
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "log"
              ]
            }
          }
        }
      }
    },
    "rules": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "action",
              "active",
              "conditionGroup",
              "id",
              "name",
              "valid",
              "validationErrors"
            ]
          },
          {
            "type": "object",
            "required": [
              "action",
              "active",
              "conditionGroup",
              "id",
              "name",
              "valid",
              "validationErrors"
            ]
          }
        ]
      }
    },
    "ips": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "action",
          "hostname",
          "id",
          "ip"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "hostname": {
            "type": "string"
          },
          "ip": {
            "type": "string"
          },
          "notes": {
            "type": "string"
          },
          "action": {
            "type": "string",
            "enum": [
              "bypass",
              "challenge",
              "deny",
              "log"
            ]
          }
        }
      }
    },
    "rulesets": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "active",
              "conditionGroup",
              "id",
              "name"
            ]
          }
        },
        {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "required": [
              "action"
            ]
          }
        }
      ]
    },
    "changes": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "managedRules": {
      "type": "object",
      "properties": {
        "bot_protection": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "ai_bots": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "owasp": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "vercel_ruleset": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        },
        "traffic_sources": {
          "type": "object",
          "required": [
            "active"
          ],
          "properties": {
            "active": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "action": {
              "type": "string",
              "enum": [
                "challenge",
                "deny",
                "log"
              ]
            },
            "updatedAt": {
              "type": "string"
            },
            "userId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            }
          }
        }
      }
    },
    "botIdEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "logHeaders": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "string",
          "enum": [
            "*"
          ]
        }
      ]
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
