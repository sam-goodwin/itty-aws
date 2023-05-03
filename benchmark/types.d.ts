import { OutputLogEvent } from "@aws-sdk/client-cloudwatch-logs";

export interface BenchmarkConfig {
  stackName: string;
  runs: number;
  logs: {
    gitBranch: string;
    outputDirPath: string;
    outputLogFilePath: string;
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

export interface BenchmarkResult {
  functionName: string;
  runtime: string;
  sdkName: string;
  sdkSource: string;
  apiCallLatency: number;
  httpRequestLatency?: number;
}

export type OutputLog = OutputLogEvent[];
