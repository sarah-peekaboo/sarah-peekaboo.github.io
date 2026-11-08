const app = document.querySelector("#app-root");
const navigation = document.querySelector("#primary-navigation");
const menuToggle = document.querySelector(".menu-toggle");

const icons = {
  clothes: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m8 4 4 2 4-2 4 3-2 4-2-1v10H8V10l-2 1-2-4 4-3Z"/><path d="M9 5c0 2 1.2 3 3 3s3-1 3-3"/></svg>',
  shoes: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 14c2 0 3-2 4-5l3 2c1 2 3 3 7 3 1.2 0 2 .8 2 2v3H4v-5Z"/><path d="M4 17h16"/></svg>',
  home: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 10h16l-1 10H5L4 10Z"/><path d="M3 10 5 5h14l2 5M8 5l1 5m6-5-1 5"/></svg>',
  book: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8"/></svg>',
  toy: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M8 10h.01M16 10h.01M8 15c1.1 1.2 2.4 2 4 2s2.9-.8 4-2"/></svg>',
  furniture: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 13v-2a3 3 0 0 1 6 0v2h4v-2a3 3 0 0 1 6 0v2"/><path d="M3 13h18v5H3zM5 18v3m14-3v3"/></svg>',
  plug: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M9 3v6m6-6v6M7 9h10v2a5 5 0 0 1-5 5v5m-5-5h10"/></svg>',
  decor: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 3v18M5 7l14 10M19 7 5 17"/><circle cx="12" cy="12" r="8"/></svg>',
  donation: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 8h16l-1 12H5L4 8Z"/><path d="M9 8V5h6v3m-6 5h6"/></svg>',
  card: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18m-14 5h4"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></svg>',
  help: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.7 1.5c-1 1.2-2.2 1.3-2.2 3m0 3h.01"/></svg>'
};

const categories = [
  { id: "kleidung", title: "Kleidung", icon: "clothes", summary: "Aktuell: Winterkleidung", search: ["kleidung", "winterkleidung", "jacke", "mantel", "hose", "sommerkleidung"] },
  { id: "schuhe", title: "Schuhe", icon: "shoes", summary: "Aktuell: Winterschuhe", search: ["schuhe", "winterschuhe", "stiefel", "sportschuhe"] },
  { id: "hausrat", title: "Hausrat", icon: "home", summary: "Porzellan, Töpfe, Pfannen, Tücher", search: ["hausrat", "teller", "porzellan", "topf", "töpfe", "pfanne", "pfannen", "glas", "gläser", "tuch", "handtuch", "duschtuch"] },
  { id: "buecher", title: "Bücher", icon: "book", summary: "Im Sortiment; Spendenannahme unbestätigt", search: ["buch", "bücher"] },
  { id: "spielzeug", title: "Spielzeug", icon: "toy", summary: "Im Sortiment; Spendenannahme unbestätigt", search: ["spielzeug"] },
  { id: "moebel", title: "Möbel", icon: "furniture", summary: "Anfrage mit Fotos per E-Mail", search: ["möbel", "moebel", "sofa", "stuhl", "schrank"] },
  { id: "elektrogeraete", title: "Elektrogeräte", icon: "plug", summary: "Werden nicht angenommen", search: ["elektro", "elektrogerät", "elektrogeräte", "gerät", "geraet"] },
  { id: "dekoration", title: "Dekoration", icon: "decor", summary: "Aktuell angenommen", search: ["deko", "dekoration", "dekoartikel"] }
];

const locations = [
  { id: "kalk", name: "fairstore Kalk", address: "Kalker Hauptstraße 177", postcode: "51103 Köln", phone: "0221 168566-87", tel: "+4922116856687", store: true },
  { id: "muelheim", name: "fairstore Mülheim", address: "Buchheimer Straße 46", postcode: "51063 Köln", phone: "0221 1683094-0", tel: "+4922116830940", store: true },
  { id: "suedstadt", name: "fairstore Südstadt", address: "Severinstraße 57", postcode: "50678 Köln", phone: "0221 16822938", tel: "+4922116822938", store: true },
  { id: "eigelstein", name: "fairstore Eigelstein", address: "Eigelstein 117", postcode: "50668 Köln", phone: "0221 56088503", tel: "+4922156088503", store: true },
  { id: "porz", name: "fairstore Porz", address: "Hermannstr. 1–3", postcode: "51143 Köln", phone: "02203 1868410", tel: "+4922031868410", store: true },
  { id: "spendenlager", name: "Spendenlager Poll", address: "Poller Kirchweg 6", postcode: "Köln", phone: "0221 16889997", tel: "+4922116889997", store: false }
];

