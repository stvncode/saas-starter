'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { MoonIcon, SunIcon } from '@modulz/radix-icons'

export function ThemeToggle() {
    const { setColorScheme, colorScheme } = useMantineColorScheme()

    const dark = colorScheme === 'dark'

    return <ActionIcon
        ml={-3}
        size={20}
        variant="default"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => setColorScheme(dark ? 'light' : 'dark')
        }
        title="Toggle color scheme"
    >
        {
            dark ? (
                <SunIcon style={{ width: 12, height: 12 }} />
            ) : (
                <MoonIcon style={{ width: 12, height: 12 }} />
            )
        }
    </ActionIcon >
}