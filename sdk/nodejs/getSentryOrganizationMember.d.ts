import * as pulumi from "@pulumi/pulumi";
/**
 * Retrieve an organization member by email.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryOrganizationMember({
 *     email: "test@example.com",
 *     organization: "terraform-provider-sentry",
 * });
 * ```
 */
export declare function getSentryOrganizationMember(args: GetSentryOrganizationMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryOrganizationMemberResult>;
/**
 * A collection of arguments for invoking getSentryOrganizationMember.
 */
export interface GetSentryOrganizationMemberArgs {
    /**
     * The email of the organization member.
     */
    email: string;
    /**
     * The slug of the organization.
     */
    organization: string;
}
/**
 * A collection of values returned by getSentryOrganizationMember.
 */
export interface GetSentryOrganizationMemberResult {
    /**
     * The email of the organization member.
     */
    readonly email: string;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * The slug of the organization.
     */
    readonly organization: string;
    /**
     * This is the role of the organization member.
     */
    readonly role: string;
}
/**
 * Retrieve an organization member by email.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryOrganizationMember({
 *     email: "test@example.com",
 *     organization: "terraform-provider-sentry",
 * });
 * ```
 */
export declare function getSentryOrganizationMemberOutput(args: GetSentryOrganizationMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryOrganizationMemberResult>;
/**
 * A collection of arguments for invoking getSentryOrganizationMember.
 */
export interface GetSentryOrganizationMemberOutputArgs {
    /**
     * The email of the organization member.
     */
    email: pulumi.Input<string>;
    /**
     * The slug of the organization.
     */
    organization: pulumi.Input<string>;
}