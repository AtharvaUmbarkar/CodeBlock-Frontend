import { NextApiRequest, NextApiResponse } from "next";

const reqUrl = process.env.BACKEND_URL + "/backend/user/update-user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userDetails = await req.body;
  try {
    let response = await fetch(reqUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    response = await response.json();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error);
    return;
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

export default handler;
