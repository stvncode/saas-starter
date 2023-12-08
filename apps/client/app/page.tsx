'use client'

import { Flex } from "@mantine/core"
import { useGetUser } from "../api/queries/auth"
import { Welcome } from "../components/Welcome"

export default function Home() {
  const { data, error, isLoading } = useGetUser()

  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)

  return (
    <Flex direction="column">
      <Welcome />
    </Flex>
  )
}
