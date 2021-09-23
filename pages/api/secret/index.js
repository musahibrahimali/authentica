import { getSession } from "next-auth/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }
};
