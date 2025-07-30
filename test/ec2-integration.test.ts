import { expect, test } from "@effect/vitest";
import { Effect } from "effect";
import { AWS } from "../src/index";

test("EC2 integration - DescribeRegions should use dynamic parser", () => {
  return Effect.gen(function* () {
    // const ec2Client = createServiceProxy<ec2.EC2>("ec2", {
    //   region: "us-east-1",
    // });

    const ec2 = new AWS.EC2({ region: "us-east-1" });

    // Call DescribeRegions which should use the new parseEC2Response parser
    const result = yield* ec2.describeRegions({});

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

test("EC2 integration - DescribeVpcs should use dynamic parser", () => {
  return Effect.gen(function* () {
    // const ec2Client = createServiceProxy<ec2.EC2>("ec2", {
    //   region: "us-east-1",
    // });
    const ec2 = new AWS.EC2({ region: "us-east-1" });
    
    // Call DescribeVpcs which should use the new parseEC2Response parser
    const result = yield* ec2.describeVpcs({});

    // Verify structure matches expected format from dynamic parser
    expect(result).toHaveProperty("Vpcs");
    expect(Array.isArray(result.Vpcs)).toBe(true);
    
    if (result.Vpcs.length > 0) {
      const vpc = result.Vpcs[0];
      expect(vpc).toHaveProperty("VpcId");
      expect(vpc).toHaveProperty("State");
      expect(vpc).toHaveProperty("CidrBlock");
    }
  }).pipe(Effect.runPromise);
});

test("CloudTrail integration - ListTrails should use JSON parser", () => {
  return Effect.gen(function* () {
    // const cloudtrailClient = createServiceProxy<cloudtrail.CloudTrail>("cloudtrail", {
    //   region: "us-east-1",
    // });

    const cloudtrailClient = new AWS.CloudTrail({ region: "us-east-1" });

    // Call ListTrails which uses restJson1 protocol
    const result = yield* cloudtrailClient.listTrails({});

    // Verify structure matches expected format
    expect(result).toHaveProperty("Trails");
    expect(Array.isArray(result.Trails)).toBe(true);
    
    if (result.Trails.length > 0) {
      const trail = result.Trails[0];
      expect(trail).toHaveProperty("Name");
      expect(trail).toHaveProperty("HomeRegion");
    }
  }).pipe(Effect.runPromise);
});
