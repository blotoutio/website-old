## Executive Summary

When BeSmitten wanted to scale its operations across Asia it faced significant engineering challenges. Fragmented data sources from 3rd party vendors were making it difficult to see a full picture. The only solution forward, so they thought, was hiring additional engineers and to begin building a data lake solution from scratch. This would have taken them many months with added year-over-year costs. They found the fastest go to market solution to be Blotout’s no code cloud prem data as a service platform. It saved them over $500K in engineering costs while improving visibility into user journeys by over 21%, allowing them to allocate resources to grow their company in new ways. Additionally, they were able to unify data across multiple channels while preserving privacy and maintaining compliance. This advanced their development timelines by over six months, letting them accelerate their expansion into new markets. As a result, BeSmitten is getting better data, saving costs, saving time, and growing their company like they never thought possible.

## About BeSmitten

BeSmitten is one of the fastest growing luxury dating companies in Asia and runs properties with over 30,000 users in Malaysia, Singapore, and other global regions. The company uses a sophisticated marketing mix of  lead generation campaigns across a variety of channels in order to increase brand awareness and drive top of funnel activity across different geographies. The business also uses brand ambassadors to convert clients providing an interesting mix of online lead generation strategies.

## Three Key Challenges

### Data fragmentation

Because BeSmitten did not have its own data engineering capability, it had been forced to rely on third-party vendors to collect, manage, and orchestrate their customer data. The data loss (because of ad blockers) meant they were getting an incomplete picture and the siloing of data across multiple vendors made it exceptionally difficult to pull together a comprehensive view of their data. The results were significant delays and lost revenue.

### Advertising effectiveness

BeSmitten uses a combination of organic search results, paid search results, email campaigns, and databases along with direct sales via human interaction. A meaningful share of their users are on platforms (such as iOS) that have eliminated third-party cookies, and so third-party platforms that use tracking to identify users are of limited effectiveness (also, as described below, privacy implications make them additionally problematic). This meant that their marketing teams were collecting less data and of lower quality, which reduced the quality of their campaign and conversion event measurement. With this data gap, their ability to acquire new users and improve engagement with existing subscribers was being hindered.

### Ensuring user privacy

Providing its users with privacy is a bedrock value for BeSmitten. Due to this commitment not to share customer data with other parties, their options for working with customer data were either not viable (e.g., third-party measurement) or prohibitively expensive (e.g., developing a full data engineering stack in-house). Further, the multi-geographic nature of the business meant that data consent and compliance would need to be managed in a sustainable way as business growth was taking off.

## Root cause analysis: Engineering is expensive and architecting a modern data warehouse takes time and money

The cost of hiring data engineers and data scientists has and will continue to increase dramatically around the globe as digitization takes shape.

Salaries across the globe, especially in Singapore, have become very competitive and finding talented engineers that can architect solutions to measure KPIs and build EL pipelines is exceptionally time-consuming. BeSmitten was already scaling up in multiple countries and risked spreading resources too thin as it grew.

Like many companies, they realized that data engineering as a service was finally viable for everyday engineering work; especially since data warehouse no code solutions are becoming available and the enterprise teams can focus on building applications that create value to their customers where efforts count the most.

![image](/img/blog/besmitten-1.png)

## Secondary cause analysis: Death of third-party cookies and consumer privacy habits

The rise in privacy awareness among consumers is leading to the end of predatory marketing and retargeting methods.

As awareness takes hold, brands are being forced to adopt privacy-first practices, which are quickly becoming mainstream. Declining third-party cookie support and robust ad blocking are driving companies to adopt more organic practices as well as to collect data in a privacy-centric, first-party way. If not, customers will ultimately find other companies to do business with. As an indicative measure, when prompted, only 6% of iOS 14.5 users have opted in to being tracked.

![image](/img/blog/besmitten-2.png)

## Solution

### Unifying BeSmitten’s data with Blotout’s cloud prem solution

![image](/img/blog/besmitten-3.png)

BeSmitten is using Blotout as the source of truth by bringing their data sources such as MongoDB, Stripe, Mailgun, Google Ads together; from the B2C channel databases (offline) to email to advertising and finally typing it up with Blotout Native SDK.

This enables BeSmitten to sew all of its data together while keeping every site separate even as sales representatives keep selling across countries, enabling a complex metrics system for paying commissions.

## Current Status

### Improving data accuracy

