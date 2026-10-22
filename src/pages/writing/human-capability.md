---
layout: ../../layouts/NoteLayout.astro
slug: human-capability
---

An AI system can produce an excellent answer while leaving the person using it no better prepared for the next problem. That possibility is central to the research direction I am developing. I am interested in useful assistance, but also in what happens to understanding, judgment, and the ability to act over repeated interactions.

This is not an argument that every tool must teach. Sometimes completing a task efficiently is exactly the goal. The important step is to distinguish that goal from a claim about developing human capability.

## Three connected parts

I currently organize my thinking around three parts of an AI-supported environment.

**Interfaces and devices** determine what people can perceive and do. A browser annotation tool, an interactive image viewer, and an immersive environment offer different ways to inspect evidence and express intent. A more elaborate medium is not automatically a better one: the interaction must serve the task.

**Agents** interpret requests, generate possibilities, and sometimes execute actions. The interesting design problem is not only how capable an agent is, but how its work becomes understandable and correctable. When should it ask a question? When should it expose uncertainty? What should remain under human control?

**Human capabilities** concern what a person can understand and accomplish, both with the system and after its assistance is reduced. These include recognizing relevant evidence, explaining a decision, and transferring an approach to a different situation.

Evidence cuts across all three. This is a working perspective, not a claim to have discovered a new theory. It gives me a way to connect system design with empirical questions.

## A concrete design problem

In the [ASNR Interactive Brain Atlas](/projects/asnr-brain-atlas/), a learner can encounter an image, an anatomical marker, and a clinician-authored explanation. Putting them on one screen is a useful engineering step. It does not establish that the learner understands the relationship.

A possible next question is whether asking someone to inspect a region before revealing an explanation changes how they reason about a later case. That would require an evaluation designed around the question, not simply a count of clicks or completed study cards. It might also reveal a tradeoff: an interaction that slows immediate completion could support later understanding, or it could merely impose unnecessary effort.

My earlier [Histy project](/projects/histy-ai-history-annotation/) raises a related question. An annotation can make an interpretation visible, but an AI-generated interpretation and a learner's own reasoning should not be treated as equivalent evidence of understanding.

## What would count as progress?

I would separate several outcomes rather than collapse them into one success score:

- **Immediate performance:** Was the task completed accurately and efficiently?
- **Understanding:** Can the person explain the evidence behind a decision?
- **Retention and transfer:** Does performance persist on a later or unfamiliar task?
- **Agency and correction:** Can the person recognize a system error and change course?

These outcomes can conflict. A useful study should make those conflicts visible. Delayed performance also has multiple possible causes, so a later test alone does not identify the effect of an earlier interaction.

## Why this direction matters to me

Engelbart's augmentation perspective treats people, methods, and tools as an interdependent system rather than equating progress with an isolated machine capability. That framing is a useful starting point for my own questions about AI assistance. [Augmenting Human Intellect (1962)](https://www.dougengelbart.org/pubs/augment-3906.html)

As foundation models improve, the surrounding research problems do not disappear. We still need to decide what to make observable, when to preserve human judgment, and how to evaluate effects beyond a polished demonstration. Those are the questions I want my systems to help investigate.
