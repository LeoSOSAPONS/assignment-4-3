const users = [
  {
    id: 1,
    username: "bsmithw3",
    email: "bsmith@mail.com",
    password: "bsmithw3_2023",
    name: "Brandon Smith",
  },
  {
    id: 2,
    username: "swoow3",
    email: "swoo@mail.com",
    password: "swoo_w3schools",
    name: "Samantha Woo",
  },
];

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  res.send(user ? "Login successful" : "Login failed").status(user ? 200 : 401);
};

const register = (req, res) => {
  const { id, username, email, password, name } = req.body;
  if (!id || !username || !email || !password || !name)
    return res.status(400).send("All fields are required for registration");
  if (users.some((u) => u.username === username))
    return res.status(400).send("Username already taken");

  const newUser = { id, username, email, password, name };
  users.push(newUser);

  res.send("User registered successfully");
};

module.exports = { login, register };
