module.exports = {
  jwtSecret:
    process.env.JWT_SECRET || 'this is a super secret jwt secret',
};