const faqs = [
  { question: "Welche Kleidung wird aktuell angenommen?", answer: "Gut erhaltene, saubere und vollständige Winterkleidung wird aktuell angenommen. Sommerbekleidung wird momentan nicht angenommen." },
  { question: "Müssen Spenden sauber und vollständig sein?", answer: "Ja. Die Spenden sollen gut erhalten, sauber und vollständig sein." },
  { question: "Werden Möbel angenommen?", answer: "Bitte Anfragen zur Möbelspende mit Fotos per E-Mail an spendenlager@diakonie-michaelshoven.de senden." },
  { question: "Kann ich Elektrogeräte spenden?", answer: "Nein. Laut den vorliegenden fairstore-Angaben werden Elektrogeräte nicht angenommen." },
  { question: "Wie viel darf ich abgeben?", answer: "Pro Spende ist ein blauer Sack oder eine Umzugskiste vorgesehen." },
  { question: "Welche Vorteile bietet die faircard?", answer: "Alle Kunden erhalten bis zu 3 % Rabatt. Menschen mit nachweislich geringem Einkommen erhalten abhängig von der Ware bis zu 30 % Rabatt." },
  { question: "Welche Nachweise kommen für die faircard infrage?", answer: "Genannt sind unter anderem Köln-Pass, Bewilligungsbescheid (ALG I, ALG II, Sozialgeld), BAföG-/BAB-Bescheid, Wohngeldbescheid, Kindergeldzuschlagsbescheid und Einkommensnachweis. Ein Studentenausweis wird ebenfalls genannt." },
  { question: "Wie lange dauert die Bearbeitung?", answer: "Eine genaue Bearbeitungsdauer ist in den vorliegenden Angaben nicht bestätigt." },
  { question: "Wo kann ich den faircard-Antrag einreichen?", answer: "Laut den vorliegenden Angaben kann der Antrag an der Kasse erfragt werden; ausgefüllte Unterlagen mit Nachweiskopie können per E-Mail oder Post gesendet werden." }
];

function icon(name) {
  return icons[name] || icons.help;
}

function routeTo(path) {
  window.location.hash = `#${path}`;
}

function categoryCard(category) {
  return `<a class="category-card" href="#/spenden/${category.id}">
    ${icon(category.icon)}
    <span><h3>${category.title}</h3><p>${category.summary}</p></span>
  </a>`;
}

function locationCard(location) {
  const hours = location.store
    ? "<p><strong>Öffnungszeiten</strong><br>Mo–Fr 10–18 Uhr<br>Samstag 10–16 Uhr</p>"
    : "<p><strong>Spendenannahme</strong><br>Mo–Fr 08:30–16 Uhr</p>";
  return `<a class="card address-card location-link" href="#/standorte/${location.id}">
    <h3>${location.name}</h3>
    <address>${location.address}<br>${location.postcode}</address>
    ${hours}
    <span class="phone">${location.phone}</span>
  </a>`;
}

