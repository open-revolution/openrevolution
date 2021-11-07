---
title: "Matrix and Element: a case study of funding an open protocol for real time chat"
date: 2021-11-07
author: rufuspollock
---

[Matrix][] is a distributed comms protocol for real-time chat that looks like [it is taking off][ann].

This is great to see as we've been waiting "forever" for an open decentralized chat system that was better than IRC (anyone remember XMPP and jabber from the early 2ks?). Plus, for anyone open-oriented, the whole Slack affair gives us nightmares: everyone jumping on a completely proprietary bandwagon whilst a few of us remain-ers were shouting "don't do it, IRC is open and it works (and the UX isn't *that* bad ...)".[^1]

Also Matrix have done sensible things like:

* having an open core model (with proprietary enterprise services)
* having a dedicated services team from the get-go (called New Vector) -- who seem to run (almost) the entire matrix show
* renaming the core app from [Riot to Element][rename] (how corp/gov friendly was Riot, "Hey, Minister we should install this cool new messaging app, it's called, erm, 'Riot'" ...)

[Matrix]: https://matrix.org/
[ann]: https://element.io/blog/element-raises-30m-as-matrix-explodes/
[rename]: https://element.io/blog/the-world-is-changing/

[^1]: An example of how tough it has been to get groups to use an open chat alternative: just a years or so ago a really decent group of open-dedicated people tried to switch off Slack to mattermost and then gave up after 4 months and went back to Slack because of a) UX b) everyone was already "on slack". So it's like, "yes, finally, a mature open alternative to Slack etc"!

This post though isn't about the product or the protocol.[^2] Instead, this post is about the mundane but central question of: **how did this stuff get funded? How, did it get to critical mass and who was behind that?**

After all, chat has strong network effects, so if you want to break out of the geek-ghetto (e.g. IRC) and go mainstream you need high quality user experience at all levels (e.g. UI, latency, x-platform and x-device support). This means that to build a viable Slack alternative you need substantial level of investment. And the issues of chat are similar to that for many "decentralized" (and open) initiatives -- many of which have failed to get adequate product quality and critical mass.

[^2]: One aside: much like SGML which had to wait a decade for takeoff (as the web), it looks like a lot of "decentralized" stuff that was cool in the early-mid 2000s is finally taking off 15y later (though too much is still encased in blockchain BS).

This is an important question for the [Open Revolution][] because a) we want all our core protocols and software to become open b) we need a sustainable way to fund that. Thus, Matrix (and Element) are a potential exemplar of what's possible and how we can do this (cf also [Symphony](https://symphony.com/) which I wrote about in the Open Revolution book which was financial services only).

[Open Revolution]: /

## How is Matrix Funded?

The short answer of how Matrix (and ~~New Vector~~ Element[^3]) are funded is as follows:

[^3]: New Vector the company behind Matrix [renamed themselves and the their apps to Element in 2020][rename]

