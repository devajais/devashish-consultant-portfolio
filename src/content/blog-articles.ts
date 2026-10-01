export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: ArticleBlock[];
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'code'; lang: string; code: string };

export const blogArticles: BlogArticle[] = [
  {
    slug: 'your-first-tech-hire',
    title: 'Your First Tech Hire: Lessons from a Startup CTO',
    description:
      'A Fractional CTO on making your first engineering hire: who to look for, how to interview, how to onboard, and the expensive mistakes founders make.',
    excerpt:
      "Your first engineer sets the technical culture for everyone who follows. Here is how I coach non-technical founders to get that hire right the first time.",
    date: '2025-02-11',
    readingTime: '8 min read',
    tags: ['Hiring', 'Startups', 'Engineering', 'Leadership'],
    body: [
      {
        type: 'p',
        text: "I have sat on both sides of this table. I have been the first technical person a founder bet on, and as a Fractional CTO I have helped non-technical founders make that same bet on someone else. It is one of the highest-leverage decisions you will make, and it is also one of the easiest to get quietly wrong in a way you only notice eighteen months later when the codebase is a mess and the person you hired has stopped growing.",
      },
      {
        type: 'p',
        text: "This is not a generic hiring guide. This is what I actually tell founders when they call me in a panic because a promising candidate wants an answer by Friday.",
      },
      {
        type: 'h2',
        text: 'Your first hire is a culture decision, not just a skills decision',
      },
      {
        type: 'p',
        text: "When we were building Glimpass, the early technical choices we made did not just shape the product, they shaped how everyone who joined later thought about the work. Your first engineer becomes the reference implementation for your whole team. The way they write code, comment, review pull requests, and talk about tradeoffs becomes the unspoken standard. If they cut corners, everyone after them will assume corners are fine. If they over-engineer, you will be paying for abstractions nobody needed for years.",
      },
      {
        type: 'p',
        text: "So before you look at any resume, be honest about what stage you are in. At the idea-to-MVP stage you do not need a distributed systems specialist. You need someone who can ship a working product across the full stack, talk to you like a human, and make good enough decisions fast.",
      },
      {
        type: 'quote',
        text: 'Hire for the eighteen months in front of you, not the company you hope to be in five years. You can grow into the second person. You cannot un-hire the first one cheaply.',
      },
      {
        type: 'h2',
        text: 'What to actually look for',
      },
      {
        type: 'p',
        text: "For a first hire at an early-stage startup, I weight these traits in roughly this order:",
      },
      {
        type: 'ul',
        items: [
          'Breadth over depth. Someone who can touch the frontend, the backend, and the deployment pipeline is worth more right now than a specialist. When we started markAIble, being able to move across React, Node, Docker, and GCP without waiting on anyone else was what let us move fast.',
          'Comfort with ambiguity. Early requirements change weekly. You need someone who is energized by that, not someone who freezes without a detailed spec.',
          "Judgment about when to be sloppy. The best early engineers know when a hack is fine and when it will haunt you. That is a skill, not a personality flaw.",
          'Communication with non-technical people. You are non-technical. If they cannot explain a tradeoff to you in plain language, you are flying blind.',
          'Genuine curiosity about the problem, not just the tech. People who care about the customer make better product decisions when you are not in the room.',
        ],
      },
      {
        type: 'p',
        text: "Notice what is not at the top of that list: the specific framework they know, the prestige of their last employer, or how many algorithms they can recite. Those matter far less than founders assume.",
      },
      {
        type: 'h2',
        text: 'How to interview when you cannot evaluate code yourself',
      },
      {
        type: 'p',
        text: "This is the part non-technical founders dread, and it is fixable. You do not need to read code to run a good technical interview. You need to test judgment, and judgment shows up in conversation.",
      },
      {
        type: 'ol',
        items: [
          "Give them a real problem from your business and ask how they would approach it. Not a puzzle, an actual thing you are trying to build. Listen for whether they ask about users and constraints before jumping to a solution.",
          'Ask them to explain a past project to you as if you were a customer. If they drown you in jargon, that is how they will communicate on your team. If they make it clear and interesting, that is gold.',
          'Ask what they would build first and what they would deliberately skip. Strong candidates have opinions about scope. Weak ones want to build everything.',
          'Do a small paid trial project instead of a whiteboard. Pay for a weekend of real work on a scoped task. You will learn more from one shipped feature than from five hours of interviews.',
          'Bring in a trusted technical friend or a Fractional CTO for one call to sanity-check the deep technical fit. You do not need them for the whole process, just the parts you genuinely cannot judge.',
        ],
      },
      {
        type: 'quote',
        text: "A paid trial project is the single best predictor of a good first hire. Everything else is a proxy for what a weekend of real work tells you directly.",
      },
      {
        type: 'h2',
        text: 'Setting them up to succeed',
      },
      {
        type: 'p',
        text: "Hiring is the start, not the finish. The first thirty days decide whether this person becomes a force multiplier or a source of quiet resentment. A few things I insist on:",
      },
      {
        type: 'ul',
        items: [
          'Write down the why. They need to understand the problem you are solving and for whom, not just the ticket in front of them. This is what lets them make good calls autonomously.',
          'Give them one clear, shippable win in the first two weeks. Momentum builds confidence on both sides.',
          'Be explicit about decision rights. What can they decide alone? What needs your sign-off? Ambiguity here causes more friction than any technical disagreement.',
          'Do not disappear into sales and leave them alone. Your first engineer needs your context more than anyone. Protect time for them.',
          "Establish lightweight process early. Code review, a way to track work, and basic documentation. Not heavy process, just enough that the second hire does not inherit chaos.",
        ],
      },
      {
        type: 'h2',
        text: 'The mistakes I see most often',
      },
      {
        type: 'p',
        text: "Almost every founder I work with makes at least one of these. Knowing them in advance is cheaper than learning them the hard way.",
      },
      {
        type: 'ul',
        items: [
          'Hiring an agency or a contractor and calling it your first hire. An outside team can build your MVP, but they will not own the product or the culture. If you want a co-owner of the technology, hire one.',
          'Over-indexing on a big-company resume. Someone excellent at a large firm with infinite resources may be miserable and slow in the scrappy reality of a startup. Ask what they built with constraints, not what they maintained with a team of forty.',
          "Hiring someone smarter than you and then micromanaging them. If you do not trust their judgment, do not hire them. If you do, get out of the way.",
          'Giving equity without vesting or clarity. Be generous, but be structured. A four-year vest with a one-year cliff protects both of you.',
          'Waiting too long for the perfect candidate. A very good engineer who starts next week usually beats a perfect one who might start in three months, especially when you are burning runway.',
        ],
      },
      {
        type: 'h2',
        text: 'The bottom line',
      },
      {
        type: 'p',
        text: "Your first tech hire is you making a bet on a person, and them making a bet on you. Treat it with the seriousness of a co-founder decision, because in practice it often is. Hire for judgment and breadth, test with real work, onboard with real context, and then trust them to do the job. Decide, commit, and give them the room to succeed. Get this one right and the next ten hires get dramatically easier.",
      },
    ],
  },
  {
    slug: 'ai-powered-mvp-lean',
    title: "The Lean Startup's Guide to Building an AI-Powered MVP",
    description:
      'Build an AI MVP cheaply using pre-trained APIs like OpenAI, Anthropic, and Hugging Face. Validate demand before you ever train a custom model, and keep costs sane.',
    excerpt:
      'You do not need to train a model to launch an AI product. Here is how I help founders ship a validated AI MVP on API calls, not GPU bills.',
    date: '2025-05-06',
    readingTime: '9 min read',
    tags: ['AI', 'MVP', 'Lean Startup', 'LLMs', 'Product'],
    body: [
      {
        type: 'p',
        text: "The most expensive mistake I see in AI startups is founders deciding they need to train their own model before they have proven a single person wants what they are building. They read that a frontier model cost hundreds of millions to train and assume that is the price of entry. It is not. In 2025 you can put a genuinely useful AI product in front of real users in a couple of weeks, for the price of a few dinners, using models that other people have already paid to train.",
      },
      {
        type: 'p',
        text: "I have built production voice AI and live business dashboards on top of other people's models. I have never needed to train a foundation model to do it, and neither do you, at least not yet. Here is the lean playbook I use.",
      },
      {
        type: 'h2',
        text: 'Your model is not your moat. Your product is.',
      },
      {
        type: 'p',
        text: "Early on, the model is a commodity. OpenAI, Anthropic, Google, and the open-weight community are all shipping capable models that you can call through an API in minutes. Your advantage is not the model. It is the specific problem you solve, the data you accumulate, the workflow you own, and the experience you deliver. Founders who obsess over training custom models this early are polishing the one part of the stack that is least defensible and most expensive.",
      },
      {
        type: 'quote',
        text: 'Do not build the engine when you have not yet proven anyone wants to take the trip. Rent the engine. Prove the trip. Then decide what to build.',
      },
      {
        type: 'h2',
        text: 'Start with APIs, always',
      },
      {
        type: 'p',
        text: "For almost every AI MVP, the right first move is to wire up a hosted API and ship. The three buckets I reach for:",
      },
      {
        type: 'ul',
        items: [
          'Hosted LLM APIs for reasoning, generation, summarization, extraction, and conversation. Anthropic and OpenAI give you frontier capability with a few lines of code and no infrastructure to manage. You pay per token, which means your cost scales with usage instead of sitting on a fixed GPU bill.',
          'Specialized APIs for narrow tasks. Speech to text, text to speech, transcription, translation, vision. In markAIble we combined a speech-to-text provider, an LLM for reasoning, and a text-to-speech provider rather than trying to own any single layer. Each was a swappable API call.',
          "Hugging Face for open models when you want to self-host, need a task-specific model, or want to control cost at scale. You can start with an inference endpoint and only move to your own hosting when the math demands it.",
        ],
      },
      {
        type: 'p',
        text: "The point is that every one of these is a decision you can reverse. Prompt engineering, model choice, and provider are all cheap to change in the first few months. Training your own model is not.",
      },
      {
        type: 'h2',
        text: 'Validate demand before you validate accuracy',
      },
      {
        type: 'p',
        text: "Founders often tune their prompt for weeks chasing the last few percent of accuracy before a single customer has used the thing. Wrong order. The first question is not is it accurate enough. The first question is does anyone care. A rough MVP that is right eighty percent of the time in front of ten real users teaches you more than a perfect one in front of nobody.",
      },
      {
        type: 'ol',
        items: [
          "Define the single job your AI does and the one moment it has to nail. Ignore everything else.",
          'Build the thinnest possible product around one API call that does that job. Even a form and a result screen is enough to start.',
          'Get it in front of ten to twenty real users who have the actual problem. Watch them use it. Do not send a survey, watch.',
          'Measure whether they come back and whether they would pay. That tells you if you have a product. Accuracy tuning comes after.',
          "Only then start improving the quality, guided by where real users actually hit the wall, not where you imagined they would.",
        ],
      },
      {
        type: 'h2',
        text: 'Controlling cost so the API bill does not kill you',
      },
      {
        type: 'p',
        text: "The fear I hear most is that API calls will get expensive at scale. They can, if you are careless. But cost control with hosted models is mostly engineering discipline, and it is far cheaper than the alternative of running your own GPUs before you need to. Here is what actually moves the needle:",
      },
      {
        type: 'ul',
        items: [
          'Right-size the model per task. Do not send every request to the largest, most expensive model. Use a smaller, cheaper model for simple classification or routing, and reserve the big model for the hard reasoning. This one change often cuts cost by more than half.',
          'Cache aggressively. Identical or near-identical requests should never hit the API twice. We lean on Redis for exactly this. Prompt caching from the providers themselves can also cut the cost of repeated context dramatically.',
          'Trim your prompts. You pay per token, including the tokens you send. Bloated system prompts and unnecessary context are a recurring tax on every single call.',
          'Set hard usage limits and alerts from day one. A runaway loop or an abusive user should not be able to generate a surprise five-figure bill. Put ceilings in before you need them.',
          "Batch and stream where it helps. Streaming improves perceived latency for free, and batching non-urgent work lets you use cheaper throughput.",
        ],
      },
      {
        type: 'quote',
        text: "Most AI cost problems are not model problems. They are the wrong model for the task, prompts that are too long, and the same answer being computed a thousand times because nobody set up a cache.",
      },
      {
        type: 'h2',
        text: 'When it is finally time to go custom',
      },
      {
        type: 'p',
        text: "There is a point where owning more of the stack makes sense, but you reach it with evidence, not on a hunch. Signals that you might be ready to fine-tune or self-host:",
      },
      {
        type: 'ul',
        items: [
          'You have real usage data that a general model consistently gets wrong in a way that matters to your users.',
          'Your API bill is large enough that self-hosting is genuinely cheaper, and you have the load to keep your own hardware busy.',
          'You have accumulated proprietary data that a fine-tune could turn into a real edge no competitor can copy.',
          'You have a latency, privacy, or compliance requirement that a hosted API cannot meet.',
        ],
      },
      {
        type: 'p',
        text: "Even then, fine-tuning a smaller open model on your data is usually the move long before training anything from scratch. The jump from prompting to fine-tuning is far smaller and cheaper than founders expect, and you only make it once the product has earned it.",
      },
      {
        type: 'h2',
        text: 'The lean AI mindset',
      },
      {
        type: 'p',
        text: "Building an AI MVP in 2025 is a product problem wearing an engineering costume. The models are available, cheap to call, and easy to swap. Your job is to find the one valuable thing an AI can do for a specific person, wrap the thinnest possible product around it, put it in front of real users fast, and control cost with discipline rather than fear. Decide on the one job, commit to shipping it this month, and let real usage tell you what to build next. The custom model, if you ever need it, will still be there when you have earned the right to build it.",
      },
    ],
  },
  {
    slug: 'idea-to-impact-clear-why',
    title: "From Idea to Impact: How a Clear 'Why' Defines Your Product",
    description:
      'A compelling why is not a branding exercise. It is the decision-making engine behind every technical and product choice you make. Here is how to find yours and use it.',
    excerpt:
      "Every technical tradeoff, every feature cut, every architecture decision traces back to your why. When it is fuzzy, the whole product drifts.",
    date: '2025-07-22',
    readingTime: '7 min read',
    tags: ['Product', 'Strategy', 'Founders', 'Startups'],
    body: [
      {
        type: 'p',
        text: "Founders come to me with a feature list. Rarely do they come with a why. And almost every hard decision we then have to make, what to build first, what to cut, which architecture to bet on, comes back to that missing why. A clear why is not a poster on the wall or a line in your pitch deck. It is the tool you use to make a thousand small decisions without having to relitigate your strategy every time.",
      },
      {
        type: 'p',
        text: "My own motto is decide, commit, succeed. You cannot decide with conviction if you do not know why you are building the thing in the first place. So this is the piece of the work I refuse to skip.",
      },
      {
        type: 'h2',
        text: 'The why is a decision engine, not a slogan',
      },
      {
        type: 'p',
        text: "Think about how many decisions a small team makes in a week. Which bug to fix first. Whether to add the feature a loud customer asked for. Whether to rewrite the module that is slowing you down or to live with it. Whether to optimize for speed or for reliability. If every one of those goes up to the founder as a judgment call, you become the bottleneck and the team stalls. A sharp why lets anyone on the team answer most of those questions the same way you would.",
      },
      {
        type: 'quote',
        text: 'A good why does not sit in the pitch deck. It sits in the pull request, in the sprint planning, in the moment someone decides what not to build.',
      },
      {
        type: 'h2',
        text: "What a real why looks like",
      },
      {
        type: 'p',
        text: "A useful why is specific about who you are helping and what changes for them. Compare these two:",
      },
      {
        type: 'ul',
        items: [
          'Weak: We are building an AI platform for businesses. This tells you nothing. It cannot help you choose between two features because it is compatible with every possible feature.',
          "Strong: We help small clinics answer every patient call within three rings, at any hour, so no one loses a patient to a missed phone call. This is specific about who, what changes, and what good looks like. It immediately tells you that reliability and speed matter more than a fancy dashboard.",
        ],
      },
      {
        type: 'p',
        text: "The second version does work for you. It tells you that a dropped call is a catastrophe and a slightly plain interface is fine. That is a technical priority derived directly from the why, before a single engineer opened an editor.",
      },
      {
        type: 'h2',
        text: 'How the why shapes technical decisions',
      },
      {
        type: 'p',
        text: "This is the part non-technical founders underestimate. The why does not stop at product. It reaches all the way down into the architecture. When we built markAIble, the why was about never dropping a customer conversation. That single commitment drove enormous technical choices:",
      },
      {
        type: 'ul',
        items: [
          'Because a dropped call meant a failed promise, we invested early in reliability, redundancy, and circuit breakers rather than in cosmetic features.',
          'Because latency ruins a voice conversation, we obsessed over keeping responses fast and split the pipeline so no single slow component could stall the whole exchange.',
          'Because volume was unpredictable, we built to scale horizontally and autoscale under load rather than hoping a bigger server would cope.',
        ],
      },
      {
        type: 'p',
        text: "None of those were arbitrary engineering preferences. Each one fell straight out of the why. When your why is clear, your architecture stops being a matter of taste and starts being a matter of logic.",
      },
      {
        type: 'quote',
        text: "Show me your why and I can predict your architecture. If I cannot predict your architecture from your why, one of them is not clear enough yet.",
      },
      {
        type: 'h2',
        text: 'How to find yours',
      },
      {
        type: 'p',
        text: "If you cannot state your why in one sentence a stranger would understand, it is not sharp enough yet. Here is how I help founders get there:",
      },
      {
        type: 'ol',
        items: [
          'Name the specific person you are helping. Not a market segment, a person. Picture them.',
          'Describe the painful moment in their life or work that you remove. Be concrete about what it costs them today.',
          'Describe what is true for them after your product exists that was not true before. That is your impact.',
          'Compress all of that into one sentence with no jargon. If your own team cannot repeat it back to you, keep cutting.',
          'Pressure-test it against a real decision. Take a feature you are debating and see whether the why gives you a clear answer. If it does not, the why is still too vague.',
        ],
      },
      {
        type: 'h2',
        text: 'Guarding the why as you grow',
      },
      {
        type: 'p',
        text: "The danger is not usually that founders lack a why at the start. It is that the why erodes as the company grows. A big customer asks for something off-mission. A competitor ships a feature and you feel you must match it. An investor suggests a pivot over coffee. Each pull is reasonable in isolation, and together they slowly turn a focused product into a bloated one that stands for nothing.",
      },
      {
        type: 'p',
        text: "Protecting the why is an active job. Repeat it in every planning meeting. Say no to good ideas that do not serve it, out loud, so the team learns the pattern. When you do decide to evolve the why, do it deliberately and tell everyone, rather than letting it drift by a hundred small unexamined yeses.",
      },
      {
        type: 'h2',
        text: 'The takeaway',
      },
      {
        type: 'p',
        text: "Your why is the most practical asset you own. It is not marketing. It is the thing that lets a small team move fast without falling apart, because everyone is optimizing for the same outcome. Get it specific, wire it into how you make technical and product decisions, and defend it as you scale. Decide what you are really here to do, commit to it, and let that clarity pull the whole product toward impact.",
      },
    ],
  },
  {
    slug: 'business-ai-dashboard',
    title: 'Turn Your Business Into a Live AI Dashboard',
    description:
      'How to turn the systems you already run on into one live AI dashboard that explains, in plain English, what is actually happening in your business right now.',
    excerpt:
      'Most owners run on gut feel and week-old spreadsheets. Here is how I turn the tools you already use into a live AI dashboard you can actually ask questions.',
    date: '2025-10-01',
    readingTime: '9 min read',
    tags: ['AI', 'Business Intelligence', 'Dashboards', 'Operations', 'Non-Technical Founders'],
    body: [
      {
        type: 'p',
        text: "Here is a pattern I see in almost every business I advise, online or offline, five people or five hundred. The owner is making big decisions on a strange mix of gut feel, a spreadsheet someone updates when they remember, and whatever number got shouted in the last meeting. The data exists. It is just scattered across a dozen tools that do not talk to each other, and nobody has the time to stitch it together.",
      },
      {
        type: 'p',
        text: "A live AI dashboard fixes that. Not another chart nobody opens, but a single screen that pulls from the systems you already use and tells you, in plain language, what is going on in your business right now and what deserves your attention today. Here is how I build them, and how you can start.",
      },
      {
        type: 'h2',
        text: 'The real problem is not missing data. It is scattered data.',
      },
      {
        type: 'p',
        text: "Your sales live in one tool. Payments in another. Support tickets somewhere else. Inventory, ads, bookings, payroll, each on its own little island. Individually they are fine. Together they are the story of your business, but no human has the time to log into six dashboards every morning and hold the whole picture in their head.",
      },
      {
        type: 'p',
        text: "So most owners do the rational thing. They pick one or two numbers they can see easily, steer by those, and quietly ignore the rest until something breaks. The breakage is usually expensive, and usually it was avoidable.",
      },
      {
        type: 'h2',
        text: 'What a business AI dashboard actually is',
      },
      {
        type: 'p',
        text: "Strip away the buzzwords and it is three things working together. One, a pipe that pulls data out of the tools you already use. Two, a small set of numbers that genuinely matter for your business. Three, a layer of AI that watches those numbers, explains them in plain English, and flags what needs you. That last part is what makes it feel different from every dashboard you have ignored before.",
      },
      {
        type: 'quote',
        text: 'A good dashboard does not just show you the numbers. It tells you which number to care about today, and why.',
      },
      {
        type: 'h2',
        text: 'Step 1: Connect the systems you already use',
      },
      {
        type: 'p',
        text: "You almost never need to rip anything out. Most modern business tools, your point of sale, your accounting software, your CRM, your ad accounts, already expose their data through an API or a simple export. The job is to pull from each of them into one place on a schedule, so the picture is always current. We start with read-only connections, so nothing in your live systems is ever at risk.",
      },
      {
        type: 'ul',
        items: [
          'Sales and payments: what came in, from whom, and which way it is trending',
          'Operations: orders, bookings, deliveries, whatever your core activity is',
          'Customers and support: new, returning, churned, and what they complain about',
          'Marketing: what you spent, what it returned, and where it came from',
        ],
      },
      {
        type: 'h2',
        text: 'Step 2: Pick the handful of numbers that actually matter',
      },
      {
        type: 'p',
        text: "This is the step most people get wrong by doing too much. A dashboard with fifty metrics is just a spreadsheet with a nicer font. The value is in ruthless focus. For most businesses, five to eight numbers tell you almost everything, and the right five for a restaurant are not the right five for an agency. Choosing them is a strategy conversation, not a technical one.",
      },
      {
        type: 'code',
        lang: 'text',
        code: "North-star metrics (keep it to about six):\n  revenue           -> this week vs last 4-week average\n  gross_margin      -> %, flag if it drops below target\n  cash_runway       -> weeks of cash left at current burn\n  new_customers     -> count and cost to acquire\n  repeat_rate       -> % of revenue from returning customers\n  at_risk_accounts  -> top customers quiet for over 21 days",
      },
      {
        type: 'h2',
        text: 'Step 3: Let AI do the explaining, not just the charting',
      },
      {
        type: 'p',
        text: "This is where it stops being a normal dashboard. Instead of staring at a line going down and guessing why, you get a written read: revenue is down this week, driven almost entirely by repeat orders from your top accounts slowing down, and three of them have not ordered in over three weeks. The AI reads the same data you would, across every source at once, and hands you the summary and the likely cause.",
      },
      {
        type: 'p',
        text: "Even better, you can just ask. Why did margin drop last month? Which customers are at risk of leaving? What should I worry about this week? You ask in plain English and get an answer grounded in your real numbers, not a generic guess.",
      },
      {
        type: 'h2',
        text: 'Step 4: Alerts, so the dashboard watches so you do not have to',
      },
      {
        type: 'p',
        text: "The best dashboard is the one you do not have to open. Once the AI learns what normal looks like for your business, it watches continuously and only reaches out when something is off: a sudden drop in bookings, a spike in refunds, cash projected to get tight in six weeks, a key customer going quiet. You get a short, plain message, and you deal with it before it becomes a fire.",
      },
      {
        type: 'h2',
        text: 'You do not need to be technical, or a data team',
      },
      {
        type: 'p',
        text: "Every time I describe this, a non-technical owner assumes it is a six-month, six-figure project with a room full of engineers. It usually is not. The tools to connect systems and layer AI on top have gotten dramatically cheaper and simpler. For most businesses this is a matter of weeks, not quarters, and it runs quietly in the background once it is set up.",
      },
      {
        type: 'h2',
        text: 'Where to start this week',
      },
      {
        type: 'ol',
        items: [
          'List every tool where important business data lives right now',
          'Write down the five to eight numbers you wish you could see every morning without digging',
          'Pick the one decision you keep making half-blind, and make that the dashboard first job',
          'Start with read-only connections, so your live systems are never at risk',
        ],
      },
      {
        type: 'p',
        text: "You already have the data. You already have the business. What is usually missing is one clear screen that turns all of it into decisions, and an AI that tells you where to look. That is exactly the kind of thing I help founders and business owners set up. If you are tired of running your business half-blind, that is a good place to start a conversation.",
      },
    ],
  },
];
