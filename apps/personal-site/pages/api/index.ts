import { IncomingMessage, ServerResponse } from 'http';
export default function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET') {
    res.end('API Running');
  }
}
