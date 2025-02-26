import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);

        var CookieDeprecationLabel = {
            getValue: function() {
                // ... Sizning kod
            },
            nl: function() {
                this.getValue();
            }
        };

        CookieDeprecationLabel.nl();

      })(window, document, "script", "dataLayer", "GTM-PS6P7Q2Z");
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
