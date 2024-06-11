
import { Injectable, NestMiddleware } from '@nestjs/common'
import { FastifyReply } from 'fastify'

@Injectable()
export class Authentication implements NestMiddleware {
    async use(req: any, res: FastifyReply, next: any) {
        // const authorization = req.headers.authorization
        // if (!authorization) throw new ForbiddenException()
        Object.assign(req, {
            fullName: `Gata`
        })
        // const [tokenType, token] = authorization.split(' ')
        // tokenType
        // if (!token) throw new ForbiddenException()
        next()
    }
}