By moving event management and web data management to the Blotout Native SDK, BeSmitten started to manage their own customer data in their own cloud prem. It was accurate but more critically it enabled them to map their customers from their site to their lead generation tables, both online and offline. This allowed them to ensure there were no dropped events; today BeSmitten **collects 21% more customer journey data** in terms of customer journeys on their site vs. Google Analytics.

### Pipelines

BeSmitten is actively using Blotout’s data pipeline solution to bring together their fragmented data sources like never before.

![image](/img/blog/besmitten-4.png)

### Refining the company machine

Next steps are for BeSmitten to import data using Blotout’s seamless Extract, Transform and Load (ETL)  process for every touch point to fully unify their data.  This way they can begin to form a complete company picture in one place. BeSmitten will now be able to properly attribute subscribers, transactions and many more events.

![image](/img/blog/besmitten-5.png)

### Measuring KPIs

Once data settled, and started to look consistent across all data channels, Blotout unified event data across all channels using transformations creating a unified time series event stream. Likely wise a user profile object that was consistent across all lead gen tables was generated and made consistent to uniquely identify users. This enabled BeSmitten to be able to write custom queries that were fashioned based on their executive KPI document. By enabling a unified event and a consistent identity resolution system, BeSmitten is now able to change their KPI definitions on the fly and enables them to get retroactive KPI results helping them change how they pay out  commissions.

![image](/img/blog/besmitten-6.png)

### Customer Journey measurement

Their funnel building from various sources is leading to a unified vision of their data and campaigns. This will help BeSmitten by refining, reallocating or reducing marketing spend, customer journeys, and enhancing the customer experience.

![image](/img/blog/besmitten-7.png)

### Custom Charting

BeSmitten is now able to produce custom charting to Drill Down into specific areas of interest,as well as see data in ways that are not available or accessible without significant cost and engineering.

![image](/img/blog/besmitten-8.png)

## Next steps and future

### New Opportunities

BeSmitten is pivoting with a new approach to consumers that will open new doors with their sales representatives, as well as continued expansion.. This will further add complexity to how they measure KPIs and commissions. With Blotout they are set up for success moving forward.

### KPIs

They will also begin measuring KPIs that were once out of reach to accurately measure.

- **Multi-touch attribution**: What is the true customer journey across channels
- **Multi-device attribution**: Do customers change how they reach out
- **CPC**: Cost per click on a first party basis
- **CNU**: Cost per new user; average cost of driving new user
- **CRU**: Cost per returning user; average cost of a returning user
- **Loyalty Index**: % of users that came back for the first time organically and were driven - by advertising
- **Veracity Report**: Reports that show campaign origination against the organic conversion - report
- **ROAS**: Return on Ad Spend
- **(e)CPM**: Cost per 1000 impressions/ eCPM  effective cost per 1000 impressions.
- **LTV**: Lifetime Value of customers over time

## Conclusion

BeSmitten has found simple answers to their complex technical challenge with Blotout’s no-code solutions.

- A fully deployed data lake with low to no coding and minimal implementation time
- Measure anything as all event and user profiles are connected and normalized over time
- A reliable infrastructure and end-to-end solutions for their entire company data they don't have to maintain

With the Blotout team's ongoing support they achieved

1. A savings of $500,000 per year for engineering and system maintenance costs
2. Visibility increased by 21% and a clearer understanding of KPIs
3. No trackers are used anymore and all measurements keep consumer privacy intact
4. Custom charting for KPIs
5. All this while accessing new market opportunities that were once not possible

### Additional Benefits from Blotout Platform BeSmitten benefits from:

- Increased Traffic Visibility
- Accurate and Increase Conversion Events
- Accurate or Reduced Marketing Spend
- Increased Profitability
- Reduce Wasted Time
- Eliminate Complex Engineering
- Consolidated Analytics
- Substantial Time Savings
- New Market Opportunities
- Owning Their Customer Data
- Increased Website Performance

## Contact Us:

Email support: [sales@blotout.io](mailto:sales@blotout.io)

Slack channel: <a href='https://blotout-shared.slack.com/join/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ#/shared-invite/email?utm_source=hubspot&utm_medium=email&utm_campaign=general case study general &utm_term=private-cdp&utm_content=cv_cdp_bottom&utm_id=private-cdp3266358924' target='_blank'>blotout-shared.slack.com</a>
