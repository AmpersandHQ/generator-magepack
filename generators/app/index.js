var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    // note: arguments and options should be defined in the constructor.
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    getInput: function () {
        var questions = [{
            type    : 'input',
            name    : 'moduleName',
            message : 'Your module name? (lowercase, URL-safe)',
            validate: function (answer) {
                return (answer === '') ? 'Module name is required' : true;
            }
        }, {
            type    : 'input',
            name    : 'name',
            message : 'Module author name and email?',
            default : 'Your Name <your@email.co>',  // Default
            validate: function (answer) {
                return (answer === '') ? 'Module author is required' : true;
            }
        },
         {
            type    : 'input',
            name    : 'description',
            message : 'Module description?',
            validate: function (answer) {
                return (answer === '') ? 'Project description is required' : true;
            }
        }];

        this.prompt(questions).then(function(answers){
            this._copyFiles(answers);
            this._copyPackagesJson(answers);
        }.bind(this));
    },
    _copyPackagesJson: function (answers) {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('./package.json'),
            {
                module: answers.moduleName.toLowerCase().replace(' ', '-'),
                description: answers.description,
                author: answers.name
            }
        );
    },
    _copyFiles: function () {
        this.fs.copy(
            this.templatePath('**'),
            this.destinationPath('./')
        );

        this.fs.copy(
            this.templatePath('.*'),
            this.destinationRoot('./')
        );
    }
});