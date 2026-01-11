This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

This project includes a chat widget that requires environment variables to be configured. Create a `.env.local` file in the root directory with the following variables:

### Required Variables
- `OPENAI_API_KEY` - Your OpenAI API key for the chat functionality
- `GMAIL_APP_PASSWORD` - Your Gmail app password for sending contact form emails (see setup instructions below)

### Optional Variables
- `GMAIL_USER` - Your Gmail address (default: gaganjot165@gmail.com)
- `NEXT_PUBLIC_CHAT_ENABLED` - Set to 'true' to enable the chat widget (default: true)
- `NEXT_PUBLIC_CHAT_TITLE` - The title displayed in the chat widget (default: 'GJS Corp')
- `NEXT_PUBLIC_CHAT_SUBTITLE` - The subtitle displayed in the chat widget (default: 'AI Assistant')
- `NEXT_PUBLIC_CHAT_PLACEHOLDER` - The placeholder text in the chat input (default: 'Ask about automation, Power BI, or ETL...')
- `NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE` - The system message for the AI assistant (default: GJS Corp assistant message)

### Gmail App Password Setup:
To send emails via Gmail, you need to create an app password:
1. Enable 2-Step Verification on your Google Account
2. Go to https://myaccount.google.com/apppasswords
3. Create a new app password (select "Mail" and "Other" as the app)
4. Copy the 16-character password and use it as `GMAIL_APP_PASSWORD`

### Example .env.local file:
```env
OPENAI_API_KEY=your_openai_api_key_here
GMAIL_USER=gaganjot165@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
NEXT_PUBLIC_CHAT_ENABLED=true
NEXT_PUBLIC_CHAT_TITLE=GJS Corp
NEXT_PUBLIC_CHAT_SUBTITLE=AI Assistant
NEXT_PUBLIC_CHAT_PLACEHOLDER=Ask about automation, Power BI, or ETL...
NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE=You are GJS Corp's friendly assistant. Keep answers clear, concise, and business-focused; give examples when helpful.
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
