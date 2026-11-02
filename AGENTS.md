# AGENTS.md — Office Portal Website

## 1. Project context

Build and maintain a modern, responsive **office portal website** using **Astro**.

- The frontend is the only application layer for the current phase.
- Do not create or assume a backend, database, authentication server, API, or deployment service.
- Use realistic **mock/fake data** for all portal content and interactions.
- Keep the code structured so a real backend can be integrated later without rewriting the UI.
- Follow established coding conventions, accessibility standards, and security-conscious frontend practices.

If an existing project convention conflicts with this document, inspect the project first and preserve its established architecture unless there is a clear reason to change it.

## 2. First steps before making changes

1. Inspect the repository structure and read `package.json`, Astro configuration, TypeScript configuration, and existing project documentation.
2. Identify the installed Astro version, integrations, CSS approach, component conventions, and available scripts.
3. Reuse existing dependencies and components where practical. Do not install a library merely to solve a problem that can be handled cleanly with the existing stack.
4. Before editing, identify the relevant pages, layouts, components, styles, and data modules.
5. Make focused changes. Avoid unrelated refactoring and do not overwrite existing work.

Do not assume a file, package, script, or feature exists until you have checked.

## 3. Technology and architecture

- Use Astro as the primary framework.
- Prefer `.astro` components for page structure and server/build-time rendering.
- Use TypeScript for new application logic and data models when the project supports it.
- Use semantic HTML and CSS for layout and presentation.
- Use browser JavaScript only where interaction genuinely requires it.
- If a UI framework integration (such as React, Vue, or Svelte) is already installed, use it only where it provides a clear benefit. Do not introduce one by default.
- Avoid unnecessary client-side hydration. Keep content static and render it at build time wherever possible.
- Add `client:*` directives only to components that need browser-side interactivity, and choose the narrowest appropriate hydration strategy.
- Do not add a state-management library for simple local UI state. Use component state or a lightweight shared store only when the application actually needs shared client state.
- Keep page components, reusable UI, data, types, utilities, and styles separate.

Suggested structure (adapt to the existing repository rather than forcing this exact layout):

```text
src/
  components/
    layout/
    navigation/
    dashboard/
    common/
  layouts/
  pages/
  data/
  types/
  utils/
  styles/
public/
  images/
  icons/
```

## 4. Office portal scope

The portal may include these frontend areas as required by the task:

- Dashboard / overview
- Announcements and notices
- Employee directory and employee profile previews
- Attendance overview
- Leave balance and leave-request interface
- Office calendar, events, and meetings
- Internal documents and useful links
- Profile and preferences UI

Implement only the features requested. Do not invent complex workflows or add every module automatically.

### Mock-data rules

- Keep mock data in dedicated files under `src/data/`, not scattered throughout page markup.
- Define reusable TypeScript interfaces/types under `src/types/` where useful.
- Use believable but clearly fictional names, email addresses, departments, dates, counts, and records.
- Never use real employee personal information, credentials, access tokens, or confidential company data.
- Do not make fake data look like data retrieved from a real server. Label demo-only or simulated states where appropriate.
- Avoid hardcoding the same record in multiple components. Import it from the shared data source.
- Use deterministic mock data so the UI remains consistent between builds and tests.
- If a feature allows create, edit, approve, submit, or delete actions, simulate the interaction locally and make it clear that no real record is being changed or sent.
- Do not use `fetch()` to call imaginary endpoints. Do not create placeholder API clients unless explicitly requested.

## 5. Astro rendering and interactivity

- Prefer static rendering for dashboards, cards, tables, notices, directory entries, and other read-only content.
- Add client-side JavaScript only for meaningful interactions such as menus, tabs, filters, search, dialogs, form validation, or local demo workflows.
- Keep interactive behavior isolated in small components or modules.
- Do not turn an entire page into a client-rendered application to support one small interactive control.
- Ensure interactive controls work with keyboard input and have visible focus states.
- Do not rely on hover alone to reveal important actions or information.
- Use URL query parameters or browser history only when they improve navigation or shareability; do not add complexity without a requirement.
- Avoid direct DOM manipulation when a clear component-level approach is available.
- Clean up event listeners when their lifecycle requires it.

## 6. UI and design standards

Aim for a professional, calm, consistent office-productivity interface.

- Use a consistent spacing scale, typography system, color palette, border radius, shadows, and icon style.
- Establish reusable design tokens with CSS custom properties.
- Prefer CSS Grid and Flexbox for responsive layouts.
- Build reusable components for repeated patterns such as buttons, cards, badges, form fields, tables, dialogs, and navigation items.
- Keep visual hierarchy clear: page title, supporting description, primary action, and content sections.
- Use status labels consistently (for example: Pending, Approved, Rejected, Draft).
- Avoid excessive gradients, animation, decorative effects, and inconsistent colors.
- Provide empty, loading-like (if simulated), error, and success states where relevant. Do not imply a real network request is occurring.
- Use local assets from `public/` when available. Do not reference missing images or invent asset paths.
- Use responsive layouts that work on mobile, tablet, laptop, and desktop.
- Do not use fixed widths that cause horizontal overflow on small screens.

