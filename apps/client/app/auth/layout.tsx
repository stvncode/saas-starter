import { ChildrenProps } from '../../types'

export default function AuthLayout({ children }: ChildrenProps) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}