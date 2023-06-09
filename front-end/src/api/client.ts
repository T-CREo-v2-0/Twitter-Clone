import axios, { AxiosInstance } from "axios";

export default class TwitterDB {
  client: AxiosInstance;

  constructor(baseUrl = "http://localhost:3005") {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  async getTweets(limit: number) {
    const response = await this.client.get("/tweet", {
      params: {
        limit: limit,
      },
    });
    console.log(response.data);
    return response.data;
  }

  async getTweetsUser(username: string, limit: number) {
    const response = await this.client.get(`/tweet/${username}`, {
      params: {
        limit: limit,
      },
    });
    return response.data;
  }

}
