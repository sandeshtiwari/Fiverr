import createError from '../utils/createError.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // const token = req.cookies.accessToken;
  // console.log('TOKEN FROM COOKIE', req.cookies.accessToken);
  const token = req.headers.token;
  // console.log(token);
  if (!token) return next(createError(401, 'Your are not authenticated!'));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    // console.log(req);
    next();
  });
};
