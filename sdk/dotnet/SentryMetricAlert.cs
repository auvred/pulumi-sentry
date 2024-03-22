// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Sentry
{
    /// <summary>
    /// Sentry Metric Alert resource.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Sentry = Pulumi.Sentry;
    /// using Sentry = Pulumiverse.Sentry;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var slack = Sentry.GetSentryOrganizationIntegration.Invoke(new()
    ///     {
    ///         Organization = sentry_project.Main.Organization,
    ///         ProviderKey = "slack",
    ///         Name = "Slack Workspace",
    ///     });
    /// 
    ///     var main = new Sentry.SentryMetricAlert("main", new()
    ///     {
    ///         Organization = sentry_project.Main.Organization,
    ///         Project = sentry_project.Main.Id,
    ///         Dataset = "events",
    ///         Query = "",
    ///         Aggregate = "count()",
    ///         TimeWindow = 60,
    ///         ThresholdType = 0,
    ///         ResolveThreshold = 0,
    ///         Triggers = new[]
    ///         {
    ///             new Sentry.Inputs.SentryMetricAlertTriggerArgs
    ///             {
    ///                 Actions = new[]
    ///                 {
    ///                     new Sentry.Inputs.SentryMetricAlertTriggerActionArgs
    ///                     {
    ///                         Type = "email",
    ///                         TargetType = "team",
    ///                         TargetIdentifier = sentry_team.Main.Team_id,
    ///                     },
    ///                 },
    ///                 AlertThreshold = 300,
    ///                 Label = "critical",
    ///                 ThresholdType = 0,
    ///             },
    ///             new Sentry.Inputs.SentryMetricAlertTriggerArgs
    ///             {
    ///                 Actions = new[]
    ///                 {
    ///                     new Sentry.Inputs.SentryMetricAlertTriggerActionArgs
    ///                     {
    ///                         Type = "slack",
    ///                         TargetType = "specific",
    ///                         TargetIdentifier = "#slack-channel",
    ///                         IntegrationId = slack.Apply(getSentryOrganizationIntegrationResult =&gt; getSentryOrganizationIntegrationResult.Id),
    ///                     },
    ///                 },
    ///                 AlertThreshold = 300,
    ///                 Label = "critical",
    ///                 ThresholdType = 0,
    ///             },
    ///             new Sentry.Inputs.SentryMetricAlertTriggerArgs
    ///             {
    ///                 AlertThreshold = 100,
    ///                 Label = "warning",
    ///                 ThresholdType = 0,
    ///             },
    ///         },
    ///     });
    /// 
    /// });
    /// ```
    /// 
    /// ## Import
    /// 
    /// import using the organization, project slugs and rule id from the URLhttps://sentry.io/organizations/[org-slug]/projects/[project-slug]/ https://sentry.io/organizations/[org-slug]/alerts/rules/details/[rule-id]/ or https://sentry.io/organizations/[org-slug]/alerts/metric-rules/[project-slug]/[rule-id]/
    /// 
    /// ```sh
    ///  $ pulumi import sentry:index/sentryMetricAlert:SentryMetricAlert default org-slug/project-slug/rule-id
    /// ```
    /// </summary>
    [SentryResourceType("sentry:index/sentryMetricAlert:SentryMetricAlert")]
    public partial class SentryMetricAlert : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The aggregation criteria to apply
        /// </summary>
        [Output("aggregate")]
        public Output<string> Aggregate { get; private set; } = null!;

        /// <summary>
        /// The Sentry Alert category
        /// </summary>
        [Output("dataset")]
        public Output<string?> Dataset { get; private set; } = null!;

        /// <summary>
        /// Perform Alert rule in a specific environment
        /// </summary>
        [Output("environment")]
        public Output<string> Environment { get; private set; } = null!;

        /// <summary>
        /// The events type of dataset.
        /// </summary>
        [Output("eventTypes")]
        public Output<ImmutableArray<string>> EventTypes { get; private set; } = null!;

        /// <summary>
        /// The internal ID for this metric alert.
        /// </summary>
        [Output("internalId")]
        public Output<string> InternalId { get; private set; } = null!;

        /// <summary>
        /// The metric alert name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The slug of the organization the metric alert belongs to.
        /// </summary>
        [Output("organization")]
        public Output<string> Organization { get; private set; } = null!;

        /// <summary>
        /// Specifies the owner id of this Alert rule
        /// </summary>
        [Output("owner")]
        public Output<string> Owner { get; private set; } = null!;

        /// <summary>
        /// The slug of the project to create the metric alert for.
        /// </summary>
        [Output("project")]
        public Output<string> Project { get; private set; } = null!;

        /// <summary>
        /// The query filter to apply
        /// </summary>
        [Output("query")]
        public Output<string> Query { get; private set; } = null!;

        /// <summary>
        /// The value at which the Alert rule resolves
        /// </summary>
        [Output("resolveThreshold")]
        public Output<double?> ResolveThreshold { get; private set; } = null!;

        /// <summary>
        /// The type of threshold
        /// </summary>
        [Output("thresholdType")]
        public Output<int> ThresholdType { get; private set; } = null!;

        /// <summary>
        /// The period to evaluate the Alert rule in minutes
        /// </summary>
        [Output("timeWindow")]
        public Output<double> TimeWindow { get; private set; } = null!;

        [Output("triggers")]
        public Output<ImmutableArray<Outputs.SentryMetricAlertTrigger>> Triggers { get; private set; } = null!;


        /// <summary>
        /// Create a SentryMetricAlert resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SentryMetricAlert(string name, SentryMetricAlertArgs args, CustomResourceOptions? options = null)
            : base("sentry:index/sentryMetricAlert:SentryMetricAlert", name, args ?? new SentryMetricAlertArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SentryMetricAlert(string name, Input<string> id, SentryMetricAlertState? state = null, CustomResourceOptions? options = null)
            : base("sentry:index/sentryMetricAlert:SentryMetricAlert", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/pulumiverse",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SentryMetricAlert resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SentryMetricAlert Get(string name, Input<string> id, SentryMetricAlertState? state = null, CustomResourceOptions? options = null)
        {
            return new SentryMetricAlert(name, id, state, options);
        }
    }

    public sealed class SentryMetricAlertArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The aggregation criteria to apply
        /// </summary>
        [Input("aggregate", required: true)]
        public Input<string> Aggregate { get; set; } = null!;

        /// <summary>
        /// The Sentry Alert category
        /// </summary>
        [Input("dataset")]
        public Input<string>? Dataset { get; set; }

        /// <summary>
        /// Perform Alert rule in a specific environment
        /// </summary>
        [Input("environment")]
        public Input<string>? Environment { get; set; }

        [Input("eventTypes")]
        private InputList<string>? _eventTypes;

        /// <summary>
        /// The events type of dataset.
        /// </summary>
        public InputList<string> EventTypes
        {
            get => _eventTypes ?? (_eventTypes = new InputList<string>());
            set => _eventTypes = value;
        }

        /// <summary>
        /// The metric alert name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The slug of the organization the metric alert belongs to.
        /// </summary>
        [Input("organization", required: true)]
        public Input<string> Organization { get; set; } = null!;

        /// <summary>
        /// Specifies the owner id of this Alert rule
        /// </summary>
        [Input("owner")]
        public Input<string>? Owner { get; set; }

        /// <summary>
        /// The slug of the project to create the metric alert for.
        /// </summary>
        [Input("project", required: true)]
        public Input<string> Project { get; set; } = null!;

        /// <summary>
        /// The query filter to apply
        /// </summary>
        [Input("query", required: true)]
        public Input<string> Query { get; set; } = null!;

        /// <summary>
        /// The value at which the Alert rule resolves
        /// </summary>
        [Input("resolveThreshold")]
        public Input<double>? ResolveThreshold { get; set; }

        /// <summary>
        /// The type of threshold
        /// </summary>
        [Input("thresholdType", required: true)]
        public Input<int> ThresholdType { get; set; } = null!;

        /// <summary>
        /// The period to evaluate the Alert rule in minutes
        /// </summary>
        [Input("timeWindow", required: true)]
        public Input<double> TimeWindow { get; set; } = null!;

        [Input("triggers", required: true)]
        private InputList<Inputs.SentryMetricAlertTriggerArgs>? _triggers;
        public InputList<Inputs.SentryMetricAlertTriggerArgs> Triggers
        {
            get => _triggers ?? (_triggers = new InputList<Inputs.SentryMetricAlertTriggerArgs>());
            set => _triggers = value;
        }

        public SentryMetricAlertArgs()
        {
        }
        public static new SentryMetricAlertArgs Empty => new SentryMetricAlertArgs();
    }

    public sealed class SentryMetricAlertState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The aggregation criteria to apply
        /// </summary>
        [Input("aggregate")]
        public Input<string>? Aggregate { get; set; }

        /// <summary>
        /// The Sentry Alert category
        /// </summary>
        [Input("dataset")]
        public Input<string>? Dataset { get; set; }

        /// <summary>
        /// Perform Alert rule in a specific environment
        /// </summary>
        [Input("environment")]
        public Input<string>? Environment { get; set; }

        [Input("eventTypes")]
        private InputList<string>? _eventTypes;

        /// <summary>
        /// The events type of dataset.
        /// </summary>
        public InputList<string> EventTypes
        {
            get => _eventTypes ?? (_eventTypes = new InputList<string>());
            set => _eventTypes = value;
        }

        /// <summary>
        /// The internal ID for this metric alert.
        /// </summary>
        [Input("internalId")]
        public Input<string>? InternalId { get; set; }

        /// <summary>
        /// The metric alert name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The slug of the organization the metric alert belongs to.
        /// </summary>
        [Input("organization")]
        public Input<string>? Organization { get; set; }

        /// <summary>
        /// Specifies the owner id of this Alert rule
        /// </summary>
        [Input("owner")]
        public Input<string>? Owner { get; set; }

        /// <summary>
        /// The slug of the project to create the metric alert for.
        /// </summary>
        [Input("project")]
        public Input<string>? Project { get; set; }

        /// <summary>
        /// The query filter to apply
        /// </summary>
        [Input("query")]
        public Input<string>? Query { get; set; }

        /// <summary>
        /// The value at which the Alert rule resolves
        /// </summary>
        [Input("resolveThreshold")]
        public Input<double>? ResolveThreshold { get; set; }

        /// <summary>
        /// The type of threshold
        /// </summary>
        [Input("thresholdType")]
        public Input<int>? ThresholdType { get; set; }

        /// <summary>
        /// The period to evaluate the Alert rule in minutes
        /// </summary>
        [Input("timeWindow")]
        public Input<double>? TimeWindow { get; set; }

        [Input("triggers")]
        private InputList<Inputs.SentryMetricAlertTriggerGetArgs>? _triggers;
        public InputList<Inputs.SentryMetricAlertTriggerGetArgs> Triggers
        {
            get => _triggers ?? (_triggers = new InputList<Inputs.SentryMetricAlertTriggerGetArgs>());
            set => _triggers = value;
        }

        public SentryMetricAlertState()
        {
        }
        public static new SentryMetricAlertState Empty => new SentryMetricAlertState();
    }
}