* Incubated inside a large multinational Amdocs (27k employees, billions in revenue). Amdocs was already doing a lot of professional services / white label product on VOIP and IM for telcos. My guess [from the numbers](#faq-entry-on-funding) is that funding was running at $1m+ a year for the internal team at the point funding was cut off in 2017
* Spun out / pushed out the door in 2017 and became independent company New Vector (and Matrix non-profit): looks like Amdocs had had enough being sole funder and also thought enough traction to garner support (they were right). At this point, newly independent team [solicit donations and get active on professional services](https://matrix.org/blog/2017/07/07/a-call-to-arms-supporting-matrix).
* 2018: $5m of semi-philanthropic funding for core protocol from a another company benefitting from the first round of the blockchain goldrush. Note they also sought "community funding" in 2017 and as of 2021 [their Patreon is doing 6k a month](https://www.patreon.com/matrixdotorg) which is very respectable -- but would barely pay for one competent full time dev. So suspect that the community support is more about the warm feeling and involvement than actual funding.
* VC funding: from 2019-2021 raise ~$50m ($8.5m in 2019, $4.8m in 2020 then another $30m in July 2021). Clearly gaining traction as the [technopoly][] backlash begins.

[technopoly]: /technopoly/

In addition to the external investment, Element/New Vector look to be running a very effective open-core and complementary professional services model:

* Professional services: more and more orgs and especially governments are looking to run their own self-hosted chat system as they become wary of handing over all that sensitive data to some silicon valley corp. Have French gov as a validation user early on (2018) is valuable. I imagine this work has been substantial and high value.
* Open core: New Vector are rolling out a stack of "enterprise management services" i.e. their stack for hosting and running a matrix system. Pricing is here https://element.io/enterprise/pricing and suggests $3 / MAU or $4 / MAU for full enterprise plan (and $0.5 per user per bridge). Minimum seats are 250 for self-hosted so you can easily imagine deals here in the $10ks a month or even higher.

So to answer the question: where did money come from?

**Essential early stage funding to get to lift off (2014-2017)** came from the parent company who funded this to the tune of high 100ks to low millions (likely reason being complementarity to other work they were doing)

**Transition (2017-2018)** once spun out there was professional services plus community support. Crucially, they were already at a decent critical mass with major corporate users. There was also key early semi-philanthropic support $5m at height of first blockchain mania (note this amount is more than any product sponsorship I've seen in my time in civic tech philanthropic fundraising)

**Acceleration (2019-present)** self-funding from professional services and open-core (their enterprise product) plus some VC (~$45m by late 2021 - though note they probably did not even "need" the $30m round in 2021 -- the money was probably just so cheap that they couldn't refuse![^4]).

[^4]: "Speaking candidly, as a company, Element could be self-sufficient at this point if we wanted to, funding basic Matrix and Element development via revenue from EMS hosting, EMS services, and support contracts for nation-scale deployments such as France and Germany." from https://element.io/blog/element-raises-30m-as-matrix-explodes/

## Appendix

### Asides

Interesting unresolved questions:

* Does Amdocs (the multinational) still own shares in New Vector?
* Ditto for status.im (or was status.im investment purely "altruistic" and fueled by the blockchain ponzi

### Timeline

* 2021: Series B $30m - https://element.io/blog/element-raises-30m-as-matrix-explodes/
* 2020: May Series A+ Auttomatic $4.6m https://techcrunch.com/2020/05/21/automattic-pumps-4-6m-into-new-vector-to-help-grow-matrix-an-open-decentralized-comms-ecosystem/
* 2019: October $8.5m series A https://techcrunch.com/2019/10/10/new-vector-scores-8-5m-to-plug-more-users-into-its-open-decentralized-messaging-matrix/
* 2018: $5m from status.im in matrix-org https://matrix.org/blog/2018/01/29/status-partners-up-with-new-vector-fueling-decentralised-comms-and-the-matrix-ecosystem
  > We're delighted to announce that our friends at Status have made a major strategic investment ($5M) in New Vector: the company which currently employs most of the Matrix.org core team.  This means that we now have the financial backing to let us focus entirely on improving the Matrix ecosystem and getting the protocol out of beta… and beyond!!

  * This also allows them to incorporate the non-profit to own the protocol (Matrix)
* 2017: New Vector incorporated (probably with enough professional services to self develop)

  > In July 2017, Amdocs considered the project to be sufficiently successful that it could now self-support and so stopped funding. [from FAQ - see below]

* 2014-2017: incubated within Amdocs (did they spin it out for free or take a stake?). Founders had previously been building VOIP and messaging services for telco clients.

### FAQ entry on funding

https://matrix.org/faq/#how-is-matrixorg-funded

> Matrix.org is currently funded by the community, through a combination of community support (via Patreon, Liberapay, Bitcoin and Ethereum), corporate sponsorship, and grant funding.
>
> Current Elliptic-level supporters on Patreon and corporate sponsors can be found on our supporters page.
>
> ...
>
> For the first three years of Matrix's development (2014-2017), most of the core contributors worked for Amdocs, who paid for them to work fulltime on Matrix. In July 2017, Amdocs considered the project to be sufficiently successful that it could now self-support and so stopped funding. The majority of the core team is now employed by Element, an independent company set up to hire the team and support Matrix's development. Other contributors are funded by their own employers or donate their own time to the project.

More background context in https://matrix.org/blog/2017/07/07/a-call-to-arms-supporting-matrix

> As many people know, Matrix.org development has historically been exclusively and very generously sponsored by a large multinational telecoms infrastructure company for whom most of the core team once built telco messaging apps.  However, despite the project progressing better than ever (more on that later), we have just had our funding dramatically cut by >60%. [Update: as of Aug 2017 it is effectively cut entirely, with enough $ left over to cover until end of October.]

This was significant funding as ~11 highly competents devs (so well over $1m a year in funding I would guesstimate):

> So we now find ourselves in the situation that despite the project looking better than ever and having a tonne of amazing stuff in the pipeline, we are suddenly missing the funding to keep the core team working on it.  And the team is quite sizeable - reflecting the ambition and size of Matrix: right now we have effectively 11 people working specifically on Matrix itself: 1 on Synapse, 1 on Dendrite, 1 on e2e crypto, 2 on matrix-react-sdk (which powers Riot/Web), 2 on matrix-ios-kit / matrix-ios-sdk, 2 on matrix-android-sdk, 1 on bridges, and me (Matthew) managing the overall project.  (This ignores folks who overlap the team who are working specifically on Riot stuff).

### Open source and decentralized (aka open) approach

https://element.io/open-source

> An open source project is pretty much the only way a reliable decentralised, self-hosted, end-to-end encrypted messaging and collaboration app could have been developed. Because decentralised is super-difficult and incredibly time-consuming. It took Matrix five years to get out of beta. An already successful service provider won’t spend that long to develop a decentralised system (and possibly cannibalise its revenue), and VCs tend not to invest that far in advance (although some are now definitely well aware of the benefits - and different requirements - of a decentralised approach).
