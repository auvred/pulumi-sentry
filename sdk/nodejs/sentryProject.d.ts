import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Project resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create a project
 * const _default = new sentry.SentryProject("default", {
 *     defaultRules: false,
 *     organization: "my-organization",
 *     platform: "javascript",
 *     resolveAge: 720,
 *     slug: "web-app",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization and team slugs from the URL:
 *
 * https://sentry.io/settings/[org-slug]/projects/[project-slug]/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryProject:SentryProject default org-slug/project-slug
 * ```
 */
export declare class SentryProject extends pulumi.CustomResource {
    /**
     * Get an existing SentryProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryProjectState, opts?: pulumi.CustomResourceOptions): SentryProject;
    /**
     * Returns true if the given object is an instance of SentryProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryProject;
    readonly color: pulumi.Output<string>;
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set this to false and create keys using the `sentry.SentryKey` resource.
     */
    readonly defaultKey: pulumi.Output<boolean | undefined>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    readonly defaultRules: pulumi.Output<boolean | undefined>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    readonly digestsMaxDelay: pulumi.Output<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    readonly digestsMinDelay: pulumi.Output<number>;
    readonly features: pulumi.Output<string[]>;
    /**
     * The internal ID for this project.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * @deprecated is_bookmarked is no longer used
     */
    readonly isBookmarked: pulumi.Output<boolean>;
    readonly isPublic: pulumi.Output<boolean>;
    /**
     * The name for the project.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The platform for this project. For a list of valid values, see this page. Use `other` for platforms not listed.
     */
    readonly platform: pulumi.Output<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internalId` instead.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    readonly resolveAge: pulumi.Output<number>;
    /**
     * The optional slug for this project.
     */
    readonly slug: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    readonly team: pulumi.Output<string | undefined>;
    /**
     * The slugs of the teams to create the project for.
     */
    readonly teams: pulumi.Output<string[] | undefined>;
    /**
     * Create a SentryProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryProject resources.
 */
export interface SentryProjectState {
    color?: pulumi.Input<string>;
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set this to false and create keys using the `sentry.SentryKey` resource.
     */
    defaultKey?: pulumi.Input<boolean>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    defaultRules?: pulumi.Input<boolean>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    features?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The internal ID for this project.
     */
    internalId?: pulumi.Input<string>;
    /**
     * @deprecated is_bookmarked is no longer used
     */
    isBookmarked?: pulumi.Input<boolean>;
    isPublic?: pulumi.Input<boolean>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The platform for this project. For a list of valid values, see this page. Use `other` for platforms not listed.
     */
    platform?: pulumi.Input<string>;
    /**
     * Use `internalId` instead.
     *
     * @deprecated Use `internalId` instead.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    team?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a SentryProject resource.
 */
export interface SentryProjectArgs {
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set this to false and create keys using the `sentry.SentryKey` resource.
     */
    defaultKey?: pulumi.Input<boolean>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    defaultRules?: pulumi.Input<boolean>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The platform for this project. For a list of valid values, see this page. Use `other` for platforms not listed.
     */
    platform?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    /**
     * The slug of the team to create the project for. **Deprecated** Use `teams` instead.
     *
     * @deprecated Use `teams` instead.
     */
    team?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}
