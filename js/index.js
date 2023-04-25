const formContainers = document.querySelectorAll("#formData");
const formData = {
  company: "RU Gazrus QZ1",
  offer: "RU Gazrus",
  pathName: "gazprus-ru-qz4",
};
const domainUrl =
  window.location.origin + `${formData.pathName}/#.php`;
                              // здесь нужно вставить названия файва php
const hostName = window.location.hostname;
const language = {
  ru: {
    language: "ru",
    name: "Имя",
    lastName: "Фамилия",
    email: "E-Mail",
    phone: "(99) 999-99-99",
    btn: "Зарегестрироватся",
  },
  en: {
    language: "en",
    name: "Name",
    lastName: "Last name",
    email: "E-Mail",
    phone: "(093) 222-33-44",
    btn: "Registration",
  },
  tr: {
    language: "tr",
    name: "Name",
    lastName: "Last name",
    email: "E-Mail",
    phone: "999 999 99 99",
    btn: "kayıt olmak",
  },
  bg: {
    language: "bg",
    name: "Име",
    lastName: "Фамилия",
    email: "E-Mail",
    phone: "99 999 999",
    btn: "Започнете да печелите",
  },
  pt: {
    language: "pt",
    name: "Name",
    lastName: "Last Name",
    email: "E-Mail",
    phone: "999 999 999",
    btn: "Registe-se agora",
  },
  hr: {
    language: "hr",
    name: "Unesite svoje ime",
    lastName: "Unesite prezime",
    email: "Unesite mail Email",
    phone: "92 123 4567",
    btn: "početi zarađivati novac",
  },
  es: {
    language: "es",
    name: "Introduzca su nombre",
    lastName: "Introduzca el apellido",
    email: "Ingrese correo E-mail",
    phone: "612 34 56 78",
    btn: "Empezar a ganar dinero",
  },
  ro: {
    language: "ro",
    name: "Nume",
    lastName: "Nume de familie",
    email: "Ingrese correo E-mail",
    phone: "712 034 567",
    btn: "ÎNREGISTRARE",
  },
  hu: {
    language: "hu",
    name: "Nume",
    lastName: "Nume de cap",
    email: "E-mail",
    phone: "20 123 4567",
    btn: "Poslat zprávu",
  },
};

const showForms = async () => {
  formContainers.forEach((item) => {
    const formLanguage = item.getAttribute("data-language")
      ? item.getAttribute("data-language")
      : "en";
    item.innerHTML = `
        <input type="hidden" name="company" value="${formData.company}">
        <input type="hidden" name="offer" value="${formData.offer}">
        <input type="hidden" name="domain_url" value="${domainUrl}"> 
        <input type="hidden" name="host_name" value="${hostName}"> 
        <input type="text" name="name" class="form__input" placeholder="${
          language[formLanguage].name || "Name"
        }" required>
        <input type="text" name="lastname" class="form__input" placeholder="${
          language[formLanguage].lastName || "lastName"
        }" required>
        <input type="email" name="email" class="form__input" placeholder="${
          language[formLanguage].email || "E-Mail"
        }" required>
        <input type="tel" name="phone" class="form__input phone-mask" required="required" autocomplete="off" placeholder="${
          language[formLanguage].phone || "99 333 222"
        }" />
        <button class="form__btn" type="submit">${
          language[formLanguage].btn
        }</button>
      `;
  });
};
showForms();
