// Adobe experience content. Loaded by index.html into the Experience panel.
document.getElementById('exp-adobe').innerHTML = `
  <h3>Product Engineer Intern</h3>
  <div class="experience-meta">May 2026 &ndash; July 2026 <span aria-hidden="true">&middot;</span> Noida, India</div>
  <p>During my internship with <strong>Adobe Experience Platform</strong>, I worked on <strong>Visual Copilot</strong>, an AI assistant for complex product workflows. My focus was extending it from answering requests to <strong>making edits</strong>, using <strong>LangGraph</strong> for orchestration and <strong>Playwright</strong> for browser automation within an architecture designed for reuse across products.</p>
  <p>Making those edits reliable meant helping the assistant understand what the user was working with. I refined its <strong>prompts and reasoning pipeline</strong> to interpret requests against the live canvas, saved entities, and user-selected context, using <strong>few-shot examples</strong> to improve consistency across editing scenarios.</p>
  <p>Alongside this, I introduced <strong>TOON</strong>, a compact data format that reduced <strong>input tokens by ~15%</strong> and <strong>output tokens by ~10&ndash;12%</strong>. I also extended the evaluation suite with <strong>entity-editing scenarios</strong> to catch hallucinations and regressions as the assistant's capabilities grew.</p>
`;
