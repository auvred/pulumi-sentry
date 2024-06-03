import * as pulumi from "@pulumi/pulumi";
/**
 * Resource for managing Sentry organization members. To add a member to a team, use the `sentry.SentryTeamMember` resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create an organization member
 * const johnDoe = new sentry.SentryOrganizationMember("johnDoe", {
 *     email: "test@example.com",
 *     organization: "my-organization",
 *     role: "member",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization, membership id from the URL:
 *
 * https://sentry.io/settings/[org-slug]/members/[member-id]/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryOrganizationMember:SentryOrganizationMember john_doe org-slug/member-id
 * ```
 */
export declare class SentryOrganizationMember extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganizationMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryOrganizationMemberState, opts?: pulumi.CustomResourceOptions): SentryOrganizationMember;
    /**
     * Returns true if the given object is an instance of SentryOrganizationMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryOrganizationMember;
    /**
     * The email of the organization member.
     */
    readonly email: pulumi.Output<string>;
    /**
     * The invite has expired.
     */
    readonly expired: pulumi.Output<boolean>;
    /**
     * The internal ID for this organization membership.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The invite is pending.
     */
    readonly pending: pulumi.Output<boolean>;
    /**
     * This is the role of the organization member.
     */
    readonly role: pulumi.Output<string>;
    /**
     * Create a SentryOrganizationMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryOrganizationMemberArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryOrganizationMember resources.
 */
export interface SentryOrganizationMemberState {
    /**
     * The email of the organization member.
     */
    email?: pulumi.Input<string>;
    /**
     * The invite has expired.
     */
    expired?: pulumi.Input<boolean>;
    /**
     * The internal ID for this organization membership.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The invite is pending.
     */
    pending?: pulumi.Input<boolean>;
    /**
     * This is the role of the organization member.
     */
    role?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryOrganizationMember resource.
 */
export interface SentryOrganizationMemberArgs {
    /**
     * The email of the organization member.
     */
    email: pulumi.Input<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    organization: pulumi.Input<string>;
    /**
     * This is the role of the organization member.
     */
    role: pulumi.Input<string>;
}
