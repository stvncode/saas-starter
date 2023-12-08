"use client"

import {
    Avatar,
    Flex,
    Menu,
    Text,
    rem
} from '@mantine/core'
import {
    IconApiApp,
    IconLogout,
    IconPlayerPause,
    IconSettings,
    IconSwitchHorizontal,
    IconTrash
} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import classes from './Header.module.css'

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
}

export function Header() {
    const [userMenuOpened, setUserMenuOpened] = useState(false)

    const router = useRouter()

    return (
        <Flex align="center" justify="space-between" className={classes.header}>
            <Flex gap={10} align="center">
                <IconApiApp />
                <Text fw={500}>Saas Template</Text>
            </Flex>
            <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
            >
                <Menu.Target>
                    <Avatar src={user.image} alt={user.name} radius="xl" size={33} />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Account settings
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                        onClick={() => router.push('/auth')}
                    >
                        Change account
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Logout
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Pause subscription
                    </Menu.Item>
                    <Menu.Item
                        color="red"
                        leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                    >
                        Delete account
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Flex>
    )
}