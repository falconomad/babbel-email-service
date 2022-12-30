import { Request, Response } from 'express';
import emailService from '../services/email.service';
  export const generateEmail = async (req: Request, res: Response, next: any) => {
    try {
        const { fullname, domain } = req.body;
        if (!fullname || !domain) {
          res.status(400).send({ error: "Name and domain are required parameters" });
          return;
        }
        const email = emailService.generateEmail(fullname, domain);
        
        res.send({ email });
    } catch (error) {
      next(error);
    }
  };