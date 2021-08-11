Apple’s [iOS 14.5](https://developer.apple.com/app-store/user-privacy-and-data-use/) represents one of the most significant privacy events in the mobile ecosystem. Devices running iOS 14.5 will ask users if they want to be tracked by any app that relies on 3rd-parties for advertising or measurement. They can say no, and they can change their preferences later, even if they agreed when first prompted.

The change should not be a surprise. As a matter of policy, it is a natural continuation of what privacy regulations have been trending toward: telling users how their data is being used and giving them a choice. Apple itself has been preparing developers for the release for over a year (it even delayed the release to accommodate concerns from the advertising industry) and has provided extensive technical documentation to prepare for the change.

And, yet, the digital advertising industry, which has relied on mobile marketing as a cornerstone of its marketing strategy, remains unprepared.

The crux of the problem is that the industry remains dependent on sending data to 3rd-parties, even as that becomes less and less viable as a strategy in the privacy era -- and until publishers and advertisers learn to capture data in-house as you, the app vendor (the 1st-party to your users), the effectiveness of their campaigns and measurements will continue to erode.

## The death of the IDFA (and tracking on iOS devices)

Every mobile Apple device has a unique advertising ID called the IDFA. It makes it possible to identify a device (and, by extension, its user) to display tailored advertisements.

Advertisers use it extensively to track individuals. They do this by collecting demographic and behavioral profiles for a given IDFA and then sharing them with 3rd-parties who use the data to enhance how they segment and target users.

This has been happening without users knowing or consenting, but Apple is changing that with its new AppTrackingTransparency (ATT) framework.

Starting with iOS 14.5, an app cannot track a user without first asking for consent. Apple [defines tracking](https://developer.apple.com/app-store/user-privacy-and-data-use/) as "the act of linking user or device data collected from your app with user or device data collected from other companies’ apps, websites, or offline properties for targeted advertising or advertising measurement purposes."

This is a broad definition. It encompasses everything from advertisers to analytics to marketing attribution. And for tracking to continue, an individual must choose to be tracked. Even the most generous opt-in figures show drastic reductions.

Apple’s intended effect is to significantly curtail this activity. However, in essence it seems like Apple is implementing GDPR in its original intent.

<div className="right">
    <img src="/img/blog/ios-145-ask.png" alt="ask" />
</div>

## What does this mean for advertisers that rely on the IDFA?

If a user refuses to allow tracking in an app, none of their data can be shared with a 3rd-party (except for very limited security and fraud purposes).

This severely reduces the usefulness of mobile measurement partners (MMPs), who can now only see a fraction of your in-app mobile users. And for targeting and measurement goals that need both the advertiser and publisher to have consent, only data sampling will work.

If a mobile user refuses to consent on the web, event measurement is also deeply narrowed. Additionally, attribution events -- e.g., tying a purchase to a user who came through an ad click -- which are typically attached to a specific individual, must now be delayed so that the individual user cannot be identified.

In other words, trying to track users through 3rd-parties is no longer the way forward for targeted experiences and monetization on iOS.

But imagine asking the user that is likely paying for your App to suggest you want to track the user despite a monetary exchange. Worse, you are a health app or finance app, the problems likely exacerbate.

<div className="right">
    <img src="/img/blog/ios-145-how.png" alt="how" />
</div>

## The rise 1st-party customer data management

If tracking is dying, what should you do instead? Directly manage your relationship with your own users. This means two things: (1) collect the data yourself (instead of first sending it to third-parties) and (2) properly handle consent. Apple is very generous when the app vendor (i.e., advertiser) is the processor itself compared to when data is shared for processing of any kind.

The 1st-party relationship -- directly between you and your users -- is privileged. There are no platform constraints on the data that you collect yourself, although privacy regulations like the GDPR and CPRA still require consent for specific uses and types of data.

To do this, you need to collect, manage, analyze, and share customer data yourself in your warehouse. Warehouse data can capture consent across platforms and even allow advertisers to decide how to share data. More critically you can analyze the data that you have captured, and only share what users consent to, allowing you the best of both worlds -- understanding your users and engaging 3rd-parties as permitted.

Put concretely, when a user downloads your app you have always had two options for what to do with user data. You could send the data to trackers or you could send the data to your own warehouse. Until recently, the convenience of the first option has made it highly prevalent; with Apple's decision, the scales have tipped to 1st-party capture and management.

But few companies can build that warehouse capability themselves without complete knowledge across platforms and global laws, and even fewer are equipped to properly manage consent so that they can appropriately share data with advertisers. The complexity of data management is increasing. Some users will only agree to data tracking, others will agree to sharing their profiles, others still will strictly reject all of it. This information must be processed in a compliant and automated manner in order to continue to market successfully. For each social media campaign, for example, it will be necessary that data is only shared by users who have given positive consent.

## Measuring advertising effectiveness on iOS after the IDFA

To replace the IDFA for measuring the effectiveness of advertising campaigns, Apple provides advertisers and publishers with its SKAdNetwork API, which prioritizes respecting user privacy. It works by Apple reporting a cryptographically signed notification through the API, which contains the campaign ID and possible conversion values, but no user-specific or device-specific data. This means that it is still possible to measure the advertising effectiveness of mobile campaigns in the Apple ecosystem. However, Apple's SKAdNetwork is only used by a few advertisers even today, and will require changes within the industry that is deep rooted in tracking the users across Apps.

So, instead of giving your valuable customer data to others, you are better off handling the data yourself. To do that, you will need a 1st-party data warehouse that manages and analyzes user and campaign data in your own infrastructure. And, if it is designed correctly, it will allow you to adjust to technology and policy changes -- like Privacy Shield breaking in Europe -- with relatively little difficulty.

However, building it yourself is a costly proposition both in terms of engineering effort and time to market. Therefore, the recommendation is obvious: For the construction and operation of such customer data lakes, rely on SaaS providers (but not co-processors -- since they are 3rd-parties), who will install the software in the your infrastructure so you can collect user data as the 1st-party that you are, while having automated processes for critical functions like data governance, marketing and product analytics, and privacy operations.

Not only does this return your control over such valuable data, it lets you focus your efforts on the core functions of your business.

## About Blotout

Blotout gives app and web developers their own integrated data warehouse capability that reduces reliance on any 3rd-parties where applicable. It lets them collect their own customers’ data in-house and, based on consent that is managed on the server, share it with appropriate 3rd-parties. More critically, every piece of data has privacy operations built-in so PII management, data governance, data sharing alarms, etc. are all there to ensure data never leaks.

As regulations change (e.g., the recently-adopted CPRA that equates sharing and selling of data), the platform evolves so that your app or site can be compliant in a fraction of the typical development time.

After all, it has always been your responsibility to ensure that your customers’ data is managed, consented, and governed appropriately. Blotout returns that control to you by letting you manage it yourself with a fully-featured platform, instead of depending on proxies and 3rd-parties.

Talk to us via [Slack](https://join.slack.com/t/blotout-workspace/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ) or via [email](mailto:sales@blotout.io).

## Use cases

### Use Case 1: Delayed install/conversion event management for Apple ATT in your own warehouse

With Blotout, you can automatically access the SKAdNetwork Postback and manage app Transparency preferences. You collect data as a 1st-party and then decide when to share (or delay) events at the server.

To do so, capture the SKAdNetwork postback for the campaign so you understand which campaigns are performing and which are not. You can then optimize campaigns directly via providers for campaigns (instead of going through MMPs). It is also a good habit to pull campaign data from advertising companies so you can analyze LTV in-house.

For users that agree to tracking (and hence the IDFA), you can store the IDFA at the server. Still delay the install or conversion event, per Apple’s recommendation, but you can then share it directly with your campaign providers without needing an MMP. If a user eventually opts out, you remove the correlation and send the opt-out to your providers.

### Use Case 2: Use the same data to replace your analytics provider and save

The same service lets you capture your own analytics in-house and provides retention, funnel, segmentation, attribution and other metrics within the same system.

With an in-house event-capture system, providers like Firebase, Amplitude, and Mixpanel become redundant. This lets you lower your costs and stop sending customer data to 3rd-parties (which requires consent).

Not only is this safer from a privacy perspective, it lets you build trust with users because your apps (i.e., iOS health labels) and sites are not being flagged for using trackers.

### Use Case 3: Unify your stack for mobile and web

It is very easy to use the same stack on mobile or the web. This lets you unify your customer base in a single warehouse and correlate events across all of your platforms.

### Use Case 4: Efficiency and cost savings

Capturing user data as a 1st-party lets you see more users and maintain control of that data for your own uses. It is also significantly less expensive than relying on 3rd-parties for those capabilities. As your stack grows, 3rd-parties become increasingly less efficient than having your own warehouse.

We have specifically designed Blotout to be no-code/low-code (reducing your reliance on engineering), highly cost-efficient, and constantly updated (so that as platforms and laws change, you are up-to-date).

### Use Case 5: HIPAA, PCI DSS

Our infra sits in your warehouse while a BAA enables you to continue to be compliant to your necessary regulations out of the box.