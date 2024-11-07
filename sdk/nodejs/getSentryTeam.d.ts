import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Team data source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryTeam({
 *     organization: "my-organization",
 *     slug: "my-team",
 * });
 * ```
 */
export declare function getSentryTeam(args: GetSentryTeamArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryTeamResult>;
/**
 * A collection of arguments for invoking getSentryTeam.
 */
export interface GetSentryTeamArgs {
    /**
     * The slug of the organization the team should be created for.
     */
    organization: string;
    /**
     * The unique URL slug for this team.
     */
    slug: string;
}
/**
 * A collection of values returned by getSentryTeam.
 */
export interface GetSentryTeamResult {
    readonly hasAccess: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The internal ID for this team.
     */
    readonly internalId: string;
    readonly isMember: boolean;
    readonly isPending: boolean;
    /**
     * The human readable name for this organization.
     */
    readonly name: string;
    /**
     * The slug of the organization the team should be created for.
     */
    readonly organization: string;
    /**
     * The unique URL slug for this team.
     */
    readonly slug: string;
}
/**
 * Sentry Team data source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryTeam({
 *     organization: "my-organization",
 *     slug: "my-team",
 * });
 * ```
 */
export declare function getSentryTeamOutput(args: GetSentryTeamOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryTeamResult>;
/**
 * A collection of arguments for invoking getSentryTeam.
 */
export interface GetSentryTeamOutputArgs {
    /**
     * The slug of the organization the team should be created for.
     */
    organization: pulumi.Input<string>;
    /**
     * The unique URL slug for this team.
     */
    slug: pulumi.Input<string>;
}
