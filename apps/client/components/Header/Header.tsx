"use client"

import {
    Avatar,
    Flex,
    Menu,
    Text,
    rem,
    useMantineTheme
} from '@mantine/core'
import {
    IconHeart,
    IconLogout,
    IconMessage,
    IconPlayerPause,
    IconSettings,
    IconStar,
    IconSwitchHorizontal,
    IconTrash
} from '@tabler/icons-react'
import { useState } from 'react'
import classes from './Header.module.css'

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
}

const tabs = [
    'Home',
    'Orders',
    'Education',
    'Community',
    'Forums',
    'Support',
    'Account',
    'Helpdesk',
]

export function Header() {
    const theme = useMantineTheme()
    const [userMenuOpened, setUserMenuOpened] = useState(false)

    return (
        <Flex align="center" justify="space-between" className={classes.header}>
            <Text fw={500}>Saas Template</Text>
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
                    <Menu.Item
                        leftSection={
                            <IconHeart
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Liked posts
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconStar
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.yellow[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Saved posts
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconMessage
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Your comments
                    </Menu.Item>

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