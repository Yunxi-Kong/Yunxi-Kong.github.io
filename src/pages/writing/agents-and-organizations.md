---
layout: ../../layouts/NoteLayout.astro
slug: agents-and-organizations
---

<figure class="article-figure editorial-figure">
  <img src="/assets/essays/agent-commitments.webp" srcset="/assets/essays/agent-commitments-720.webp 720w, /assets/essays/agent-commitments.webp 1440w" sizes="(max-width: 760px) calc(100vw - 40px), 730px" width="1440" height="960" alt="Software agents prepare reservations, announcements, and budget requests; two bookings collide in a shared ledger while a human holds an approval stamp" decoding="async" />
  <figcaption><strong>Several finished tasks can still produce one broken plan.</strong> Two lodging requests compete for the same room and date. AI-generated conceptual illustration of a hypothetical workflow, not a deployed agent system.</figcaption>
</figure>

Imagine organizing a small research workshop with a team of AI agents. One finds accommodation for visiting speakers. Another prepares the public announcement. A third checks the budget. Each reports success.

Then you discover that two reservations refer to the same room, the announcement assumes a booking that was never confirmed, and the budget calculation uses a price that has expired.

No agent needed to be spectacularly unintelligent for this to happen. Each could have done a locally reasonable job. The failure is in the relationship between their actions.

That is why I am interested in agents as an organizational problem, not simply a way to multiply the amount of work one person can request.

## Preparation is not commitment

A draft announcement is not a public announcement. A room that appears available is not a reservation. A budget estimate is not permission to spend.

These distinctions look mundane until software can move between them automatically. At that point, the system needs to know not only what an agent believes, but what it has actually committed on behalf of someone else.

For the workshop, I would want a common record of consequential commitments: what has been confirmed, by whom, under which conditions, and what would be affected if it changes. The announcement agent should not have to infer a booking's status from a persuasive paragraph written by the reservation agent.

The record need not contain every intermediate thought. It needs to distinguish an intention, a tentative hold, a confirmation, and a cancellation. A system that collapses those states into "done" makes coordination unnecessarily fragile.

<dl class="argument-map" aria-label="Three states of an agent's work">
  <div><dt>Proposed</dt><dd>An option exists. Other work must not yet rely on it as a promise.</dd></div>
  <div><dt>Authorized</dt><dd>The action is permitted within an explicit scope and set of conditions.</dd></div>
  <div><dt>Confirmed</dt><dd>The external result has been checked, and dependencies can use it.</dd></div>
</dl>

This is a proposed design distinction, not a complete transaction protocol. Real actions can fail between authorization and confirmation. Some can be reversed; some cannot. Those differences belong in the arrangement, too.

## Shared memory is not shared authority

Putting every agent in the same conversation does not settle who may change the plan. An agent can know the budget without having authority to approve an increase. It can know a person's preferences without having permission to disclose them to a vendor.

Information and authority should therefore be designed separately. Which facts does an agent need to perform a bounded task? Which actions may it take? Which changes require another participant to agree? What should it do when the original conditions no longer hold?

The answers may differ even for agents with the same underlying model. The distinction comes from their responsibilities, not their intelligence scores.

More context can also create costs. Giving every agent every document may expose unnecessary personal information and make conflicting versions harder to distinguish. A concise, maintained statement of the current commitment can be more useful than a complete archive of how everyone talked about it.

This is one place where an analogy to human organizations helps, provided it is not taken literally. Roles and procedures can allocate responsibility. They can also become needless bureaucracy. The objective is not to simulate an office full of agents. It is to make the work fit together with as little overhead as the task allows.

## The unit of success is the shared outcome

Suppose the reservation agent is rewarded for finding low prices. It chooses a cheap hotel far from the venue. The travel agent then needs more transport, the schedule becomes harder to keep, and the apparent saving disappears.

This is an invented example, but it makes a familiar design trap concrete: a local metric can improve while the larger outcome gets worse. Calling the agents a team does not fix the objective each has been given.

The same problem can arise without explicit numerical rewards. A prompt that says "complete your task quickly" may encourage an agent to stop at a plausible answer. A reviewer instructed to approve satisfactory work may fail to investigate an assumption shared by all the drafts. Clear local tasks are necessary, but the dependencies between them need owners as well.

The system should expose a conflict rather than hide it inside a polished combined report. Someone must be able to say that two reasonable recommendations cannot both be followed.

> A useful organization does not just distribute work. It determines how one person's promise becomes another person's assumption.

## Why not give everything to one stronger agent?

Sometimes that is the better answer.

Parallel agents make sense when work can be separated enough to benefit from different searches, tools, or contexts. They can be a poor bargain when every step depends on a rapidly changing shared state. In its [2025 account of building a multi-agent research system](https://www.anthropic.com/research/multi-agent-research-system), Anthropic describes both the benefits of parallel investigation and the costs of coordinating dependencies. That is evidence from a particular engineering setting, not a rule that every task needs the same architecture.

For a small, tightly coupled job, I would begin with the simpler design: one agent, a clear record, and reliable tools. Additional agents should earn their place by improving the outcome under a comparable resource budget, not by making the architecture diagram more impressive.

Likewise, a human should not become the relay service between a hundred agents. If every routine decision returns to the person, the system has distributed execution while centralizing interruption. Useful delegation should reduce that burden while reserving human attention for decisions that require it.

The hard part is choosing those boundaries. Requiring approval for every action can make oversight ceremonial. Requiring none can make a mistake hard to contain.

## The ability to change course

The workshop is canceled. What happens now?

A weak design stops accepting new instructions but leaves earlier commitments untouched. A better one identifies what is already public, what can still be withdrawn, which costs remain, and who needs to know. "Stop" is not simply the absence of another model call. It is a change in the state of shared work.

I would want an agent organization to support this kind of redirection. The person should be able to inspect outstanding commitments and revoke future authority without understanding every internal exchange. The system should preserve an honest account of actions it cannot undo.

This is where accountability becomes more than a log file. A log can tell us that a message was sent. It may not explain whether sending it was authorized, whether its assumptions were current, or who could have prevented it.

## What I want to investigate

A bounded test could compare several organizations using the same underlying model and tools: one agent, independent agents, and agents with explicit responsibility and commitment records. The task could include resource conflicts, outdated information, and a change of goal midway through.

I would measure not only completion, but inconsistent commitments, recovery effort, unnecessary disclosure, human interruptions, and total cost. A design that catches a conflict by asking the person forty times is different from one that handles it within an agreed scope. These are research questions, not results I am reporting.

At a larger scale, the issue is who controls the infrastructure through which agents act. A platform that defines permissions and shared records can make coordination easier while also determining who may participate and which kinds of work are possible. More personal agents do not automatically mean more personal power.

That is the connection I want to make between engineering and societal computing. The architecture is not only a collection of models. It is also a small set of rules about information, resources, and authority. As those systems become more capable, the quality of those rules matters as much as the fluency of the participants.
