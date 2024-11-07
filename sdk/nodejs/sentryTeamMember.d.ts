import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Team Member resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Add a member to a team
 * const defaultSentryOrganizationMember = new sentry.SentryOrganizationMember("defaultSentryOrganizationMember", {
 *     organization: "my-organization",
 *     email: "test@example.com",
 *     role: "member",
 * });
 * const defaultSentryTeam = new sentry.SentryTeam("defaultSentryTeam", {
 *     organization: "my-organization",
 *     slug: "my-team",
 * });
 * const defaultSentryTeamMember = new sentry.SentryTeamMember("defaultSentryTeamMember", {
 *     organization: "my-organization",
 *     team: defaultSentryTeam.id,
 *     memberId: defaultSentryOrganizationMember.internalId,
 * });
 * ```
 *
 * ## Import
 *
 * import using the member ID and team slug from the URL:
 *
 * https://[org-slug].sentry.io/settings/teams/[team-slug]/members/
 *
 * https://[org-slug].sentry.io/settings/members/[member-id]/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryTeamMember:SentryTeamMember default org-slug/team-slug/member-id
 * ```
 */
export declare class SentryTeamMember extends pulumi.CustomResource {
    /**
     * Get an existing SentryTeamMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryTeamMemberState, opts?: pulumi.CustomResourceOptions): SentryTeamMember;
    /**
     * Returns true if the given object is an instance of SentryTeamMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryTeamMember;
    /**
     * The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
     */
    readonly effectiveRole: pulumi.Output<string>;
    /**
     * The ID of the member to add to the team.
     */
    readonly memberId: pulumi.Output<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
     */
    readonly role: pulumi.Output<string | undefined>;
    /**
     * The slug of the team to add the member to.
     */
    readonly team: pulumi.Output<string>;
    /**
     * Create a SentryTeamMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryTeamMemberArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryTeamMember resources.
 */
export interface SentryTeamMemberState {
    /**
     * The effective role of the member in the team. This represents the highest role, determined by comparing the lower role assigned by the member's organizational role with the role assigned by the member's team role.
     */
    effectiveRole?: pulumi.Input<string>;
    /**
     * The ID of the member to add to the team.
     */
    memberId?: pulumi.Input<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    organization?: pulumi.Input<string>;
    /**
     * The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
     */
    role?: pulumi.Input<string>;
    /**
     * The slug of the team to add the member to.
     */
    team?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryTeamMember resource.
 */
export interface SentryTeamMemberArgs {
    /**
     * The ID of the member to add to the team.
     */
    memberId: pulumi.Input<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    organization: pulumi.Input<string>;
    /**
     * The role of the member in the team. When not set, resolve to the minimum team role given by this member's organization role.
     */
    role?: pulumi.Input<string>;
    /**
     * The slug of the team to add the member to.
     */
    team: pulumi.Input<string>;
}
