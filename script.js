document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector(".signup-form");
const formMessage = document.querySelector("[data-form-message]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const email = String(data.get("email") ?? "").trim();

  if (!email) {
    formMessage.textContent = "Add your email and we will send the first signal.";
    return;
  }

  form.reset();
  formMessage.textContent = "You are on the Pulsar launch list.";
});
