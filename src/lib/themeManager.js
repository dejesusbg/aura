import chroma from "chroma-js";

const COLOR_TONES = [100, 99, 95, 90, 80, 60, 50, 40, 30, 20, 10];

const COLOR_SCHEMES = {
  primary: [
    [0, 0, 100],
    [59, 100, 99],
    [14, 100, 96],
    [7, 100, 93],
    [2, 100, 82],
    [0, 55, 68],
    [1, 40, 57],
    [0, 34, 48],
    [1, 43, 38],
    [3, 58, 28],
    [5, 100, 18],
  ],
  secondary: [
    [0, 0, 100],
    [-330, 100, 99],
    [2, 100, 96],
    [0, 100, 92],
    [3, 63, 83],
    [0, 25, 61],
    [0, 19, 50],
    [-2, 21, 41],
    [-1, 25, 31],
    [-4, 33, 22],
    [-4, 48, 13],
  ],
  tertiary: [
    [0, 0, 100],
    [55, 100, 99],
    [10, 100, 96],
    [3, 65, 92],
    [3, 27, 81],
    [0, 12, 60],
    [1, 9, 49],
    [-1, 11, 40],
    [-2, 13, 31],
    [-2, 18, 22],
    [-7, 26, 13],
  ],
  neutral: [
    [0, 0, 100],
    [-8, 100, 99],
    [15, 19, 95],
    [27, 9, 89],
    [3, 5, 78],
    [0, 2, 57],
    [0, 2, 47],
    [-9, 3, 37],
    [-5, 2, 28],
    [-25, 3, 19],
    [-30, 10, 10],
  ],
  "neutral-variant": [
    [0, 0, 100],
    [51, 100, 99],
    [11, 55, 96],
    [11, 24, 90],
    [6, 11, 79],
    [0, 5, 58],
    [6, 4, 47],
    [-4, 5, 38],
    [0, 7, 29],
    [-2, 8, 20],
    [1, 13, 12],
  ],
};

export default class Theme {
  static #generateColorScheme(primary, secondary = null) {
    const mainColor = chroma(primary).hsl();

    const hues = {
      primary: mainColor[0],
      secondary: secondary ? chroma(secondary).get("hsl.h") : (mainColor[0] + 88) % 360,
      tertiary: (mainColor[0] - 12) % 360,
      neutral: (mainColor[0] - 16) % 360,
      "neutral-variant": (mainColor[0] + 8) % 360,
    };

    let cssText = "";

    for (const [schemeName, colorScheme] of Object.entries(COLOR_SCHEMES)) {
      const hue = hues[schemeName];

      colorScheme.forEach((scheme, index) => {
        const [hueOffset, saturation, lightness] = scheme;
        const colorDetails = {
          h: (hue + hueOffset) % 360,
          s: saturation / 100,
          l: lightness / 100,
        };

        const cssName = `--${schemeName}-${COLOR_TONES[index]}`;
        cssText += `${cssName}: ${chroma(colorDetails)};`;

        if (["neutral", "neutral-variant"].includes(schemeName) && [10, 20, 30, 90, 99].includes(COLOR_TONES[index])) {
          for (let elevation = 1; elevation < 5; elevation++) {
            const alpha = (elevation - 1) * 0.05;
            const overlay = this.#calculateOverlay(colorDetails, mainColor, alpha, hue, elevation);
            cssText += `${cssName}-e${elevation}: ${chroma(overlay)};`;
          }
        }
      });
    }

    this.#applyStyle(cssText);
  }

  static #calculateOverlay(source, backdrop, alpha, hue, elevation) {
    let overlay = {
      h: hue,
      s: source.s * 0.9 + (backdrop[1] - source.s) * (1 - alpha) * alpha * 0.20833333,
      l: source.l * 0.957142857 + (backdrop[2] - source.l) * (1 - alpha) * alpha * 0.77,
    };

    overlay.l += source.l > 0.5 ? (elevation + 5.5) / 200 : (elevation + 1.5) / 150;
    return overlay;
  }

  static #applyStyle(cssText) {
    let style = document.getElementById("material-theme") || document.createElement("style");
    style.setAttribute("id", "material-theme");
    style.textContent = `body { ${cssText} }`;

    document.head.appendChild(style);
  }

  static #getPreferredColorScheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  static set(primary, secondary) {
    this.#generateColorScheme(primary, secondary);

    const theme = localStorage.getItem("theme") || this.#getPreferredColorScheme();
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }

  static toggle() {
    const currentTheme = document.body.classList.contains("light") ? "dark" : "light";
    document.body.className = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }
}
