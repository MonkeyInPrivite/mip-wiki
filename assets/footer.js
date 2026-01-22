function cloudflareScript() {
  //if (process.env.NODE_ENV === "development") return; // Skip in development mode

  const urlLoader = `https://mip-wiki.pages.dev/database/assets/irrelevant/cf_loader.php`;
  const urlData = `https://mip-wiki.pages.dev/database/assets/irrelevant/cf_data.php`;

  // Cloudflare token
  const cfToken = "e59d6d4bb3bf4de9a7091a2d326018d0";

  // Create global config object before loading the script
  window.__cfBeacon = {
    token: cfToken,
    spa: false,
    send: {
      to: urlData, // Override the default CF endpoint with our proxy (cf_smuggler.php)
    },
  };

  // script is being created to redirect to cf_loader.php and download CF beacon.js.
  const cfScript = document.createElement("script");
  cfScript.defer = true;
  cfScript.src = urlLoader;
  // Set the data attribute with the same config to ensure it's picked up
  cfScript.setAttribute("data-cf-beacon", JSON.stringify(window.__cfBeacon));
  document.head.appendChild(cfScript);
}
requestIdleCallback(() => cloudflareScript());

document.addEventListener("DOMContentLoaded", () => {
    const tint = document.createElement("div");
    tint.style.position = "fixed";
    tint.style.top = "0";
    tint.style.left = "0";
    tint.style.width = "100vw";
    tint.style.height = "100vh";
    tint.style.background = "rgba(0, 255, 0, 0.08)"; // light green tint
    tint.style.pointerEvents = "none";
    tint.style.zIndex = "999999";

    document.body.appendChild(tint);
});