function pageHome() {
  return `<section class="hero">
    <p class="eyebrow">fairstore Köln</p>
    <h1>Gutes weitergeben.<br>Fair einkaufen.</h1>
    <p class="lede">Entdecke, was du spenden kannst, informiere dich über die faircard und finde deinen fairstore in Köln.</p>
    <div class="grid grid-two">
      <a class="card feature-card" href="#/spenden">
        <div>${icon("donation")}<div class="feature-copy"><h2>Ich möchte etwas spenden</h2><p>Winterkleidung, Winterschuhe, Hausrat &amp; Deko. Ein blauer Sack oder eine Umzugskiste; Abgabe in den fünf fairstores oder in Poll.</p></div></div>
        <span class="button">Spenden entdecken</span>
      </a>
      <a class="card feature-card" href="#/faircard">
        <div>${icon("card")}<div class="feature-copy"><h2>Ich möchte die faircard nutzen</h2><p>Bis zu 3 % Rabatt für alle; bis zu 30 % mit passendem Nachweis.</p></div></div>
        <span class="button button-secondary">faircard entdecken</span>
      </a>
    </div>
    <div class="quick-links home-quick-links" aria-label="Schnelleinstieg">
      <a class="quick-link" href="#/spenden/bedingungen">Spendenbedingungen</a>
      <a class="quick-link" href="#/faircard/beantragen">faircard beantragen</a>
      <a class="quick-link" href="#/standorte">Standorte finden</a>
    </div>
  </section>
  <section class="section-block">
    <div class="section-heading"><h2>Häufig gesucht</h2><p>Wähle einen Gegenstand, um die bekannten Annahmehinweise zu sehen.</p></div>
    <div class="quick-links">${["kleidung", "schuhe", "hausrat", "buecher", "elektrogeraete", "moebel"].map(id => {
      const item = categories.find(category => category.id === id);
      return `<a class="quick-link" href="#/spenden/${item.id}">${item.title}</a>`;
    }).join("")}</div>
  </section>
  <section class="section-block card card-muted">
    <h2>Sortiment</h2>
    <p>Damen-, Herren-, Sport- und Kinderbekleidung, Spielzeug, Dekoartikel, Hausrat, Heimtextilien, Bücher, Musik, Filme, Taschen, Koffer, Rucksäcke und Möbel.</p>
  </section>`;
}

function pageDonations() {
  return `<a class="back-link" href="#/">← Zur Startseite</a>
    <p class="eyebrow">Spenden</p>
    <h1>Was kann ich spenden?</h1>
    <p class="lede">Hier erfährst du, welche Sachspenden aktuell angenommen werden und worauf du bei der Abgabe achten solltest.</p>
    <form class="search-form" id="donation-search">
      <label class="sr-only" for="donation-query">Was möchtest du spenden?</label>
      <input id="donation-query" name="query" type="search" placeholder="Was möchtest du spenden?" autocomplete="off">
      <button type="submit">Suchen</button>
    </form>
    <div id="search-results" class="search-results" role="status" aria-live="polite"></div>
    <div class="section-heading"><h2>Kategorien</h2></div>
    <div class="category-grid">${categories.map(categoryCard).join("")}</div>
    <div class="action-row section-block">
      <a class="button button-secondary" href="#/spenden/bedingungen">Spendenbedingungen</a>
      <a class="button" href="#/standorte">Standorte & Abgabe</a>
      <a class="button button-secondary" href="#/spenden/pruefer">Spenden prüfen</a>
    </div>`;
}

