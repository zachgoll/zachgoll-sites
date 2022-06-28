#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsStack } from '../lib/aws-stack';

const app = new cdk.App();
new AwsStack(app, 'AwsStack', {
  env: { account: '550123000745', region: 'us-east-1' },
});
