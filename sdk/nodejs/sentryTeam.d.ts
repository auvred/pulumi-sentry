import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Team resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create a team
 * const _default = new sentry.SentryTeam("default", {
 *     organization: "my-organization",
 *     slug: "my-team",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization and team slugs from the URL:
 *
 * https://sentry.io/settings/[org-slug]/teams/[team-slug]/members/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryTeam:SentryTeam default org-slug/team-slug
 * ```
 */
export declare class SentryTeam extends pulumi.CustomResource {
    /**
     * Get an existing SentryTeam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryTeamState, opts?: pulumi.CustomResourceOptions): SentryTeam;
    /**
     * Returns true if the given object is an instance of SentryTeam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryTeam;
    readonly hasAccess: pulumi.Output<boolean>;
    /**
     * The internal ID for this team.
     */
    readonly internalId: pulumi.Output<string>;
    readonly isMember: pulumi.Output<boolean>;
    readonly isPending: pulumi.Output<boolean>;
    /**
     * The name of the team.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The optional slug for this team.
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internalId` instead.
     */
    readonly teamId: pulumi.Output<string>;
    /**
     * Create a SentryTeam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryTeamArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryTeam resources.
 */
export interface SentryTeamState {
    hasAccess?: pulumi.Input<boolean>;
    /**
     * The internal ID for this team.
     */
    internalId?: pulumi.Input<string>;
    isMember?: pulumi.Input<boolean>;
    isPending?: pulumi.Input<boolean>;
    /**
     * The name of the team.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    organization?: pulumi.Input<string>;
    /**
     * The optional slug for this team.
     */
    slug?: pulumi.Input<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internalId` instead.
     */
    teamId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryTeam resource.
 */
export interface SentryTeamArgs {
    /**
     * The name of the team.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the team should be created for.
     */
    organization: pulumi.Input<string>;
    /**
     * The optional slug for this team.
     */
    slug?: pulumi.Input<string>;
}