function pageDonationCategory(id) {
  const category = categories.find(item => item.id === id);
  if (!category) return pageDonations();
  const summaries = {
    kleidung: { status: "Aktuell angenommen: gut erhaltene Winterkleidung. Sommerbekleidung wird momentan nicht angenommen.", accepted: "Winterkleidung für Erwachsene und Kinder.", no: "Sommerbekleidung wird derzeit nicht angenommen.", extra: "Abgabe in kleinen Mengen während der Öffnungszeiten." },
    schuhe: { status: "Aktuell angenommen: gut erhaltene Winterschuhe.", accepted: "Winterschuhe.", no: "Andere Schuharten sind in den vorliegenden Angaben zur aktuellen Annahme nicht bestätigt.", extra: "Abgabe in kleinen Mengen während der Öffnungszeiten." },
    hausrat: { status: "Aktuell angenommen: Hausratartikel, Porzellan, Töpfe und Pfannen sowie Hand- und Duschtücher.", accepted: "Hausrat, Porzellan, Töpfe, Pfannen, Handtücher und Duschtücher.", no: "Gläser sowie Wein- und Sektgläser werden momentan nicht angenommen.", extra: "Abgabe in kleinen Mengen während der Öffnungszeiten." },
    buecher: { status: "Bücher gehören zum Sortiment. Ob sie aktuell als Spende angenommen werden, ist in den vorliegenden Angaben nicht bestätigt.", accepted: "Bücher sind im Secondhand-Sortiment aufgeführt.", no: "Aktuelle Annahmeregeln für Bücherspenden sind nicht bestätigt.", extra: "Bitte vor der Abgabe beim fairstore nachfragen." },
    spielzeug: { status: "Spielzeug gehört zum Sortiment. Ob es aktuell als Spende angenommen wird, ist in den vorliegenden Angaben nicht bestätigt.", accepted: "Spielzeug ist im Secondhand-Sortiment aufgeführt.", no: "Aktuelle Annahmeregeln für Spielzeugspenden sind nicht bestätigt.", extra: "Bitte vor der Abgabe beim fairstore nachfragen." },
    moebel: { status: "Möbelspenden werden bitte vorab angefragt.", accepted: "Eine Annahme ist nicht pauschal bestätigt.", no: "Bitte Möbel nicht unangekündigt abgeben.", extra: "Anfrage mit Fotos an spendenlager@diakonie-michaelshoven.de senden." },
    elektrogeraete: { status: "Elektrogeräte werden laut den vorliegenden fairstore-Angaben nicht angenommen.", accepted: "Keine Elektrogeräte.", no: "Elektrogeräte werden nicht angenommen.", extra: "Bitte keine Elektrogeräte abgeben." },
    dekoration: { status: "Dekoartikel werden aktuell angenommen.", accepted: "Gut erhaltene Dekoartikel.", no: "Weitere Ausschlüsse für Dekoartikel sind nicht bestätigt.", extra: "Abgabe in kleinen Mengen während der Öffnungszeiten." }
  };
  const info = summaries[id];
  return `<a class="back-link" href="#/spenden">← Zurück zu Spenden</a>
    <p class="eyebrow">Spenden · ${category.title}</p>
    <h1>${category.title} spenden</h1>
    <p class="status-note">${info.status}</p>
    <p class="detail-meta">Alle Hinweise beruhen auf den vorliegenden fairstore-Angaben. Nicht bestätigte Annahmeregeln sind ausdrücklich als offen markiert.</p>
    <div class="detail-columns">
      <section class="card"><h2>Was ist bekannt?</h2><p>${info.accepted}</p></section>
      <section class="card"><h2>Was wird nicht angenommen?</h2><p>${info.no}</p></section>
      <section class="card"><h2>Zustand & Abgabe</h2><p>Spenden müssen gut erhalten, sauber und vollständig sein. Pro Spende: ein blauer Sack oder eine Umzugskiste.</p><p>${info.extra}</p></section>
      <section class="card"><h2>Wo abgeben?</h2><p>In den fünf fairstores während der Öffnungszeiten oder im Spendenlager in Poll.</p><a href="#/standorte">Standorte ansehen</a></section>
    </div>`;
}

function pageDonationConditions() {
  return `<a class="back-link" href="#/spenden">← Zurück zu Spenden</a>
    <p class="eyebrow">Spenden</p><h1>Spendenbedingungen</h1>
    <p class="lede">Die wichtigsten bekannten Hinweise auf einen Blick.</p>
    <div class="grid grid-two">
      <section class="card"><h2>Zustand</h2><p>Spenden müssen gut erhalten, sauber und vollständig sein.</p></section>
      <section class="card"><h2>Mengenbegrenzung</h2><p>Pro Spende ist ein blauer Sack oder eine Umzugskiste vorgesehen.</p></section>
      <section class="card"><h2>Derzeit nicht angenommen</h2><ul class="fact-list"><li>Gläser sowie Wein- und Sektgläser</li><li>Sommerbekleidung</li><li>Elektrogeräte</li></ul></section>
      <section class="card"><h2>Möbel & größere Spenden</h2><p>Möbelspenden bitte vorab mit Fotos per E-Mail anfragen: <a href="mailto:spendenlager@diakonie-michaelshoven.de">spendenlager@diakonie-michaelshoven.de</a>.</p><p>Weitere Regeln für Großspenden sind nicht bestätigt.</p></section>
      <section class="card"><h2>Abgabe</h2><p>Spenden können während der Öffnungszeiten in den fairstores oder im Spendenlager in Poll abgegeben werden.</p><a href="#/standorte">Standorte und Zeiten</a></section>
      <section class="card"><h2>Saisonale Spendenzeiten</h2><p>Im April: Frühlings- und Sommersachen. Ende September: Herbst- und Wintersachen.</p><p class="muted">Die aktuell angenommene Auswahl kann davon abweichen; beachte die Hinweise zu aktuellen Sachspenden.</p></section>
    </div>`;
}

