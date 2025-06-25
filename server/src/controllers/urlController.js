import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import { isValidUrl } from '../utils/validateUrl.js';

const BASE_URL = process.env.BASE_URL;

export const shorten = async (req, res) => {
  const { longUrl, customCode } = req.body;
  if (!isValidUrl(longUrl)) return res.status(400).json({ error: 'Invalid URL' });

  const code = customCode || nanoid(8);
  const exists = await Url.findOne({ code });
  if (exists) return res.status(409).json({ error: 'Code already in use' });

  const shortUrl = `${BASE_URL}/${code}`;
  await Url.create({ code, longUrl });

  return res.status(201).json({ shortUrl });
};

export const redirect = async (req, res) => {
  const { code } = req.params;
  const entry = await Url.findOneAndUpdate({ code }, { $inc: { clicks: 1 } });
  if (!entry) return res.status(404).send('Not found');
  return res.redirect(entry.longUrl);
};