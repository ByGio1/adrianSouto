const outputFolder = "./images/webp";
const produceWebP = async () => {
    // Load ESM modules using import(),
    // it returns a Promise which resolves to
    // default export as 'default' and other named exports.
    // In this case we need default export.
    const imagemin = (await import("imagemin")).default;
    const webp = (await import("imagemin-webp")).default;
    await imagemin(["images/*.png"], {
        destination: outputFolder,
        plugins: [
            webp({
                lossless: true,
            }),
        ],
    });
    console.log("PNGs processed");
    await imagemin(["images/*.{jpg,jpeg}"], {
        destination: outputFolder,
        plugins: [
            webp({
                quality: 65,
            }),
        ],
    });
    console.log("JPGs and JPEGs processed");
};
produceWebP();