function pageDonationChecker() {
  return `<a class="back-link" href="#/spenden">← Zurück zu Spenden</a>
    <p class="eyebrow">Spenden</p><h1>Spende prüfen</h1>
    <p class="lede">Eine schnelle, unverbindliche Orientierung anhand der vorliegenden Annahmehinweise.</p>
    <form class="check-form" id="donation-check">
      <div class="field"><label for="item-category">Was möchtest du abgeben?</label><select class="form-control" id="item-category" name="category" required>
        ${categories.map(item => `<option value="${item.id}">${item.title}</option>`).join("")}
      </select></div>
      <div class="field"><label for="item-condition">In welchem Zustand ist der Gegenstand?</label><select class="form-control" id="item-condition" name="condition" required>
        <option value="good">Gut erhalten, sauber und vollständig</option><option value="uncertain">Ich bin unsicher</option><option value="poor">Beschädigt, schmutzig oder unvollständig</option>
      </select></div>
      <div class="field"><label for="item-quantity">Menge (optional)</label><select class="form-control" id="item-quantity" name="quantity">
        <option value="one">Ein Sack oder eine Umzugskiste</option><option value="more">Mehr als ein Sack/eine Kiste</option>
      </select></div>
      <button type="submit">Ergebnis anzeigen</button>
    </form><div class="result" id="donation-result" role="status" aria-live="polite" hidden></div>`;
}

function pageFaircard() {
  return `<a class="back-link" href="#/">← Zur Startseite</a>
    <p class="eyebrow">faircard</p><h1>Die faircard – fair einkaufen für alle.</h1>
    <p class="lede">Die faircard bietet Einkaufsvorteile in allen fünf fairstores.</p>
    <div class="grid grid-two">
      <section class="card"><span class="benefit-number">bis zu 3 %</span><h2>Rabatt für alle Kunden</h2><p>Der Rabatt gilt auf das Sortiment.</p></section>
      <section class="card"><span class="benefit-number">bis zu 30 %</span><h2>Mit Nachweis</h2><p>Menschen mit nachweislich geringem Einkommen erhalten je nach Ware bis zu 30 % Rabatt.</p></section>
    </div>
    <div class="detail-columns">
      <section class="card"><h2>Wer kann sie bekommen?</h2><p>Alle Kunden können die faircard erhalten. Für den höheren Rabatt wird ein Nachweis über geringes Einkommen benötigt. Auch Studentinnen und Studenten können sie mit Studentenausweis erhalten.</p></section>
      <section class="card"><h2>Nachweise</h2><ul class="fact-list"><li>Köln-Pass</li><li>Bewilligungsbescheid (ALG I, ALG II, Sozialgeld)</li><li>BAföG-/BAB-Bescheid</li><li>Wohngeldbescheid</li><li>Bescheid über Kindergeldzuschlag</li><li>Einkommensnachweis (Gehalt, Rente, Ausbildung)</li><li>Studentenausweis</li></ul></section>
    </div>
    <div class="action-row section-block"><a class="button" href="#/faircard/pruefen">Nachweis prüfen</a><a class="button button-secondary" href="#/faircard/beantragen">faircard beantragen</a></div>
    <p class="status-note section-block">Die genannten Rabatte und Nachweise stammen aus den vorliegenden fairstore-Angaben. Bitte erkundige dich im fairstore, falls dein Nachweis hier nicht aufgeführt ist.</p>`;
}

