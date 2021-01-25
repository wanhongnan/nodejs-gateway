import apicache from 'apicache'

export function apiCache(options: any) {
    function middleware(req: any, res: any, next: any) {
        next()
    }
    return middleware
}

