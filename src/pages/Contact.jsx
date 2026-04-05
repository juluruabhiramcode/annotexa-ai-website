async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const form = new FormData(e.currentTarget);
  const payload = Object.fromEntries(form.entries());

  try {
    await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setStatus("success");
    e.currentTarget.reset();
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
}