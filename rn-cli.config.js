module.exports = {
    getSourceExts() {
        return ["ts", "tsx"]
    },

    getTransformModulePath() {
        return require.resolve("./node_modules/react-native-typescript-transformer")
    },
}