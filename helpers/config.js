const { readFileSync, writeFileSync } = require("fs");

function checkConfig() {
  const configFile = readFileSync("./config.json", { encoding: "utf-8", flag: "a+" });
  if (!configFile.length) {
    writeFileSync(
      "./config.json",
      JSON.stringify({ TOKEN: "MTEwNzMyMTk4NDQ5MDE1MjAyNg.GI6srY.vs-KIY1LuejspnHur4_0gNrnWxaR7PTuLJPLHY" }, undefined, 2)
    );
    console.warn("[CONFIG] Config dosyası sıfırdan oluşturuldu. Lütfen ayarları doldurunuz.");
    return false;
  }
  return true;
}

module.exports = {
  checkConfig,
};