function pageFaircardCheck() {
  const options = [
    ["koelnpass", "Köln-Pass"],
    ["alg", "Bewilligungsbescheid: ALG I / ALG II / Sozialgeld"],
    ["wohngeld", "Wohngeldbescheid"],
    ["grundsicherung", "Grundsicherung"],
    ["bafoeg", "BAföG- oder BAB-Bescheid"],
    ["kinderzuschlag", "Bescheid über Kindergeldzuschlag"],
    ["einkommen", "Sonstiger Einkommensnachweis"],
    ["student", "Studentenausweis"],
    ["unsicher", "Ich bin unsicher"]
  ];
  return `<a class="back-link" href="#/faircard">← Zurück zur faircard</a>
    <p class="eyebrow">faircard</p><h1>Nachweis prüfen</h1>
    <p class="lede">Wähle deinen Nachweis. Die Rückmeldung ist eine unverbindliche Orientierung, keine Anspruchsbestätigung.</p>
    <form class="check-form" id="faircard-check">
      <div class="field"><label for="proof-type">Welchen Nachweis hast du?</label><select class="form-control" id="proof-type" name="proof" required>
        ${options.map(([id, title]) => `<option value="${id}">${title}</option>`).join("")}
      </select></div><button type="submit">Hinweis anzeigen</button>
    </form><div class="result" id="faircard-result" role="status" aria-live="polite" hidden></div>`;
}

function pageFaircardApply() {
  return `<a class="back-link" href="#/faircard">← Zurück zur faircard</a>
    <p class="eyebrow">faircard</p><h1>faircard beantragen</h1>
    <p class="lede">Die vorliegenden Informationen beschreiben diese Schritte. Der offizielle PDF-Link ist hier noch nicht hinterlegt.</p>
    <ol class="fact-list">
      <li>Nachweis vorbereiten; für den höheren Rabatt ist ein aktuell gültiger Nachweis erforderlich.</li>
      <li>faircard an der Kasse erfragen oder den Antrag ausfüllen.</li>
      <li>Antrag und Kopie des Nachweises per E-Mail oder Post einreichen.</li>
      <li>Die faircard wird laut den vorliegenden Angaben zeitnah zugeschickt.</li>
    </ol>
    <div class="grid grid-three section-block">
      <section class="card"><h2>Im fairstore</h2><p>An der Kasse nach der faircard fragen.</p></section>
      <section class="card"><h2>Per E-Mail</h2><p>fairstore@michaelshoven.de</p><a href="mailto:fairstore@michaelshoven.de">E-Mail öffnen</a></section>
      <section class="card"><h2>Per Post</h2><address>Diakonie Michaelshoven Soziale Hilfen gGmbH<br>Verwaltung fairstore<br>Poller Kirchweg 61<br>51105 Köln</address></section>
    </div>
    <div class="section-block"><button type="button" disabled>Offiziellen Antrag herunterladen</button><p class="status-note">Der offizielle Antrag-Download ist noch nicht verlinkt. Es wurde kein Download-Link ergänzt, um keinen Link zu erfinden. Telefon: <a href="tel:+4922116814685">0221 16814685</a>.</p></div>`;
}

function pageLocations(id) {
  if (id) {
    const location = locations.find(item => item.id === id);
    if (!location) return pageLocations();
    return `<a class="back-link" href="#/standorte">← Zurück zu Standorten</a>
      <p class="eyebrow">Standorte</p><h1>${location.name}</h1>
      <section class="card address-card"><h2>Adresse & Kontakt</h2><address>${location.address}<br>${location.postcode}</address><a class="phone" href="tel:${location.tel}">${location.phone}</a>
      ${location.store
        ? "<h2 class=\"section-block\">Öffnungszeiten</h2><p>Montag bis Freitag 10–18 Uhr<br>Samstag 10–16 Uhr</p>"
        : "<h2 class=\"section-block\">Spendenannahme</h2><p>Montag bis Freitag 08:30–16 Uhr</p>"}
      <p>Spendenannahme gemäß den vorliegenden Angaben: während der Öffnungszeiten in den fairstores oder im Spendenlager in Poll.</p></section>`;
  }
  return `<a class="back-link" href="#/">← Zur Startseite</a>
    <p class="eyebrow">Standorte</p><h1>Finde deinen fairstore</h1>
    <p class="lede">Fünf fairstores in Köln sowie das Spendenlager in Poll.</p>
    <div class="location-map" role="img" aria-label="Kartenplatzhalter">Kartenansicht ist noch nicht eingebunden.<br>Alle bestätigten Adressen findest du in der Liste.</div>
    <div class="grid grid-three section-block">${locations.map(locationCard).join("")}</div>`;
}

