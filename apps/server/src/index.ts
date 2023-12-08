import { cookie } from '@elysiajs/cookie'
import cors from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import { swagger } from '@elysiajs/swagger'
import Elysia from 'elysia'
import { auth } from './modules/auth'

const app = new Elysia()
  .use(swagger({ path: '/v1/swagger' }))
  .group('/api', (app) =>
    app
      .use(
        jwt({
          name: 'jwt',
          secret: Bun.env.JWT_SECRET!,
        }),
      )
      .use(cors())
      .use(cookie())
      .use(auth),
  )
  .listen(8080)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

export type App = typeof app
