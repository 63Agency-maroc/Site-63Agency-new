(function captureUtm() {
  const KEY = '63agency-utm';
  const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  try {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    let hasAny = false;

    PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value != null && value !== '') {
        utm[key] = value;
        hasAny = true;
      } else {
        utm[key] = '';
      }
    });

    if (!hasAny) return;

    sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {
    /* storage / URL unavailable — ignore */
  }
})();
