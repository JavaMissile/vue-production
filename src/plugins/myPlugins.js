

let myPlugins = {};

myPlugins.install = function (Vue, options) {
    Vue.directive(options.name, () => { })
}

export default myPlugins;