// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Sentry Organization Code Mapping resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const github = sentry.getSentryOrganizationIntegration({
 *     organization: "my-organization",
 *     providerKey: "github",
 *     name: "my-github-organization",
 * });
 * const thisSentryProject = new sentry.SentryProject("thisSentryProject", {
 *     organization: "my-organization",
 *     team: "my-team",
 *     slug: "web-app",
 *     platform: "javascript",
 *     resolveAge: 720,
 * });
 * const thisSentryOrganizationRepositoryGithub = new sentry.SentryOrganizationRepositoryGithub("thisSentryOrganizationRepositoryGithub", {
 *     organization: "my-organization",
 *     integrationId: github.then(github => github.internalId),
 *     identifier: "my-github-organization/my-github-repo",
 * });
 * const thisSentryOrganizationCodeMapping = new sentry.SentryOrganizationCodeMapping("thisSentryOrganizationCodeMapping", {
 *     organization: "my-organization",
 *     integrationId: github.then(github => github.internalId),
 *     repositoryId: thisSentryOrganizationRepositoryGithub.internalId,
 *     projectId: thisSentryProject.internalId,
 *     defaultBranch: "main",
 *     stackRoot: "/",
 *     sourceRoot: "src/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization slug from the URLhttps://sentry.io/settings/[org-slug]/integrations/github/[org-integration-id]/ and inspect network tab for request to https://sentry.io/api/0/organizations/[org-slug]/code-mappings/ find the corresponding list element and reference [code-mapping-id] from the key "id"
 *
 * ```sh
 *  $ pulumi import sentry:index/sentryOrganizationCodeMapping:SentryOrganizationCodeMapping this org-slug/31347
 * ```
 */
export class SentryOrganizationCodeMapping extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganizationCodeMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryOrganizationCodeMappingState, opts?: pulumi.CustomResourceOptions): SentryOrganizationCodeMapping {
        return new SentryOrganizationCodeMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sentry:index/sentryOrganizationCodeMapping:SentryOrganizationCodeMapping';

    /**
     * Returns true if the given object is an instance of SentryOrganizationCodeMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentryOrganizationCodeMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryOrganizationCodeMapping.__pulumiType;
    }

    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    public readonly defaultBranch!: pulumi.Output<string>;
    /**
     * Sentry Organization Integration ID.
     */
    public readonly integrationId!: pulumi.Output<string>;
    /**
     * The internal ID for this resource.
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * Sentry Project ID.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Sentry Organization Repository ID.
     */
    public readonly repositoryId!: pulumi.Output<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    public readonly sourceRoot!: pulumi.Output<string | undefined>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    public readonly stackRoot!: pulumi.Output<string | undefined>;

    /**
     * Create a SentryOrganizationCodeMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryOrganizationCodeMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SentryOrganizationCodeMappingArgs | SentryOrganizationCodeMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SentryOrganizationCodeMappingState | undefined;
            resourceInputs["defaultBranch"] = state ? state.defaultBranch : undefined;
            resourceInputs["integrationId"] = state ? state.integrationId : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["repositoryId"] = state ? state.repositoryId : undefined;
            resourceInputs["sourceRoot"] = state ? state.sourceRoot : undefined;
            resourceInputs["stackRoot"] = state ? state.stackRoot : undefined;
        } else {
            const args = argsOrState as SentryOrganizationCodeMappingArgs | undefined;
            if ((!args || args.defaultBranch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultBranch'");
            }
            if ((!args || args.integrationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationId'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.repositoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repositoryId'");
            }
            resourceInputs["defaultBranch"] = args ? args.defaultBranch : undefined;
            resourceInputs["integrationId"] = args ? args.integrationId : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["repositoryId"] = args ? args.repositoryId : undefined;
            resourceInputs["sourceRoot"] = args ? args.sourceRoot : undefined;
            resourceInputs["stackRoot"] = args ? args.stackRoot : undefined;
            resourceInputs["internalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentryOrganizationCodeMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SentryOrganizationCodeMapping resources.
 */
export interface SentryOrganizationCodeMappingState {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The internal ID for this resource.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization?: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SentryOrganizationCodeMapping resource.
 */
export interface SentryOrganizationCodeMappingArgs {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}