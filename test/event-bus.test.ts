import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { AWS } from "../src/index.js";
import { endpoint } from "./constants.js";
import { fail } from "assert";

const client = new AWS.EventBridge({
  endpoint,
});

interface TestContext {
  eventBusName: string;
}

describe("EventBridge", () => {
  beforeEach<TestContext>(async (context) => {
    const eventBusName = `itty-event-bus-${Date.now()}`;
    await client.createEventBus({
      Name: eventBusName,
    });
    context.eventBusName = eventBusName;
  });

  afterEach<TestContext>(async (context) => {
    await client.deleteEventBus({
      Name: context.eventBusName,
    });
  });

  test<TestContext>("putEvents", async (context) => {
    let response;
    let attempts = 0;
    while (true) {
      response = await putEvents();
      if (response.FailedEntryCount) {
        attempts += 1;
        if (attempts > 10) {
          fail("failed to put events");
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        break;
      }
    }

    function putEvents() {
      return client.putEvents({
        Entries: [
          {
            EventBusName: context.eventBusName,
            DetailType: "itty-event",
            Detail: JSON.stringify({
              key: "value",
            }),
            Source: "itty",
          },
        ],
      });
    }
  });
});
