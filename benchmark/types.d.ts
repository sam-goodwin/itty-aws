import { OutputLogEvent } from "@aws-sdk/client-cloudwatch-logs";

export interface BenchmarkConfig {
  stackName: string;
  functionInstances: number;
  functionRuns: number;
  gitBranch: string;
  output: {
    dirPath: string;
    jsonFilePath: string;
  };
  setupFunction: Pick<FunctionParameters, "functionName" | "entryPath">;
  benchmarkFunctions: FunctionParameters[];
}

export interface FunctionParameters {
  functionName: string;
  entryPath: string;
  runtimeName?: "NODEJS_16_X" | "NODEJS_18_X";
  useItty?: boolean;
  useBundle?: boolean;
  chart: {
    order: number;
    backgroundColor: string;
    borderColor: string;
  };
}

export type CloudWatchLog = OutputLogEvent[];

export interface ApiCall {
  functionName: string;
  runtime: string;
  sdkName: string;
  sdkSource: string;
  apiCallLatency: number;
  httpRequestLatency?: number;
}

export interface LambdaReport {
  isColdStart: boolean;
  initDuration: number;
  executionDuration: number;
  maxMemory: number;
}

export type LambdaExecutionLog = Record<
  string,
  RecordFunctionExecution & ApiCall
>;
