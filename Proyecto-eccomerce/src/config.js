export default {
  fileSystem: {
    path: "./db",
  },
  mongodb: {
    cnxStr:
      "mongodb+srv://adminpeke:cloti2022@cluster0.cq9n54q.mongodb.net/ecommerce?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "ecommerce-pekeshop",
    private_key_id: "b7d449cb3317e994ba1cae70341a8d416e20669e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC22yE5FLLeuhvu\nRFoLGSzDr2b3wo5LaParMd+lo4Xs6fstG6JxEaOciEBS0w4ePRD7V6bWQgVyxLNP\nuNaDtK0FDfMQqStVWjQ16DIKrk8tbo5lD3rBdnOraepixxwDU3D0SPfgorPpGY3x\nt145R1J9tSf4OrgoN3UbEBPKPbQQVQNEA2CuVwWuKoqKNLUNqjgvCPtAkO4iNUWm\ndfZcrhIbktDq7iS7g0GY8v4Ij8r712hM5nAoMjvp/9yYabGETwyfv4HuKXWv7WbK\n3lZnmNw5WuJes/v6HwsKOQRjjtU1a4tHwXp9U0Kj7KgS+5qCipvAW9HuASZpiTQ5\nBgDGptmfAgMBAAECggEAFN8ZQTMwIYUbuAwcPQUQG3vzZFdUN55Q/YRxUy5BlKO2\ndFUhqwdI5g6VTP7jLydoP1AnbnBVv95c2z4tWhYu45NOibnNhO4JZJfO0nJH/lcO\nsNFeASQcmtW5l7HDbEvDalbD2GOp5nLwxUTZX+9YppmdaNOG/qwp1T92CtEVMwHX\npcHe791Wclt6S47MkJmkmmo3J/IZ4V84Cb671Hp8GPXrHNFs+k3JKVjUJZpoffeb\nnd4Yq2AzNDbfHasjU61qHnFjWUxCtvkGZvZpk8np6E+6KW7KsxnthMxFXomjiWlE\nwpJlJtoZngpOU+E9/XWFnN7cnVpjzDdD4dxSeNMUUQKBgQDlggRdyCn6gOnZeQK/\n2K1Ln4akTPqv78c/AmotPtz/0yXMUYX/3Q5U7n2RouNnjUQfvocNSYkOWfZZq+gW\nigtHJVTfanTm//5eGhYyhcKwFiVGThbPtBbGMSppesgH3MWXf/hRTiGPk9EPR9pP\nfsj3jlDv/IKbsS9Hzgf5d4S0zwKBgQDL9os7CGOMlO6JKakvJhgbUsmw1LWl23eu\nAZm8uIID6VJOEQMx99/5GeMJpqjgmrOagJdAu+U8Q5laheYq9QmeF9sl1hMc+cKZ\nvgPbUvEQfs0CkoX/+fgGvmeyeldE4hMZNT2T2MqSUxD+EWuYF/J5YxV99Ju+1ksr\nmunk+qdiMQKBgBqeTsVVvtCn/PdVGqWHiunXcbVCnFylcbV0IT5oKReetKaS2fjH\n+a6ODpBClR9gegM4hM9ctQGuG21hC8T5c79nrAVRgod8L1NYsTRg4SitGNujmO+0\nEmQgNawQKn0G9P/SPsmnRysw2LFuAvrvWH2lyutanQdTsIkiczhSzVhvAoGAcL0h\nLosvg2hbBWQKyS30Sz4Sj/SzRy8tUvg9gyw1aXYRcWdD7d3GZklhzlbZp/S6697C\nPBzf09TFslyq4fm5zDIBh0NyIyUG5LY8KYIKD4UXSqG1Ac2oxAmBBg1LqZ6Q0fE0\nzUEaj5DsppL4dwRdma0kFxAa+nw25q5lNJU76jECgYEA4Tow+viCrQqtuQj0JKlJ\nJzKxNIT7zocMnAir/oJ7GoBw3oYiD1Jlh52/SVUh3gJaKWQ6Izp/gtURbqSBLz4R\n1Bec5BwDeQczUXb3zz/fOyKdLcOCBHgJwzR8Pr+OZGokFS83vzpUKZwi+zRg7l15\nT6jBwRzcsU5j1XBknlCHrbw=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-pql6y@ecommerce-pekeshop.iam.gserviceaccount.com",
    client_id: "117125932114778843244",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pql6y%40ecommerce-pekeshop.iam.gserviceaccount.com",
  },
};
