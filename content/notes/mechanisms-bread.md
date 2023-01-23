---
title: The Unlikely Convergence of Baking and Mechanism Design
created: 2023-01-23 
type: Blog
---

### _What creating the perfect loaf can teach us about incentivizing the production and distribution of digital goods_

At first glance, bread baking and mechanism design for digital goods don’t have much in common. At one level this is true: a granary loaf is a rather different object to an incentive model. At another level, however, there’s far more convergence than you might think.

In both cases we start with a desired output; the purpose of the exercise is to create something. Crucially, though, both require us to follow a process which combines certain ingredients or building blocks to produce our output. In the case of bread these ingredients at the most basic level are flour, water, yeast, salt and perhaps oil. Now each of these ingredients has a number of variants we can choose to select and combine in different ways. For example we might use white or brown flour, fresh or dry yeast and so on. This gives us a whole host of combinations which in turn will lead to differences in our bread. Our granary loaf may use the same broad ingredients as a french stick, but will use different varieties of each to give rise to a different end product.



<table>
  <tr>
   <td><strong>Ingredient Category</strong>
   </td>
   <td><strong>Variety 1</strong>
   </td>
   <td><strong>Variety 2</strong>
   </td>
   <td><strong>Variety 3</strong>
   </td>
  </tr>
  <tr>
   <td>Flour
   </td>
   <td>White
   </td>
   <td>Brown
   </td>
   <td>Rye
   </td>
  </tr>
  <tr>
   <td>Water
   </td>
   <td>Hard
   </td>
   <td>Medium
   </td>
   <td>Soft
   </td>
  </tr>
  <tr>
   <td>Yeast
   </td>
   <td>Dry
   </td>
   <td>Instant
   </td>
   <td>Fresh
   </td>
  </tr>
  <tr>
   <td>Salt
   </td>
   <td>Table
   </td>
   <td>Sea
   </td>
   <td>Himalayan
   </td>
  </tr>
  <tr>
   <td>Oil
   </td>
   <td>Olive
   </td>
   <td>Sunflower
   </td>
   <td>Vegetable
   </td>
  </tr>
</table>


_This table gives an idea of just how many combinations of ingredients are possible when making a humble loaf of bread._

Now if we’re close to losing you with our choice of metaphor here, bear with us. Our point is that good mechanism design is like good baking, it’s all about selecting the right ingredients and combining them in the right way. And just like in baking, a proper list of ingredients and set of recipes for combining them makes the process a whole lot easier than blindly throwing together whatever you can get your hands on and hoping for the best.

The above approach has been dominant in digital goods ecosystems[^1] for far too long, particularly in areas such as environmental data sharing and open source software where social impact is a major motivator. At best there’s a false binary between monetising production through exclusionary monopoly rights which restrict access, or hoping people will simply act out of the goodness of their hearts. It doesn’t have to be this way.

This initiative will take you through how to find the perfect recipe for creating an economically sustainable digital ecosystem (i.e. any environment where digital goods need to be produced, distributed and used by different actors, from pieces of software to datasets). We’ll outline the types of building blocks–our ingredients–you’ll need and the different variants you’ll have to choose from in each case. We’ll then offer some basic rules for combining them and a breakdown of the archetypal models that exist–our granary loaf and french stick equivalents–to show the main option set you can work with. We’ll finish with some guidance on how the facts of your industry or ecosystem might limit or shape your choices. The end result will be a toolkit which will empower anyone, from database designers to policymakers, to properly engage with the question of the incentives which will be the lifeblood of their project.

Motivation is at the heart of all human behavior, and nowhere is this more true than economics. The production and distribution of economic goods costs time, effort and often money, and this means people must be incentivised to engage in these activities; they must have a reason to carry them out. While these incentives do not necessarily need to be financial, money almost inevitably needs to play a role somewhere. We’ll return to this point in more detail later.

The incentive to produce physical goods in any given market is often fairly simple: I make things so I can sell them for money. In an ideal scenario each of us has access to all the necessary goods and services needed to live a good life, because it’s in someone else’s self-interest to produce them as a source of income. Whatever one thinks of the system overall, this is how capitalist society operates. To extend our baking metaphor yet further with the words of Adam Smith:

_It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own self-interest._[^2]

Digital goods, however, are different. While we’ve taken great pains to stress the similarities between the processes of baking and mechanism design, there are crucial differences between a loaf of bread and a digital good such as a dataset[^3]. This means that the economics of production and distribution when it comes to digital goods are fundamentally more complex and problematic than physical goods, in a number of key ways:



