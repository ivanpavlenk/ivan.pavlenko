const { Router } = require('express');

const authRouter = Router();

const EMAIL = 'test@gmail.com';
const PASSWORD = '12345';

authRouter.post('/', (req, res) => {
  const { email, password } = req.body;
  if (EMAIL === email && password === PASSWORD) {
    req.session.user = email;
    return res.send({ success: true, user: email })
  }
  res.send({ success: false, user: null })
});

authRouter.get('/me', (req, res) => {
  res.send({ user: req.session.user })
});
authRouter.post('/logout',(req,res) => {
req.session.destroy()
res.redirect('/')
})

module.exports = authRouter;
