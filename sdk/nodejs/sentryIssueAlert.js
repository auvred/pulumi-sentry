"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryIssueAlert = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * ## Example Usage
 *
 * ## Import
 *
 * import using the organization, project slugs and rule id from the URL:
 *
 * https://sentry.io/organizations/[org-slug]/alerts/rules/[project-slug]/[rule-id]/details/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryIssueAlert:SentryIssueAlert default org-slug/project-slug/rule-id
 * ```
 */
class SentryIssueAlert extends pulumi.CustomResource {
    /**
     * Get an existing SentryIssueAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SentryIssueAlert(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SentryIssueAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryIssueAlert.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["actionMatch"] = state ? state.actionMatch : undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["filterMatch"] = state ? state.filterMatch : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["frequency"] = state ? state.frequency : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.actionMatch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actionMatch'");
            }
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.conditions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'conditions'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            resourceInputs["actionMatch"] = args ? args.actionMatch : undefined;
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["filterMatch"] = args ? args.filterMatch : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentryIssueAlert.__pulumiType, name, resourceInputs, opts);
    }
}
exports.SentryIssueAlert = SentryIssueAlert;
/** @internal */
SentryIssueAlert.__pulumiType = 'sentry:index/sentryIssueAlert:SentryIssueAlert';
//# sourceMappingURL=sentryIssueAlert.js.map