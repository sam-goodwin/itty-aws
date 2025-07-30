import { expect, test } from "@effect/vitest";
import { Effect } from "effect";
import { createServiceProxy } from "../src/client";
import type * as ec2 from "../src/services/ec2";

test("EC2 integration - DescribeRegions should use dynamic parser", () => {
  return Effect.gen(function* () {
    const ec2Client = createServiceProxy<ec2.Service>("ec2", {
      region: "us-east-1",
    });

    // Call DescribeRegions which should use the new parseEC2Response parser
    const result = yield* ec2Client.describeRegions({});

    // Verify structure matches expected format from dynamic parser
    expect(result).toHaveProperty("Regions");
    expect(Array.isArray(result.Regions)).toBe(true);
    
    if (result.Regions.length > 0) {
      const region = result.Regions[0];
      expect(region).toHaveProperty("RegionName");
      expect(region).toHaveProperty("Endpoint"); 
      expect(region).toHaveProperty("OptInStatus");
    }
  }).pipe(Effect.runPromise);
});
