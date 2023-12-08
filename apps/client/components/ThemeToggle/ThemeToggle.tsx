'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

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
                <IconMoon style={{ width: 12, height: 12 }} />
            ) : (
                <IconSun style={{ width: 12, height: 12 }} />
            )
        }
    </ActionIcon >
}