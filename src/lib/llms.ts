import { DATA } from "@/data/resume";

// Builds /llms.txt (a short, link-first index) and /llms-full.txt (the whole profile)
// following the llmstxt.org format: H1, blockquote summary, prose, then H2 link lists.

const abs = (path: string) => new URL(encodeURI(path), DATA.url).toString();

const RESUME_URL = abs("/Mohammed Husamuddin Resume.pdf");

const toLines = (text: string | readonly string[]) =>
  typeof text === "string" ? [text] : [...text];

function header() {
  return [
    `# ${DATA.fullName} (${DATA.name})`,
    "",
    `> ${DATA.headline}`,
    "",
    ...DATA.bio.flatMap((p) => [p, ""]),
    `Relevant if you are looking for: AI engineers, senior AI / LLM engineers, AI agent developers, product builders, founding or full-stack engineers, or a writer on AI and building. Based in ${DATA.location}.`,
    "",
  ];
}

function contactSection() {
  const { social } = DATA.contact;
  return [
    "## Contact",
    "",
    `- [Email](mailto:${DATA.contact.email}): ${DATA.contact.email}`,
    `- [LinkedIn](${social.LinkedIn.url})`,
    `- [GitHub](${social.GitHub.url})`,
    `- [X / Twitter](${social.X.url})`,
    "",
  ];
}

function workSection(full: boolean) {
  return [
    "## Work",
    "",
    ...DATA.work.flatMap((w) => {
      const line = `- [${w.title}, ${w.company}](${w.href}): ${w.start} – ${w.end}, ${w.location}`;
      return full
        ? [line, ...toLines(w.description).map((d) => `  - ${d}`)]
        : [line];
    }),
    "",
  ];
}

function projectsSection(full: boolean) {
  return [
    "## Projects",
    "",
    ...DATA.projects.flatMap((p) => {
      const line = `- [${p.title}](${p.href}): ${p.description}`;
      return full
        ? [
            line,
            `  - Dates: ${p.dates}`,
            `  - Stack: ${p.technologies.join(", ")}`,
            ...p.links.map((l) => `  - ${l.type}: ${l.href}`),
          ]
        : [line];
    }),
    "",
  ];
}

function writingSection() {
  return [
    "## Writing",
    "",
    `- [Blog](${DATA.writing.blog}): essays and technical notes on AI, engineering and building products`,
    `- [Value Vault newsletter](${DATA.writing.newsletter}): essays on whatever he finds interesting`,
    "",
  ];
}

export function buildLlmsTxt() {
  return [
    ...header(),
    "## About",
    "",
    `- [Portfolio](${DATA.url}): work history, education, skills and projects`,
    `- [Full profile for LLMs](${abs("/llms-full.txt")}): everything on this site as plain text`,
    `- [Resume (PDF)](${RESUME_URL})`,
    "",
    ...workSection(false),
    ...projectsSection(false),
    ...writingSection(),
    ...contactSection(),
    "## Optional",
    "",
    `- [Projects index](https://projects.ihusam.tech/)`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt() {
  return [
    ...header(),
    ...workSection(true),
    ...projectsSection(true),
    "## Education",
    "",
    ...DATA.education.map(
      (e) => `- [${e.school}](${e.href}): ${e.degree}, ${e.start} – ${e.end}`
    ),
    "",
    "## Skills",
    "",
    DATA.skills.join(", "),
    "",
    ...writingSection(),
    ...contactSection(),
    "## Links",
    "",
    `- [Portfolio](${DATA.url})`,
    `- [Resume (PDF)](${RESUME_URL})`,
    "",
  ].join("\n");
}
