import type { NextApiRequest, NextApiResponse } from 'next'

export default function GET(_: NextApiRequest, res: NextApiResponse) {
    const users = await prisma.User.findMany()
    res.status(200).json({ users: users });
}
