try {
    console.log(require.resolve("@packages/renderer"));
    process.exit(0)
} catch (e) {
    console.error(e)
    process.exit(1)
}