import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  console.log("Authorization Header Received:", authHeader);

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    console.log("❌ Authentication Failed: No valid token in the header.");
    next("Authentication Failed");
  }

  const token = authHeader?.split(" ")[1];

  console.log("Extracted Token:", token);
  console.log("JWT Secret Key (from env, during verification):");

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);
    console.log("✅ JWT Verification Successful! Decoded Token:", userToken);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log("❌ JWT Verification Error:", error.message);
    console.log(error);
    next("Authentication Failed");
    console.log("Authorization Header:", req.headers.authorization);
  }
};
export default userAuth;
