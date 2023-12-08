import { ColorSchemeScript, Flex, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/spotlight/styles.css'
import { GeistMono } from 'geist/font/mono'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { HEADER_HEIGHT } from '../core/constant'
import { theme } from '../theme'
import { ChildrenProps } from '../types'

export const metadata = {
    description:
        'Welcome to my starter saas app!',
    keywords:
        'next, starter, typescript, mantine, saas, seo',
    title: 'Saas Starter',
}

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en" className={GeistMono.className}>
            <head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <ColorSchemeScript />
                <MantineProvider theme={theme}>
                    <Flex direction="column">
                        <Header />
                        <Flex>
                            <Navbar />
                            <div style={{ width: '100%', height: `calc(100vh - ${HEADER_HEIGHT})` }}>
                                {children}
                            </div>
                        </Flex>
                    </Flex>
                </MantineProvider>
            </body>
        </html>
    )
}