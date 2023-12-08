'use client'

import {
    ActionIcon,
    Badge,
    Box,
    Center,
    Code,
    Flex,
    Group,
    Text,
    TextInput,
    Tooltip,
    UnstyledButton,
    rem
} from '@mantine/core'
import { spotlight } from '@mantine/spotlight'
import { IconBulb, IconCheckbox, IconChevronLeft, IconChevronRight, IconPlus, IconSearch, IconUser } from '@tabler/icons-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import classes from './Navbar.module.css'


const ThemeToggle = dynamic(() => import('../ThemeToggle').then(module => ({ default: module.ThemeToggle })), { ssr: false })

const links = [
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
    { icon: IconUser, label: 'Contacts' },
]

const collections = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },
    { emoji: '✨', label: 'Reports' },
    { emoji: '🛒', label: 'Orders' },
    { emoji: '📅', label: 'Events' },
    { emoji: '🙈', label: 'Debts' },
    { emoji: '💁‍♀️', label: 'Customers' },
]

export function Navbar() {
    const [collapsed, setCollapsed] = useState(false)

    const mainLinks = links.map((link) => (
        <UnstyledButton key={link.label} className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
                <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
                {!collapsed && <span>{link.label}</span>}
            </div>
            {link.notifications && !collapsed && (
                <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                    {link.notifications}
                </Badge>
            )}
        </UnstyledButton>
    ))

    const collectionLinks = collections.map((collection) => (
        <a
            href="#"
            onClick={(event) => event.preventDefault()}
            key={collection.label}
            className={classes.collectionLink}
        >
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
            {!collapsed && collection.label}
        </a>
    ))

    const CollapsedIcon = collapsed ? IconChevronRight : IconChevronLeft

    return (
        <>
            <nav className={[classes.navbar, collapsed ? classes.navbarCollapsed : ''].join(' ')}>
                {collapsed ? <Center>
                    <ActionIcon variant="transparent" mt={10} size={30} onClick={spotlight.open}>
                        <IconSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
                    </ActionIcon>
                </Center> : <TextInput
                    onClick={spotlight.open}
                    placeholder="Search"
                    size="xs"
                    leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
                    rightSectionWidth={70}
                    rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
                    styles={{ section: { pointerEvents: 'none' } }}
                    mt="sm"
                    mb="sm"
                />}

                <Box mt={collapsed ? 14 : 0} className={classes.section}>
                    <div className={classes.mainLinks}>{mainLinks}</div>
                </Box>

                <div className={classes.section} style={{ flex: 1 }}>
                    <Group className={classes.collectionsHeader} justify="space-between">
                        {!collapsed && <Text size="xs" fw={500} c="dimmed">
                            Articles
                        </Text>}
                        <Tooltip label="Create article" withArrow position="right">
                            <ActionIcon variant="default" size={18} ml={-3}>
                                <IconPlus style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                    <div className={classes.collections}>{collectionLinks}</div>
                </div>
                <ThemeToggle />
                <Flex justify="space-between" align="end">
                    <ActionIcon variant="default" size={20} mt={10} ml={-3} onClick={() => setCollapsed(!collapsed)}>
                        <CollapsedIcon style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
                    </ActionIcon>
                    {!collapsed && <Code>v3.1.2</Code>}
                </Flex>
            </nav>
            {/* <Spotlight shortcut="mod + J" actions={[]} /> */}
        </>
    )
}