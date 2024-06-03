import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Organization data source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const org = sentry.getSentryOrganization({
 *     slug: "my-organization",
 * });
 * ```
 */
export declare function getSentryOrganization(args: GetSentryOrganizationArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryOrganizationResult>;
/**
 * A collection of arguments for invoking getSentryOrganization.
 */
export interface GetSentryOrganizationArgs {
    /**
     * The unique URL slug for this organization.
     */
    slug: string;
}
/**
 * A collection of values returned by getSentryOrganization.
 */
export interface GetSentryOrganizationResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The internal ID for this organization.
     */
    readonly internalId: string;
    /**
     * The human readable name for this organization.
     */
    readonly name: string;
    /**
     * The unique URL slug for this organization.
     */
    readonly slug: string;
}
/**
 * Sentry Organization data source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const org = sentry.getSentryOrganization({
 *     slug: "my-organization",
 * });
 * ```
 */
export declare function getSentryOrganizationOutput(args: GetSentryOrganizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryOrganizationResult>;
/**
 * A collection of arguments for invoking getSentryOrganization.
 */
export interface GetSentryOrganizationOutputArgs {
    /**
     * The unique URL slug for this organization.
     */
    slug: pulumi.Input<string>;
}
