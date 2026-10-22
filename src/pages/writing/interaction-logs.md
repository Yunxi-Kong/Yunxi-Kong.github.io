---
layout: ../../layouts/NoteLayout.astro
slug: interaction-logs
---

Imagine an educational website records that a page stayed open for two hours. Did the learner study for two hours, leave the tab running, or alternate between the material and another task?

Now imagine a learner answers a question correctly with AI assistance but misses a related question a week later. Did the assistance fail? Was the later question harder? What happened during the intervening week?

These examples capture a concern running through my work: detailed logs are not the same thing as well-defined evidence.

## Start with the construct

A timestamp records an event according to an implementation. "Engagement" and "understanding" are interpretations that require additional justification.

Before choosing a metric, I would ask what behavior the system can actually observe, which behaviors remain invisible, and why the observed signal should correspond to the construct of interest. Time on page may be useful for some purposes, but it cannot silently become time spent learning. An annotation may reflect interpretation, copying, or compliance with an instruction.

Combining signals can help, but more columns do not automatically solve the measurement problem. Their relationship to the construct still needs to be examined.

## Separate execution from experience

In an agent workflow, a successful process exit is not necessarily a usable scientific artifact. Similarly, a completed learning activity is not necessarily a meaningful learning experience.

My work on [CyberNeuro](/projects/cyberneuro/) and interactive learning systems brings these distinctions into everyday development. Did the tool produce the expected artifact? Can a person inspect it? Does it address the intended task? These are different checks, even when the interface presents them together.

Reliable engineering is a prerequisite for interpreting an evaluation. It does not replace the evaluation.

## Define the comparison

A before-and-after difference is not automatically the effect of an intervention. Learners can change because of practice, outside instruction, differences in task difficulty, or selective participation.

For a proposed study, I would write down the intervention, the population, the outcome, the time horizon, and the comparison of interest. Randomization may help establish that comparison where it is feasible and appropriate. Observational work requires explicit assumptions and careful attention to the process that generated the data.

Hernan and Robins' causal-inference framework is a useful methodological reference for distinguishing observed associations from causal contrasts and stating the assumptions needed to connect them. [Causal Inference: What If](https://miguelhernan.org/whatifbook)

## Inspect what gets excluded

Selection also happens inside AI evaluation pipelines. Suppose an evaluator compares two options, swaps their order, and keeps only judgments that agree. The retained judgments may look more consistent by construction.

But which examples were removed? Does the remaining sample cover the original population of tasks? Could the filtering change downstream rankings? Does agreement correspond to calibration or agreement with people?

These are the questions behind my ongoing [LLM evaluation reliability project](/projects/llm-evaluation-reliability/). They are not conclusions about a completed experiment. The general lesson is that a cleaner-looking dataset can still support a narrower claim than the original one.

## An evidence contract

For a future human-AI study, I want to make five things explicit before interpreting the results:

- The observation: what was recorded, including failures and missing data.
- The construct: what that observation is meant to represent.
- The comparison: what alternative condition makes the result informative.
- The assumptions: what must hold for the interpretation to be reasonable.
- The boundary: which people, tasks, and settings the claim actually covers.

This discipline connects system-building to the computational social science I want to pursue. The objective is not to collect the largest possible trace. It is to produce evidence that can survive a clear question about what it means.
