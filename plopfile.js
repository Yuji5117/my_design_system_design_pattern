export default function (plop) {
  plop.setGenerator("component", {
    description: "generate component template",
    prompts: [
      {
        type: "input",
        name: "parentPath",
        message: "src/components/{path please}",
      },
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{parentPath}}/{{name}}/index.ts",
        templateFile: "plop-templates/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{parentPath}}/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/components/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{parentPath}}/{{name}}/{{name}}.stories.tsx",
        templateFile: "plop-templates/components/Component.stories.tsx.hbs",
      },
    ],
  });
}
