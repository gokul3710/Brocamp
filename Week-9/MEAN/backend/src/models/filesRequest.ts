import { Request } from "express"

export interface filesReq extends Request{
    files: any
}

export interface headersreq extends Request{
    headers: {
        authorization: string
    }
    user: any
}