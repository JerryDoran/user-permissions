const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Steve', role: ROLE.ADMIN },
    { id: 2, name: 'Tony', role: ROLE.BASIC },
    { id: 3, name: 'Scott', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Steve's project", userId: 1 },
    { id: 2, name: "Tony's project", userId: 2 },
    { id: 3, name: "Scott's project", userId: 3 }
  ]
};
