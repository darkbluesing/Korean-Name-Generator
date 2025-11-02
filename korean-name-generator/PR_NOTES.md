## Korean Name Generator - Stitch Screens Implementation

### Description

This PR implements the mobile-first "Korean Name Generator" web app in Next.js, based on the provided Stitch designs. It includes the four main screens (Landing, Name Input, Preferences, and Results), a TTS speaker for Korean pronunciation, and basic internationalization.

### Tradeoffs & Next Steps

**Tradeoffs:**

*   **Client-Side Logic:** All logic, including name recommendations and TTS, is currently handled on the client-side. This was done for simplicity in this initial version, but a production application would benefit from moving this to a server-side API.
*   **Hardcoded Recommendations:** The name recommendations are currently from a hardcoded list. A more sophisticated recommendation engine could be implemented in the future.
*   **Basic i18n:** The internationalization is handled by a simple dictionary-based system. For a larger application, a more robust solution like `next-intl` would be preferable.

**Next Steps:**

*   **Server-Side API:** Create a server-side API to handle name recommendations. This would allow for a more complex and dynamic recommendation algorithm.
*   **Hosted TTS:** For more consistent and higher-quality audio, a hosted TTS service like Amazon Polly or Google Cloud Text-to-Speech could be integrated.
*   **User Accounts:** Implement user accounts to allow users to save their favorite names and preferences.
*   **Animation & Polish:** Add more animations and UI polish to further enhance the user experience.

### How to Test

1.  Run `pnpm dev` to start the development server.
2.  Open your browser to `http://localhost:3000`.
3.  Go through the entire user flow from the landing page to the results page.
4.  Verify that the UI matches the mobile-first design references.
5.  Test the "like" button on the results page and confirm that the state is persisted in `localStorage`.
6.  Test the TTS speaker button.
7.  Test the language switcher.
8.  Run `pnpm test` to run the Playwright end-to-end test.
