/* eslint-disable max-len */
module.exports = function (plop) {
  // components
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'atomic',
        message: 'Choose atomic?',
        choices: [
          {name: 'atoms', value: 'atoms'},
          {name: 'molecules', value: 'molecules'},
          {name: 'organisms', value: 'organisms'},
          {name: 'templates', value: 'templates'},
          {name: 'pages', value: 'pages'},
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: data => {
      const path = `src/components/${data.atomic}/`;
      const actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
          templateFile: 'generators/component/index.ts.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generators/component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'generators/component/Component.test.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{camelCase name}}.styles.ts',
          templateFile: 'generators/component/Component.styles.ts.hbs',
        },
      ];
      return actions;
    },
  });
  // hooks
  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.ts',
        templateFile: 'generators/hooks/hook.ts.hbs',
      },
      {
        type: 'add',
        path: '__tests__/hooks/{{camelCase name}}.test.ts',
        templateFile: 'generators/hooks/hook.test.ts.hbs',
      },
    ],
  });
};
