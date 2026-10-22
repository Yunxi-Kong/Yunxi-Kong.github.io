---
layout: ../../layouts/NoteLayout.astro
slug: simulation-and-evidence
---

A convincing conversation with an AI character is an experience. A record showing that the character changed a simulated world is a system result. A claim about how people behave is something else again.

Working on [Motiverse](/projects/motiverse/) has made these distinctions important to me. I am interested in multi-agent environments as a bridge between interactive systems and computational social science, but that bridge requires more than believable dialogue.

## Words, events, and possible futures

Motiverse separates three kinds of output: what characters say, what the shared world records as having happened, and what the system projects might happen later.

Suppose a visitor asks one character to deliver a message to another. A fluent response saying "I will tell them" is not proof that the recipient received the information. A later account in which the message changed someone's life is not proof that the corresponding event was committed to the world.

These distinctions make a practical difference. A record of committed events can reveal a broken handoff that a plausible final narrative would conceal. A projected future can still be valuable as an imaginative experience, provided it is not confused with an observed consequence.

## Three different standards

**Narrative coherence** asks whether an interaction makes sense within its setting. The characters may appear to remember, plan, and respond meaningfully.

**Mechanism fidelity** asks whether the software follows its specified rules. Who had access to the message? Which event changed the state? Can that event be traced to a prior action?

**Behavioral validity** asks whether the simulated behavior corresponds to the people or processes a researcher wants to study. Internal consistency alone cannot answer that question.

The Generative Agents work is useful context for the first standard: it combines memory, reflection, and planning to support believable agent behavior. Its design should not be treated as a universal guarantee that any agent population represents a real one. [Park et al., 2023](https://arxiv.org/abs/2304.03442)

## What an archive can establish

A system archive can help identify missing outputs, inconsistent records, and differences between execution paths. It can support claims about what the software produced under recorded conditions.

It cannot, by itself, establish that a participant felt agency, that an intervention improved understanding, or that a simulated population is socially representative. Those claims require additional evidence. A model-generated input is also not interchangeable with a human participant's action, even when both enter the same interface.

For Motiverse, keeping these boundaries explicit is part of the research work. A missing or fallback output should remain visible rather than quietly becoming a successful experience in a summary table.

## A route toward social-science questions

My economics background draws me toward information asymmetry, coordination, and institutional rules. In a simulated environment, one could vary who receives information, which actions require permission, or how consequences persist.

A useful first step would be to specify the proposed mechanism before examining the outcomes. Next, test whether the implementation actually changes that mechanism. Then examine robustness to model choice, prompts, initial conditions, and alternative explanations. Connecting the result to a real population would require an appropriate external comparison, with attention to sampling and representation.

The study of agents grounded in self-reports from 1,052 people offers a relevant example of evaluating agents against human responses rather than relying only on plausibility. Its findings remain tied to its construction and evaluation setting. [Park et al., first posted 2024; revised 2026](https://arxiv.org/abs/2411.10109v3)

## The question I want to keep open

I do not want to choose between building an engaging world and doing rigorous research. I want the system to make it possible to ask a more precise question: **which mechanism changed, what evidence records that change, and how far does the resulting claim travel?**

That is a more demanding objective than producing a compelling demo, and a more useful starting point for computational social science.
