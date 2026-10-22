---
layout: ../../layouts/NoteLayout.astro
slug: simulation-and-evidence
---

A convincing conversation with an AI character is an experience. A record showing that the character changed a simulated world is a system result. A claim about how people behave is something else again.

Working on [Motiverse](/projects/motiverse/) has made these distinctions important to me. I am interested in multi-agent environments as a bridge between interactive systems and computational social science, but that bridge requires more than believable dialogue.

<figure class="article-figure">
  <img src="/assets/project-thumbnails/motiverse.webp" width="1313" height="363" alt="Three Motiverse manuscript panels: character conversation and town events, a counterfactual letter, and a retrospective event trace" loading="lazy" decoding="async" />
  <figcaption><strong>From the system: three views of Motiverse.</strong> Conversation, a projected future, and a retrospective event trace appear as distinct artifacts in the working manuscript. Their existence does not establish behavioral validity.<span class="figure-links"><a href="/assets/project-thumbnails/motiverse.webp">Full-size figure</a><a href="/projects/motiverse/">Project and my contributions</a></span></figcaption>
</figure>

## Words, events, and possible futures

Motiverse separates three kinds of output: what characters say, what the shared world records as having happened, and what the system projects might happen later.

Suppose a visitor asks one character to deliver a message to another. A fluent response saying "I will tell them" is not proof that the recipient received the information. A later account in which the message changed someone's life is not proof that the corresponding event was committed to the world.

<fieldset class="evidence-example" aria-describedby="evidence-scope">
  <legend>Did the message arrive?</legend>
  <p class="example-scope" id="evidence-scope">Illustrative scenario, not a recorded Motiverse run. Each view considers a different artifact in isolation.</p>
  <input type="radio" id="evidence-dialogue" name="evidence-kind" value="dialogue" checked />
  <input type="radio" id="evidence-event" name="evidence-kind" value="event" />
  <input type="radio" id="evidence-future" name="evidence-kind" value="future" />
  <div class="evidence-modes">
    <label for="evidence-dialogue">Dialogue</label>
    <label for="evidence-event">World event</label>
    <label for="evidence-future">Projection</label>
  </div>
  <div class="evidence-panels">
    <div class="evidence-panel" data-evidence="dialogue">
      <p class="record-label">A CHARACTER'S REPLY</p>
      <p class="record-content">&ldquo;I will tell them before sunset.&rdquo;</p>
      <dl>
        <div><dt>What this records</dt><dd>The character generated a promise to pass on the message.</dd></div>
        <div class="claim-boundary"><dt>What it cannot establish</dt><dd>That the recipient received the message, or that any shared state changed.</dd></div>
      </dl>
    </div>
    <div class="evidence-panel" data-evidence="event">
      <p class="record-label">A COMMITTED WORLD EVENT</p>
      <p class="record-content">Message delivered; the recipient's information state was updated.</p>
      <dl>
        <div><dt>What this records</dt><dd>A state transition inside the simulation, assuming the record accurately reflects execution.</dd></div>
        <div class="claim-boundary"><dt>What it cannot establish</dt><dd>That a real person would receive, interpret, or act on the message in the same way.</dd></div>
      </dl>
    </div>
    <div class="evidence-panel" data-evidence="future">
      <p class="record-label">A GENERATED POSSIBLE FUTURE</p>
      <p class="record-content">&ldquo;The message could lead the two characters to meet again.&rdquo;</p>
      <dl>
        <div><dt>What this records</dt><dd>A generated account of a possible consequence.</dd></div>
        <div class="claim-boundary"><dt>What it cannot establish</dt><dd>That the meeting happened, or that this narrative is a calibrated forecast.</dd></div>
      </dl>
    </div>
  </div>
</fieldset>

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

I do not want to choose between building an engaging world and doing rigorous research. I want the system to make it possible to ask a more precise question:

> Which mechanism changed, what evidence records that change, and how far does the resulting claim travel?

That is a more demanding objective than producing a compelling demo, and a more useful starting point for computational social science.
