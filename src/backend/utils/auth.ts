// const User = require("../database/users");
// const { verifyToken } = require("./jwt");

// const authMiddleware = async (req, res, next) => {
//   const authorization = req.get("Authorization");
//   const token = authorization?.split(" ").pop();

//   if (token) {
//     try {
//       const bearer = verifyToken(token);
//       const user = await User.findByPk(bearer.bearer_id);
//       if (!user) return res.sendStatus(401);
//       req.user = user.dataValues || user;
//       next();
//     } catch {
//       res.sendStatus(401);
//     }
//   } else {
//     res.sendStatus(401);
//   }
// };

// const authApiKey = async (req, res, next) => {
//   const API_KEY = req.header('x-api-key');

//   if (!API_KEY) return res.sendStatus(401);

//   const user = await User.findOne({ where: { apikey: API_KEY } });

//   if (!user) return res.sendStatus(401);

//   req.user = user;
//   next();
// }

// const authAdmin = async (req, res, next) => {
//   if (!req.user.is_admin) return res.sendStatus(401);
//   next();
// }