* Once a digital good has been produced, it can be endlessly copied at no extra cost. Digital goods are _nonrival_[^4]_. _This has two implications:


    * 1) The marginal costs of production[^5] of digital goods is essentially zero. This causes one of the fundamental “laws” of neoclassical economics, that efficient, profit-maximizing firms will produce at the quantity where the marginal costs of production = marginal revenue, to break down entirely. Price and production levels of digital goods are inherently more complex.


    * 2) Without interventions if a customer buys a single digital good, for example a copy of a piece of software or a dataset, then they can endlessly copy it and distribute it to everyone they know for free. This presents obvious problems for turning a profit from the sale of digital goods. If I can’t gain adequate income from selling my goods, then my incentives to create them in the first place are significantly undermined.
* While marginal costs of production are close to zero, digital goods can have significant fixed costs of production. 
    * Goods such as pieces of software often require significant research and development spending to produce a working final product. Similarly, creating aggregated and integrated datasets from diverse pieces of data can be a painstaking process.  
* Aggregation also means that digital goods often have hyper complex value-chains. In many cases it’s only at the aggregation stage that significant value is created. For example compiling thousands if not millions of pieces of climate emissions data into a single dataset is what generates value for end users seeking insights into their emissions.
    * Not only this, but each piece of data can have a different supplier, who also needs a reason to supply their part of the final dataset.
* Incentives (at least according to orthodox economics) are a matter of cost-benefit analysis. At the most basic level rational agents will do something such as produce a good if there is a net benefit to doing so i.e. the benefits outweigh the costs (including opportunity costs[^6]). If the net benefits to wider society of producing a good outweigh the net benefit to private producers, we get market failure - the good will be underproduced versus the socially optimal level. 


    * The unique traits of digital goods listed above mean they’re particularly susceptible to market failures. People can’t produce digital goods and sell them in the same way as other goods, and so Adam Smith’s parable of the baker breaks down.
    * Even in cases of private benefit, these can be subtle and not apparent to key decision-makers (e.g. efficiency gains in ways that aren't apparent upfront), meaning there’s still a disinclination to invest. They might also take the form of industry wide benefits (e.g. from innovation potential), which are hindered by the dynamics of collective action problems[^7].
So, what does the fact that data is fundamentally different from bread dough mean? It means that creating the right mechanisms to ensure data is produced and distributed at optimal levels for sustained periods of time is hard. Somewhat uniquely hard in fact. You don’t need many special lessons on how to run a bakery versus another type of business in the real economy -  the core principles are the same. Not so for the digital economy. This is why organizations such as the European Commission are rarely directly involved in funding bakeries, but they are involved in databases.

It being so hard to incentivize adequate production and distribution leads to lots of struggle. Databases and pieces of software disappear over time as funding runs out, or have repeated sustainability crises. People funding or building ecosystems for digital goods production often create things which are fundamentally unsustainable, particularly if there are multiple stakeholders whose participation must be incentivised for the ecosystem to survive. In response, the standard models of fees and subscriptions relied on for financial sustainability mean key data sources become monopolized and very expensive. This limits the potentially vast social benefits from wider access. 

This is no-one's fault. The venn diagram of technology engineers with economics degrees is fairly small. To the person with a hammer everything looks like a nail, and to the person with a background in computer science everything looks like a technology problem. Even policymakers who _have_ studied economics are often tripped up by the fundamental differences between digital and physical goods. Despite the digital world being so central to modern society, the unique economics underpinning it–what we’re calling _diginomics_–still hasn’t made it into mainstream education. We’re here to change that. 

_Register for our newsletter to keep up to date with the project. Our next post will outline the building blocks of proper mechanism design, and begin advising on how they can be combined._


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     We’re using this as a catch-all term for environments where stakeholders come together to produce, share and use digital goods such as pieces of software or datasets. These ecosystems could be anything from open source software projects to supply-chain data sharing initiatives.

[^2]:
    Adam Smith, An Inquiry into the Nature & Causes of the Wealth of Nations, Vol 1 (1776)

[^3]:
     We’re aware that our main use of the analogy would see the incentive model which underpins the creation of the dataset as the equivalent to the loaf of bread, so we hope you’ll excuse us for stretching the metaphor a little.

[^4]:

     This means that one person using the good doesn’t reduce it for others. If I eat the bread you can’t also eat it, but if I use a piece of data you can use it also.

[^5]:

     The cost of producing one extra unit of a good.

[^6]:

     Opportunity costs are the other options for spending your time and resources passed up.

[^7]:

    [ https://www.e-education.psu.edu/geog30/node/342](https://www.e-education.psu.edu/geog30/node/342)
