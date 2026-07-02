/*
  OTSKY CMS config.
  Setelah Apps Script Web App jadi, isi googleSheetEndpoint dengan URL /exec.
  Jangan isi token Google, password Google, service account key, atau secret lain di file ini.
*/
window.OTSKY_CMS = {
  googleSheetEndpoint: "",
  fallbackContentUrl: "content.json",
  requestTimeoutMs: 15000
};
