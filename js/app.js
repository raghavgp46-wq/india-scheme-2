// app.js — Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // Restore saved language
  const savedLang = localStorage.getItem("sahayata_lang");
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }

  initLanguageSelector();
  applyTranslations();
  initForm();
});

// ============================================================
// Language
// ============================================================
function initLanguageSelector() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    if (btn.dataset.lang === currentLang) btn.classList.add("active");
    btn.addEventListener("click", () => {
      langBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      setLanguage(btn.dataset.lang);
      applyTranslations();
      // Re-render results if visible
      const resultsSection = document.getElementById("results-section");
      if (!resultsSection.classList.contains("hidden")) {
        document.getElementById("subsidy-form").dispatchEvent(new Event("submit"));
      }
    });
  });
}

function applyTranslations() {
  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });
  // Translate select options
  document.querySelectorAll("[data-i18n-options]").forEach((select) => {
    const options = select.querySelectorAll("option[data-i18n]");
    options.forEach((opt) => {
      const key = opt.getAttribute("data-i18n");
      opt.textContent = t(key);
    });
  });
}

// ============================================================
// Form
// ============================================================
function initForm() {
  const form = document.getElementById("subsidy-form");
  const resetBtn = document.getElementById("reset-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearValidation();

    const profile = getFormData();
    if (!validateProfile(profile)) return;

    const eligible = findEligibleSchemes(profile);
    renderResults(eligible);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    clearValidation();
    document.getElementById("results-section").classList.add("hidden");
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  });
}

function getFormData() {
  return {
    age: parseInt(document.getElementById("age").value) || 0,
    gender: document.getElementById("gender").value,
    category: document.getElementById("category").value,
    occupation: document.getElementById("occupation").value,
    income: parseInt(document.getElementById("income").value) || 0,
  };
}

function validateProfile(profile) {
  let valid = true;

  if (profile.age < 1 || profile.age > 120) {
    showError("age", t("validationAge"));
    valid = false;
  }
  if (!profile.gender) {
    showError("gender", t("validationRequired"));
    valid = false;
  }
  if (!profile.occupation) {
    showError("occupation", t("validationRequired"));
    valid = false;
  }
  if (profile.income < 0) {
    showError("income", t("validationIncome"));
    valid = false;
  }
  return valid;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.classList.add("error");
  const errorEl = document.createElement("div");
  errorEl.className = "error-message";
  errorEl.textContent = message;
  field.parentNode.appendChild(errorEl);
}

function clearValidation() {
  document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
}

// ============================================================
// Eligibility Engine
// ============================================================
function findEligibleSchemes(profile) {
  return schemes.filter((scheme) => scheme.checkEligibility(profile));
}

