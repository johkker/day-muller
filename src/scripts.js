document
  .querySelector(".message-button__header")
  .addEventListener("click", function () {
    window.open(
      "https://api.whatsapp.com/send?phone=5541991426210&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20sess%C3%A3o",
      "_blank"
    );
  });
