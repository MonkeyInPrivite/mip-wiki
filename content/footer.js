function cloudflareScript() {
  // REPLACE THESE with your actual Worker URLs from above
  const urlLoader = "https://cf-loader.monkeyinprivite.workers.dev";
  const urlData = "https://cf-data.monkeyinprivite.workers.dev";

  // Your Cloudflare Web Analytics token
  const cfToken = "e59d6d4bb3bf4de9a7091a2d326018d0";

  // Configure the beacon
  window.__cfBeacon = {
    token: cfToken,
    spa: false,
    send: {
      to: urlData,
    },
  };

  console.log('✅ CF Config set:', window.__cfBeacon);

  // Load the beacon script
  const cfScript = document.createElement("script");
  cfScript.defer = true;
  cfScript.src = urlLoader;
  cfScript.setAttribute("data-cf-beacon", JSON.stringify(window.__cfBeacon));
  
  cfScript.onload = () => console.log('✅ CF Beacon script loaded');
  cfScript.onerror = () => console.error('❌ CF Beacon script failed to load');
  
  document.head.appendChild(cfScript);
}

// Execute when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cloudflareScript);
} else {
  cloudflareScript();
}

// Optional green tint for testing
document.addEventListener("DOMContentLoaded", () => {
    const tint = document.createElement("div");
    tint.style.position = "fixed";
    tint.style.top = "0";
    tint.style.left = "0";
    tint.style.width = "100vw";
    tint.style.height = "100vh";
    tint.style.background = "rgba(0, 255, 0, 0.08)";
    tint.style.pointerEvents = "none";
    tint.style.zIndex = "999999";
    document.body.appendChild(tint);
});
