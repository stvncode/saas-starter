import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { theme } from '../theme'
import { ChildrenProps } from '../types'

export const metadata = {
    description:
        'Welcome to my starter saas app!',
    keywords:
        'next, starter, typescript, mantine, saas, seo',
    title: 'Saas Starter',
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={theme}>
                {children}
                </MantineProvider>
            </body>
        </html>
    )
}