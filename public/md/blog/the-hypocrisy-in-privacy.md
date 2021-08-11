## Setting Context

It was a huge win for web consumers when Apple took up the cause of protecting user privacy. Since 2017, the company has steadily improved the Intelligent Tracking Prevention (ITP) feature in WebKit, the engine that powers the Safari browser across its devices and operating systems. Other browsers, like Firefox and Brave, have extensive tracking prevention and an astonishing [55% of users](https://datareportal.com/reports/digital-2020-global-digital-overview) globally use ad blockers that take this sort of prevention even further. Reading the times, the team responsible for Chromium — the core of Google’s Chrome browser, which has 65% market share — has itself committed to eliminating third-party (3P) cookies by 2021.

This all seems like a victory for the realization of a privacy-respecting web, and it is. Over the years, the ability for a web page to fetch 3P resources or for scripts to write cookies has been used for ever more intrusive tracking of users, and now visits to seemingly unconnected sites can be used to paint a portrait — accurate or not — of users to target them for advertisements, content, and conversions. Most users are only vaguely aware that this is possible, and yet it has been the backbone of a considerable portion of online monetization.

Until recently, changing the edifice of monetization and tracking seemed like a Herculean task. Regulation, especially the GDPR and CCPA, helped to shift norms around data responsibility, but without a fundamental change in how the web works, it has been hard to see how real privacy could be possible.

That was what made Apple’s commitment to privacy — first with [ITP](https://webkit.org/blog/9521/intelligent-tracking-prevention-2-3/) and now with [iOS 14](https://developer.apple.com/app-store/user-privacy-and-data-use/) — so incredibly exciting: one of modern computing’s dominant platforms had aligned itself with protecting users, even if that meant putting billions of dollars of advertising and other monetization at risk.

It is the same reason why we were so disappointed to discover Apple’s attempts to circumvent tracking prevention on its own website. Our challenge to Apple is simple: be consistent with your principles and continue to lead the way to a privacy-preserving web.

## The end of 3P cookies and the side effects

As the world came to realize the potential abuses of user tracking, particularly after GDPR and especially after Cambridge Analytica, browser platforms like Brave, Firefox, and Apple made no-tracking browsing the default.

No-tracking browsing typically blocks tracking data on 3P domains and/or limits dropping of IDs on 3P domains. The restrictions are gentler if analytics companies use first-party (1P) cookies, even though other fingerprinting methods exist, like IP addresses. As compliance needs mount, it is becoming clearer that publishers will be expected to manage their content and data, and use only that for monetization; anything else will likely be disallowed.

Ad monetization that relies on 3P cookies is automatically impacted across the board. Some players are hoping they can use links or universal IDs, but those techniques will not work: GDPR consent/purpose limitations and now the [CPRA](https://iapp.org/news/a/cpra-top-10-impactful-provisions/) both restrict their use.

Likewise, if you use Google Analytics on your site, even using a 1P Cookie (with a unique ID for your site), chances are that privacy browsers and blockers on Chrome will not allow Google to collect data on your behalf.

## A dirty secret about Apple and Adobe

There are workarounds, however.

A 3P company — e.g., a tracking service — can ask a publisher to allow their analytics service to run as a 1P by adding a [CNAME](https://en.wikipedia.org/wiki/CNAME_record) for the 3P provider. The way it works is that tracker.com would ask example.com to create sub.example.com and map it to tracker.com’s server.

So, why would the adtech or analytics industry not just do that? It is, after all, the change of a single configuration line.

The problem with a CNAME change is that it lets the 3P act and behave like a 1P across the entire domain, directly violating [Apple’s WebKit principles](https://webkit.org/tracking-prevention-policy/):

We treat circumvention of shipping anti-tracking measures with the same seriousness as exploitation of security vulnerabilities.

If a party attempts to circumvent our tracking prevention methods, we may add additional restrictions without prior notice. These restrictions may apply universally; to algorithmically classified targets; or to specific parties engaging in circumvention.

You can imagine our surprise, then, when we learned that Apple’s own websites — apple.com and its subdomains — use securemetrics.apple.com as part of their script called analytics.js to do exactly that.

![image](/img/blog/dev-tools.jpg)
At first sight, it looks like Apple is using its own 1P analytics script to manage consumer data collected in the 1P context — behavior that is expected from all publishers.

However, if you look under the hood, what you find is that securemetrics.apple.com is actually nothing but a CNAME hack for Adobe Analytics.

![image](/img/blog/terminal1.jpg)
That subdomain is mapped to a CNAME to appleglobal.102.112.207.net, which is not a 1P service that Apple is running, but is instead a service, elsewhere, that is collecting consumer data on Apple’s behalf.

![image](/img/blog/terminal2.jpg)
Let’s dig a little deeper. Once you lookup 207.net via whois, you can see that the certificate is registered to Adobe.

Digging deeper, when you lookup 207.net via whois, you can see that the certificate is indeed registered to Adobe.

Adobe’s approach to CNAME changes — a direct violation of Apple’s policy quoted above — can be read [here](https://docs.adobe.com/content/help/en/core-services/interface/ec-cookies/cookies-first-party.html). It is an open invitation to publishers to let Adobe freely act as a 1P on their domains, giving it the ability to track users across domains as it chooses.

In other words, Adobe is openly asking publishers to work around the policies enabled by platforms like Apple — betraying consumer trust to keep business going as usual.

## Why this is a big deal

![image](/img/blog/dev-tools2.jpg)
Apple is not just letting Adobe run a workaround on apple.com, they are giving Adobe the ability to track it’s users across domains and they have effectively granted Adobe the power to override Apple’s own 1P cookies for apple.com.

This entails a rather serious security vulnerability where the third party — Adobe in this case — could conduct malicious activity, since a subdomain can override the primary apple.com domain cookie and the relevant script is fully operated out of the Adobe Experience Manager.

We are not suggesting that Adobe is doing any of this, but the fact that they have the actual power to do so is incredibly disconcerting, especially on a platform as significant as apple.com.

Others, like [Segment](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/custom-proxy/), which was recently [acquired](https://segment.com/blog/segment-and-twilio/) by Twilio, are creating the same risks to keep doing business as usual, instead of advancing to the privacy first expectations of the present moment. User data belongs to the consumer, and that needs to be respected.

## Oh, the hypocrisy

Apple made it clear that it was willing to enact and enforce its tracking prevention philosophy, regardless of the cost, in order to protect users. But when it came to its own site, apple.com, it was willing to bend the rules, and opened a security hole in the process.

So, while advertising technology players continue to suffer losses on Safari, Adobe is [openly](https://docs.adobe.com/content/help/en/id-service/using/reference/analytics-reference/cname.html) advertising an approach to circumventing tracking prevention in order to protect their Experience Manager product, while its security team gives a blind eye to the risks this poses for publishers.

While we do not ascribe malicious intent to Adobe or Apple, it is still unfair and deeply disappointing to use different standards for everyone else while overlooking workarounds and vulnerabilities in your own properties.

The example it sets is a poor one, and undermines the cause of user privacy. Apple and Adobe can do better than a hack.

## What is Blotout?

Our philosophy is that companies should responsibly collect and manage data without invading consumer privacy — reducing the need for co-processors and bringing data practices in line with the expectations of users, platforms, and regulations.

We are a 1P Analytics & Ad Tech platform that lets publishers and advertising companies leapfrog to 2022 by adopting 1P strategies that retain and advance critical capabilities.

Our serverless product is called SmartEdge and it allows analytics and automation at the edge (web/mobile/native). Our 1P container is a managed service for publishers that provides analytics, automation, and compliance; it is self-served via Docker.

Talk to us at sales@blotout.io.