## 7. CSS conventions

- Follow the repository's existing styling approach.
- Use Astro component-scoped `<style>` blocks for styles that belong to one component.
- Put shared resets, design tokens, typography defaults, and global utilities in the existing global stylesheet (or create one only if needed).
- Use clear, consistent class names. Avoid overly generic selectors that unintentionally affect other components.
- Prefer CSS variables for repeated colors, spacing, radii, and sizing values.
- Avoid `!important` unless there is a documented, unavoidable reason.
- Avoid duplicating styles. Extract shared patterns when repetition is meaningful.
- Do not use inline styles for ordinary styling.
- Check responsive behavior at narrow and wide viewport sizes.

## 8. Accessibility

Target WCAG 2.2 AA practices where reasonably applicable.

- Use semantic landmarks (`header`, `nav`, `main`, `aside`, `footer`) and a logical heading hierarchy.
- Use buttons for actions and links for navigation.
- Associate every form control with a visible or programmatic label.
- Provide meaningful alternative text for informative images; use empty alt text for decorative images.
- Ensure adequate color contrast and never communicate status using color alone.
- Support keyboard navigation and visible focus indicators.
- Give dialogs accessible names, manage focus appropriately, and support Escape to close when suitable.
- Use `aria-*` only when native HTML semantics are insufficient.
- Respect reduced-motion preferences.
- Tables must have appropriate headers and captions where useful.

## 9. Forms and validation

- Use appropriate input types and autocomplete attributes.
- Validate user input on the client for demo usability, but do not describe client-side validation as secure server validation.
- Show clear, actionable validation messages.
- Preserve user input when validation fails.
- Prevent accidental duplicate local submissions where relevant.
- Clearly state when a form action is simulated and does not persist data.
- Never collect real passwords, payment information, government identifiers, or other sensitive data for a mock-only portal.

## 10. Security and privacy

- Treat all user-provided text as untrusted.
- Do not use unsafe HTML injection such as `innerHTML` with untrusted content.
- Do not place secrets, private keys, credentials, or real personal data in source code.
- Do not implement pretend authentication that could be mistaken for production security.
- If a demo login screen is requested, label it as a demonstration and use non-sensitive mock credentials only.
- Do not add analytics, tracking, external scripts, or third-party services without explicit approval.
- Do not expose sensitive details in URLs, logs, or browser storage.

## 11. Code quality

- Use descriptive names for components, functions, variables, and types.
- Keep components focused and reasonably small.
- Avoid duplicated logic; extract shared helpers when it improves clarity.
- Prefer explicit types over `any`. If `any` is unavoidable, explain why.
- Handle nullable and optional values safely.
- Avoid deeply nested conditionals and overly complex components.
- Keep formatting consistent with the repository's formatter and lint rules.
- Add comments to explain non-obvious decisions, not to narrate obvious code.
- Do not leave dead code, debug logging, unused imports, or unexplained TODOs.
- Do not suppress TypeScript or lint errors just to make checks pass.

## 12. Testing and verification

After changes:

1. Run the project's relevant formatter and lint scripts if available.
2. Run TypeScript checks if configured.
3. Run the Astro build.
4. Run relevant tests if present.
5. Manually inspect the affected page at mobile and desktop widths when browser preview is available.
6. Check browser console output and fix errors introduced by the change.

Use the actual scripts in `package.json`; do not assume script names. If a check cannot be run, state that clearly rather than claiming it passed.

## 13. Future backend integration boundary

The current implementation must remain frontend-only.

- Keep data access separate from presentation so mock data can later be replaced by API calls.
- Components should consume typed data through props or small data-access modules.
- Avoid coupling UI components to a particular future backend, database, authentication provider, or API format.
- Do not implement backend routes, database schemas, migrations, server actions, or authentication infrastructure unless explicitly requested in a later task.
- When backend integration is requested, first agree on the API contract and loading/error/authentication behavior before replacing mock data.

## 14. Agent behavior and delivery

- Explain the intended approach briefly for substantial changes.
- Implement the requested change rather than only describing how to do it.
- Preserve existing user changes and avoid destructive commands.
- Do not silently remove existing features or dependencies.
- Report the main files changed and any commands/checks run.
- Mention remaining limitations, especially simulated functionality.
- Ask a concise clarification only when a missing requirement materially blocks implementation; otherwise make a sensible, reversible choice.


## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