// ============================================================
// Results Rendering
// ============================================================
function renderResults(eligibleSchemes) {
  const container = document.getElementById("results-container");
  const section = document.getElementById("results-section");
  const countEl = document.getElementById("results-count");

  container.innerHTML = "";

  if (eligibleSchemes.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">😔</div>
        <p>${t("noResults")}</p>
      </div>`;
    countEl.textContent = "";
  } else {
    countEl.textContent = `${eligibleSchemes.length} ${t("schemesFound")}`;
    eligibleSchemes.forEach((scheme) => {
      container.appendChild(createSchemeCard(scheme));
    });
  }

  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });
}

function createSchemeCard(scheme) {
  const card = document.createElement("div");
  card.className = "scheme-card";

  const lang = currentLang;

  card.innerHTML = `
    <div class="scheme-header">
      <h3 class="scheme-name">${scheme.name[lang]}</h3>
    </div>
    <p class="scheme-description">${scheme.description[lang]}</p>
    <div class="scheme-detail">
      <strong>✅ ${t("benefitsLabel")}:</strong>
      <span>${scheme.benefits[lang]}</span>
    </div>
    <div class="scheme-detail">
      <strong>👤 ${t("eligibilityLabel")}:</strong>
      <span>${scheme.eligibility[lang]}</span>
    </div>
    <button class="toggle-docs-btn" onclick="toggleDocuments('${scheme.id}')">
      📋 ${t("showDocuments")}
    </button>
    <div id="docs-${scheme.id}" class="documents-section hidden">
      <h4>${t("documentsTitle")}</h4>
      <ul class="doc-checklist">
        ${scheme.documents[lang]
          .map(
            (doc, i) => `
          <li>
            <label class="checklist-item">
              <input type="checkbox" id="check-${scheme.id}-${i}">
              <span class="checkmark"></span>
              <span class="doc-text">${doc}</span>
            </label>
          </li>`
          )
          .join("")}
      </ul>
      <div class="office-info">
        <strong>${t("officeLabel")}</strong>
        <p>${scheme.office[lang]}</p>
      </div>
      <button class="print-btn" onclick="printChecklist('${scheme.id}')">
        ${t("printChecklist")}
      </button>
    </div>
  `;

  return card;
}

// ============================================================
// Document Checklist Toggle
// ============================================================
function toggleDocuments(schemeId) {
  const docsDiv = document.getElementById(`docs-${schemeId}`);
  const btn = docsDiv.previousElementSibling;

  if (docsDiv.classList.contains("hidden")) {
    docsDiv.classList.remove("hidden");
    btn.textContent = `📋 ${t("hideDocuments")}`;
  } else {
    docsDiv.classList.add("hidden");
    btn.textContent = `📋 ${t("showDocuments")}`;
  }
}

// ============================================================
// Print Checklist
// ============================================================
function printChecklist(schemeId) {
  const scheme = schemes.find((s) => s.id === schemeId);
  if (!scheme) return;

  const lang = currentLang;
  const profile = getFormData();

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
      <meta charset="UTF-8">
      <title>${t("printTitle")} - ${scheme.name[lang]}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 30px;
          color: #333;
          line-height: 1.6;
        }
        .print-header {
          text-align: center;
          border-bottom: 3px solid #FF9933;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        .print-header h1 {
          color: #FF9933;
          font-size: 24px;
        }
        .print-header h2 {
          color: #138808;
          font-size: 20px;
          margin-top: 5px;
        }
        .print-header p {
          color: #666;
          font-size: 14px;
          margin-top: 8px;
        }
        .profile-info {
          background: #f8f9fa;
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 14px;
        }
        .checklist { list-style: none; padding: 0; }
        .checklist li {
          padding: 10px 12px;
          border-bottom: 1px dashed #ddd;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .checklist li::before {
          content: '☐';
          font-size: 20px;
          color: #FF9933;
        }
        .office-box {
          margin-top: 20px;
          padding: 12px 16px;
          background: #e8f5e9;
          border-left: 4px solid #138808;
          border-radius: 4px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #999;
          border-top: 1px solid #ddd;
          padding-top: 10px;
        }
        @media print {
          body { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="print-header">
        <h1>${t("printTitle")}</h1>
        <h2>${scheme.name[lang]}</h2>
        <p>${t("printSubtitle")}</p>
      </div>

      <div class="profile-info">
        <strong>${t("ageLabel")}:</strong> ${profile.age} |
        <strong>${t("genderLabel")}:</strong> ${t("gender" + capitalize(profile.gender))} |
        <strong>${t("occupationLabel")}:</strong> ${t("occupation" + capitalize(profile.occupation))} |
        <strong>${t("incomeLabel")}:</strong> ₹${profile.income.toLocaleString("en-IN")}
      </div>

      <h3 style="margin-bottom: 10px;">${t("documentsTitle")}</h3>
      <ul class="checklist">
        ${scheme.documents[lang].map((doc) => `<li>${doc}</li>`).join("")}
      </ul>

      <div class="office-box">
        <strong>${t("officeLabel")}</strong>
        <p>${scheme.office[lang]}</p>
      </div>

      <div class="footer">
        ${t("printGenerated")} | ${new Date().toLocaleDateString()}
        <br>${t("disclaimer")}
      </div>

      <script>window.onload = () => window.print();<\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// ============================================================
// Utility
// ============================================================
function capitalize(str) {
  if (!str) return "";
  // Handle hyphenated occupation names like "self-employed"
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
