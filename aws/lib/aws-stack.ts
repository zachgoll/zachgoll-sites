import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';
import type { DistributionProps } from 'aws-cdk-lib/aws-cloudfront';
import {
  Certificate,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager';

export class AwsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cloudFrontDistributionProps: Pick<
      DistributionProps,
      'certificate' | 'comment' | 'domainNames'
    > = {
      comment: 'S3 bucket to store all image assets for personal site',
      domainNames: ['media.zachgollwitzer.com'],
      certificate: new Certificate(this, 'SiteAssetsCertificate', {
        domainName: '*.zachgollwitzer.com',
        // Requires *.zachgollwitzer.com and zachgollwitzer.com CAA records in Vercel
        // See: https://docs.aws.amazon.com/acm/latest/userguide/setup-caa.html
        validation: CertificateValidation.fromDns(),
      }),
    };

    new CloudFrontToS3(this, 'SiteAssets', {
      logS3AccessLogs: false,
      cloudFrontDistributionProps,
    });
  }
}