function pageFaq() {
  return `<a class="back-link" href="#/">← Zur Startseite</a>
    <p class="eyebrow">Hilfe</p><h1>Häufige Fragen</h1>
    <div class="faq-list">${faqs.map((item, index) => `<details${index === 0 ? " open" : ""}><summary>${item.question}</summary><div class="faq-answer">${item.answer}</div></details>`).join("")}</div>`;
}

function pageLegal(name) {
  const title = name === "impressum" ? "Impressum" : "Datenschutz";
  return `<a class="back-link" href="#/">← Zur Startseite</a><p class="eyebrow">Information</p><h1>${title}</h1>
    <p class="status-note">Die Angaben zu ${title} sind in den vorliegenden Projektinformationen nicht enthalten. Bitte nutze die offiziellen Seiten der Diakonie Michaelshoven.</p>
    <p><a href="https://www.diakonie-michaelshoven.de/" target="_blank" rel="noopener noreferrer">Diakonie Michaelshoven öffnen</a></p>`;
}

function render() {
  const route = window.location.hash.replace(/^#\/?/, "");
  const [section = "", sub = ""] = route.split("/");
  let html;
  if (!section) html = pageHome();
  else if (section === "spenden" && !sub) html = pageDonations();
  else if (section === "spenden" && sub === "bedingungen") html = pageDonationConditions();
  else if (section === "spenden" && sub === "pruefer") html = pageDonationChecker();
  else if (section === "spenden") html = pageDonationCategory(sub);
  else if (section === "faircard" && !sub) html = pageFaircard();
  else if (section === "faircard" && sub === "pruefen") html = pageFaircardCheck();
  else if (section === "faircard" && sub === "beantragen") html = pageFaircardApply();
  else if (section === "standorte") html = pageLocations(sub);
  else if (section === "faq") html = pageFaq();
  else if (section === "impressum" || section === "datenschutz") html = pageLegal(section);
  else html = pageHome();

  app.innerHTML = html;
  const currentPath = `/${section}${sub ? `/${sub}` : ""}`;
  document.querySelectorAll(".primary-navigation a").forEach(link => {
    const path = link.dataset.route;
    const active = path === currentPath || (path !== "/" && currentPath.startsWith(`${path}/`));
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function showDonationResults(query) {
  const container = document.querySelector("#search-results");
  if (!container) return;
  const normalized = query.trim().toLocaleLowerCase("de");
  if (!normalized) {
    container.innerHTML = "";
    return;
  }
  const matches = categories.filter(category => category.search.some(term => term.includes(normalized) || normalized.includes(term)));
  if (!matches.length) {
    container.innerHTML = '<p class="status-note">Kein Treffer. Prüfe die Schreibweise oder wähle eine Kategorie aus der Liste.</p>';
    return;
  }
  container.innerHTML = `<p><strong>Passende Kategorie${matches.length > 1 ? "n" : ""}:</strong></p><div class="quick-links">${matches.map(item => `<a class="quick-link" href="#/spenden/${item.id}">${item.title}</a>`).join("")}</div>`;
}

function donationResult(data) {
  const category = categories.find(item => item.id === data.get("category"));
  const categoryId = category.id;
  const result = document.querySelector("#donation-result");
  let title;
  let message;
  let next;

  if (data.get("condition") === "poor") {
    title = "Wird voraussichtlich nicht angenommen";
    message = "Die vorliegenden Bedingungen verlangen gut erhaltene, saubere und vollständige Spenden.";
    next = "Bitte nur gut erhaltene, saubere und vollständige Gegenstände abgeben.";
  } else if (["elektrogeraete", "kleidung", "schuhe", "hausrat"].includes(categoryId)) {
    title = "Bitte Bedingungen beachten";
    message = categoryId === "elektrogeraete"
      ? "Elektrogeräte werden nicht angenommen."
      : categoryId === "hausrat"
        ? "Hausrat wird teilweise angenommen; Gläser sowie Wein- und Sektgläser werden momentan nicht angenommen."
        : categoryId === "schuhe"
          ? "Aktuell werden Winterschuhe angenommen; andere Schuharten sind nicht bestätigt."
          : "Aktuell wird Winterkleidung angenommen; Sommerbekleidung wird momentan nicht angenommen.";
    next = "Lies die Hinweise für diese Kategorie und beachte die aktuellen Annahmeregeln.";
  } else if (categoryId === "moebel") {
    title = "Bitte Bedingungen beachten";
    message = "Möbelspenden bitte vorab mit Fotos per E-Mail anfragen.";
    next = '<a href="mailto:spendenlager@diakonie-michaelshoven.de">Möbelanfrage per E-Mail senden</a>.';
  } else if (["buecher", "spielzeug"].includes(categoryId) || data.get("condition") === "uncertain") {
    title = "Bitte Bedingungen beachten";
    message = "Die aktuellen Annahmeregeln für diesen Gegenstand sind nicht bestätigt.";
    next = "Bitte direkt beim fairstore nachfragen oder die Detailansicht öffnen.";
  } else {
    title = "Grundsätzlich geeignet";
    message = "Die vorliegenden Angaben nennen diese Art von Spende aktuell als angenommen.";
    next = "Bitte sauber, vollständig und gut erhalten abgeben.";
  }

  const quantityNote = data.get("quantity") === "more"
    ? "<p>Beachte: Pro Spende ist ein blauer Sack oder eine Umzugskiste vorgesehen.</p>"
    : "";
  result.innerHTML = `<h3>${title}</h3><p>${message}</p><p>Nächster Schritt: ${next}</p>${quantityNote}<p><a href="#/spenden/${categoryId}">Alle Hinweise zu ${category.title}</a></p>`;
  result.hidden = false;
}

function faircardResult(proof) {
  const result = document.querySelector("#faircard-result");
  const known = {
    koelnpass: "Der Köln-Pass ist als möglicher Nachweis genannt.",
    alg: "Ein Bewilligungsbescheid zu ALG I, ALG II oder Sozialgeld ist als möglicher Nachweis genannt.",
    wohngeld: "Ein Wohngeldbescheid ist als möglicher Nachweis genannt.",
    bafoeg: "Ein BAföG- oder BAB-Bescheid ist als möglicher Nachweis genannt.",
    kinderzuschlag: "Ein Bescheid über Kindergeldzuschlag ist als möglicher Nachweis genannt.",
    einkommen: "Ein Einkommensnachweis, zum Beispiel Gehalt, Rente oder Ausbildung, ist als möglicher Nachweis genannt.",
    student: "Ein Studentenausweis wird als Nachweis für die faircard genannt."
  };
  if (proof === "unsicher") {
    result.innerHTML = "<h3>Du bist unsicher?</h3><p>Die vorliegenden Angaben nennen mehrere mögliche Nachweise. Frage direkt an der Kasse nach oder wende dich an das fairstore-Team.</p><p><a href=\"mailto:fairstore@michaelshoven.de\">fairstore@michaelshoven.de</a></p>";
  } else if (proof === "grundsicherung") {
    result.innerHTML = "<h3>Noch nicht bestätigt</h3><p>Grundsicherung ist in den vorliegenden fairstore-Angaben nicht ausdrücklich aufgeführt. Bitte frage nach, bevor du den Antrag einreichst.</p><p><a href=\"mailto:fairstore@michaelshoven.de\">fairstore@michaelshoven.de</a></p>";
  } else {
    result.innerHTML = `<h3>Möglicher Nachweis</h3><p>${known[proof]}</p><p>Die Auswahl bestätigt keinen individuellen Anspruch. Frage an der Kasse nach oder sende eine Kopie des aktuell gültigen Nachweises mit dem Antrag ein.</p><a href="#/faircard/beantragen">Antrag und Einreichung</a>`;
  }
  result.hidden = false;
}

app.addEventListener("input", event => {
  if (event.target.id === "donation-query") showDonationResults(event.target.value);
});

app.addEventListener("submit", event => {
  if (event.target.id === "donation-search") {
    event.preventDefault();
    showDonationResults(new FormData(event.target).get("query"));
  }
  if (event.target.id === "donation-check") {
    event.preventDefault();
    donationResult(new FormData(event.target));
  }
  if (event.target.id === "faircard-check") {
    event.preventDefault();
    faircardResult(new FormData(event.target).get("proof"));
  }
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});

window.addEventListener("hashchange", () => {
  render();
  document.querySelector("#app").focus({ preventScroll: true });
});
render();
