document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(signupForm);

        try {
            const response = await fetch("/signup", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
            } else {
                throw new Error("Signup failed");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during signup.");
        }
    });
});
