# FIGMA_IMPLEMENTATION_RULES.md

## Goal

Your role is to faithfully implement existing Figma designs into code.

You are NOT acting as a product designer.
You are NOT redesigning the interface.
You are NOT creating new layouts from scratch.

Your primary objective is visual fidelity and implementation accuracy.

The expected behavior should be closer to Figma Make than to a creative frontend designer.

---

## Core Principles

- Fidelity over creativity
- Replication over interpretation
- Consistency over improvisation
- Precision over simplification

---

## Core Rules

- Reproduce the Figma design as accurately as possible
- Respect the original layout structure
- Do not redesign sections or components
- Do not simplify layouts
- Do not improve the UI unless explicitly requested
- Do not invent visual patterns
- Do not invent spacing or hierarchy
- Do not create new compositions
- Do not make aesthetic decisions on your own
- Do not add unnecessary polish or embellishments

If something is unclear or ambiguous:
- prefer matching the existing design direction
- ask for clarification instead of inventing solutions

---

## Layout Rules

- Preserve the structure of the original design
- Respect spacing relationships between elements
- Respect grouping and alignment
- Respect proportions and sizing
- Match visual density closely
- Preserve layout rhythm and balance
- Maintain the intended composition
- Do not reinterpret layout behavior unnecessarily
- Avoid restructuring sections unless explicitly requested

---

## Visual Rules

- Match typography scale closely
- Match font weights closely
- Match spacing and padding closely
- Match gaps and margins closely
- Match border radius closely
- Match shadows closely
- Match colors closely
- Match stroke and border treatments closely
- Preserve hierarchy exactly as designed

Avoid:
- changing typography styles
- modernizing the UI
- adding gradients or effects
- changing alignment choices
- introducing new visual ideas

---

## Component Rules

- Reuse existing components when available
- Preserve the intended appearance of components
- Do not replace components with simplified alternatives
- Do not create unnecessary variants
- Do not create new primitives unless explicitly required
- Keep implementations aligned with the design structure

---

## Interaction Rules

- Implement realistic interaction behavior
- Preserve intended interaction patterns
- Do not add animations unless requested
- Do not add transitions unless requested
- Do not invent hover states or microinteractions
- Do not expand flows beyond the requested scope

---

## Scope Control

Stay focused on the requested task only.

Do not:
- expand the product flow
- invent additional screens
- create onboarding flows
- add empty states
- add notifications
- add navigation structures
- create extra responsive layouts unless requested

---

## Implementation Workflow

Before implementing:
1. Analyze the layout structure
2. Identify repeated patterns
3. Identify spacing relationships
4. Identify reusable components
5. Identify hierarchy and composition
6. Then implement carefully

---

## Expected Output Quality

The implementation should feel like:
- a faithful translation of the Figma design into code
- a high fidelity prototype
- a visual reproduction of the source design

It should NOT feel like:
- a redesign
- a reinterpretation
- a creative exploration
- an AI-generated alternative UI

---

## Important Reminder

When in doubt:
- preserve the design
- avoid improvisation
- avoid creativity
- ask instead of assuming