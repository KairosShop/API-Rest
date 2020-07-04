const fs = require('fs');

const template = fs.readFileSync('app.template.yaml').toString();
const content = renderTemplate(template, process.env);
fs.writeFileSync('app.yaml', content);


const templateStaging = fs.readFileSync('staging-app.template.yaml').toString();
const contentStaging = renderTemplate(templateStaging, process.env);
fs.writeFileSync('app.yaml', contentStaging);

function renderTemplate(template, variables) {
    Object
        .entries(variables)
        .forEach(([key, value]) => {
            template = template.replace(new RegExp(`<% ${key} %>`, 'g'), value);
        });
    return template;
}