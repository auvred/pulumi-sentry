"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryOrganization = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * Sentry Organization resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create an organization
 * const _default = new sentry.SentryOrganization("default", {
 *     agreeTerms: true,
 *     slug: "my-organization",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization slug from the URL:
 *
 * https://sentry.io/organizations/[org-slug]/issues/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryOrganization:SentryOrganization default org-slug
 * ```
 */
class SentryOrganization extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SentryOrganization(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SentryOrganization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryOrganization.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["agreeTerms"] = state ? state.agreeTerms : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.agreeTerms === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agreeTerms'");
            }
            resourceInputs["agreeTerms"] = args ? args.agreeTerms : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["internalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentryOrganization.__pulumiType, name, resourceInputs, opts);
    }
}
exports.SentryOrganization = SentryOrganization;
/** @internal */
SentryOrganization.__pulumiType = 'sentry:index/sentryOrganization:SentryOrganization';
//# sourceMappingURL=sentryOrganization.js.map