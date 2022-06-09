module.exports = (plop) => {
  plop.setGenerator('componente', {
    description: 'Create a component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente',
      },
      {
        type: 'list',
        name: 'hasCustomPath',
        message: 'Path personalizado?',
        choices: [
          'Sim',
          'Não'
        ],
        default: 'Não'
      },
      {
        type: 'input',
        name: 'customPath',
        message: 'Path (ex: "src/custom/path/")',
        when: (data) => data.hasCustomPath === 'Sim'
      }
    ],

    actions: (data) => {
      const actions = []
      let path = 'src/components/'
      
      if (data.hasCustomPath === 'Sim') {
        path = data.customPath
        console.log(path)
      }

      actions.push({
        type: 'add',
        path: `${path}components/{{ pascalCase name}}/{{ pascalCase name }}.tsx`,
        templateFile: `src/templates/Component/Component.tsx.hbs`,
      })

      actions.push({
        type: 'add',
        path: `${path}components/{{ pascalCase name}}/index.ts`,
        templateFile: 'src/templates/Component/index.ts.hbs'
      })
      
      return actions
    }
  })
}
