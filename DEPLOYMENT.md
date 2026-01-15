# Next.js Deployment Guide

This project is built using **Next.js 14** with the App Router, Tailwind CSS, and TypeScript.

## Local Development

1.  **Extract files**: Ensure the folder structure follows the Next.js standard.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel (Recommended)

1.  **Push to GitHub**: Create a repository and push your code.
2.  **Import to Vercel**:
    *   Go to [vercel.com](https://vercel.com)
    *   Click "Add New" -> "Project"
    *   Import your GitHub repository.
3.  **Automatic Detection**: Vercel will automatically detect Next.js and apply the correct build settings (`npm run build`).
4.  **Click Deploy**: Your site will be live on a `.vercel.app` domain in under a minute.

## Alternative Platforms (Netlify, AWS Amplify)

Ensure the build command is `next build` and the output directory is `.next` or `out` (if static). For server-side features, use a provider that supports Node.js environments.