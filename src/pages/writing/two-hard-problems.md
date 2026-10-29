---
layout: ../../layouts/NoteLayout.astro
slug: two-hard-problems
---

<figure class="article-figure editorial-figure">
  <img src="/assets/essays/mutual-constraints.webp" srcset="/assets/essays/mutual-constraints-720.webp 720w, /assets/essays/mutual-constraints.webp 1440w" sizes="(max-width: 760px) calc(100vw - 40px), 730px" width="1440" height="960" alt="One collaborator supplies possible routes while another supplies an appointment constraint, making a feasible route visible" decoding="async" />
  <figcaption><strong>Different information, a smaller search.</strong> A destination and a deadline can change which paths matter. AI-generated conceptual illustration of an imagined task, not an algorithmic result.</figcaption>
</figure>

Predicting where a person will walk next can be difficult. Knowing that they are late for an appointment changes the problem. Knowing which entrance is open changes it again.

This small observation has been bothering me in a productive way. We often describe intelligence as the ability of one solver to handle a difficult task. But sometimes the obstacle is not inside the solver. It is that the useful information is divided between people, tools, or tasks that have been treated separately.

Could two difficult problems become easier because their partial solutions constrain one another?

## The intuition is not a complexity theorem

There are several different claims hiding in that question. More computation might make a search faster. More information might remove possibilities. A better representation might expose structure that was already present. Cooperation might do any of these, or none of them.

I want to separate them before making the idea sound larger than it is. Showing that a particular task becomes easier after a useful message does not show that a worst-case computational complexity barrier has disappeared. Nor does it turn an undecidable problem into a decidable one. A claim about an interaction protocol needs evidence at the level of that protocol.

The narrower question is already interesting: **when can the progress of one participant change what another participant needs to solve?**

Suppose a planning agent knows travel routes but not which constraints matter to a person. The person knows what they need but not which options are feasible. The agent cannot produce a useful plan from a map alone. The person cannot express a useful choice from preferences alone. An exchange could improve both: the agent rules out unsuitable routes, while the person learns that a different departure time would make a preferred option possible.

Neither party needed a complete model of the other before beginning.

## A very small example

Here is a deliberately simple invented case. Three routes reach the same destination. Route A takes 12 minutes and includes stairs. Route B takes 18 minutes and is step-free. Route C takes 25 minutes and is step-free. The traveler needs step-free access and has 20 minutes.

<details class="reading-case">
  <summary>Which route survives both constraints?</summary>
  <div>
    <p><strong>With access information only:</strong> B and C remain possible.</p>
    <p><strong>With the time limit only:</strong> A and B remain possible.</p>
    <p><strong>With both:</strong> only B remains.</p>
    <p>The arithmetic is trivial. What matters is where the information was held. No difficult theorem has been solved; the task has become better specified.</p>
  </div>
</details>

Now change the time limit to 15 minutes. There is no feasible route. A useful exchange should reveal that conflict, not invent an accessible shortcut. The person might change the appointment, the transport mode, or the destination. The planner's knowledge now changes the person's decision problem, rather than merely selecting an item from a list.

The example is small enough to make an important failure visible: a cooperative system can be useful even when its answer is that the original request cannot be satisfied.

## What would make the exchange genuinely reciprocal?

Two agents sending long answers back and forth are not necessarily helping each other. I would want to identify the piece of information that changes the next step.

In a research workflow, one agent might retrieve candidate sources while another tries to formulate a defensible claim. A failed search could reveal that the claim is too broad. A more precise claim could make the next search more selective. But this is useful only if the claim remains answerable to the evidence. Otherwise the agents could quietly redefine the question until whatever they found looks sufficient.

The distinction I care about is between exchanging conclusions and exchanging constraints. "I think the answer is B" invites agreement or disagreement. "A violates the access requirement; C misses the deadline" gives another participant something it can inspect, challenge, or use.

There is relevant prior work here. [Cooperative Inverse Reinforcement Learning](https://arxiv.org/abs/1606.03137) formalizes a human-robot interaction with a shared reward but asymmetric knowledge: the robot initially lacks information about the human's reward function. In that setting, teaching and learning are part of joint behavior rather than isolated stages. My broader question is not a claim to have invented cooperation or this formalism; it is about identifying useful information exchanges in the systems I want to build.

## Agreement can hide a shared mistake

Imagine that both agents rely on the same outdated map. One recommends a bridge, the other confirms that the route is short. Their agreement adds no new evidence that the bridge is open.

The problem becomes harder to notice when each agent produces a different explanation. Verbal diversity can look like independent confirmation even when all the answers inherit the same unsupported assumption. An iterative conversation may strengthen confidence without strengthening the basis for it.

For that reason, I would preserve the origin of each constraint. Was it observed by a tool? Supplied by the person? Inferred by a model? Copied from the other participant? A message that repeats a belief should not acquire the status of a fresh observation merely by passing through a second agent.

The same caution applies to goals. A person can misunderstand their options, and a system can misread their preferences. Neither should be treated as an infallible oracle. But correcting a factual error is different from replacing a person's preference with a goal that is easier for the system to satisfy.

> Cooperation should make the problem clearer, not merely make the participants agree.

## What I would actually test

A useful first study would not start with a sprawling society of agents. I would choose bounded tasks with checkable solutions and intentionally distribute complementary information between participants.

I would compare independent solving, a single shared information pool, a one-way handoff, and a reciprocal exchange. The total model and tool budget would need to be comparable. Otherwise an apparent benefit of cooperation might just be the benefit of spending more.

<dl class="argument-map" aria-label="Three tests of useful information exchange">
  <div><dt>Complementarity</dt><dd>Does the benefit disappear when both participants receive the same information?</dd></div>
  <div><dt>Correction</dt><dd>Does a false message get challenged, or spread through the joint answer?</dd></div>
  <div><dt>Cost</dt><dd>Is the improvement worth the additional messages, tool calls, and waiting?</dd></div>
</dl>

I would also remove or shuffle selected messages. If a proposed mechanism says a particular constraint helps the other participant, breaking that connection should matter. These are study ideas, not findings I have obtained.

Finally, I would look at the cases where cooperation should stop. If another exchange adds no useful constraint, more discussion may only consume time. A well-designed system needs a way to preserve unresolved disagreement or report insufficient information.

## A question about organization, too

This line of inquiry connects to societal computing because information is rarely distributed by accident. Roles, permissions, institutions, and incentives determine who can see what and who can act on it. A technically useful message may also disclose something its holder had good reason to keep private.

The goal cannot be unlimited sharing. It might be a bounded disclosure: enough information to establish that a route is unsuitable, without requiring a person to reveal their medical history; enough to identify a scheduling conflict, without exposing their whole calendar.

What interests me is not the claim that two hard things magically become easy. It is the possibility that we have sometimes drawn the boundary of the problem in the wrong place. A better solver may help. A better exchange between solvers may change what has to be solved at all.
